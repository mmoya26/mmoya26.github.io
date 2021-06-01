const Player =  (sign, turn) => {
    return {
        sign,
        turn
    }
}

let playerOne = Player("X", true);
let playerTwo = Player("O", false)

let Board = (function () {
    let gameBoard = ["","","","","","","","","",];
    let gameOver = false;

    const setUp = () => {
        const tilesContainer = document.querySelector(".tiles_container");

        for (let i = 1; i < 10; i++) {
            let tileElement = document.createElement("div");
            tileElement.classList.add("tile");
            tileElement.id = i;
            tileElement.addEventListener("click", () => {

                // If game is over, don't allow players to click more tiles, so return
                if(gameOver) return;
                
                /* If this method returns true it means that the correct sign was placed on the board and no turns
                    were lost. If the method  retuns false it means that the space was already filled thefore the turn 
                    should not be lost until the player picks and empty tile */
                if (DisplayController.markTitle(tileElement.id, playerOne.turn ? playerOne : playerTwo)) {
                    checkWinCondition();

                    if (gameOver) {
                        DisplayController.clearPlayerTurnMessage();
                        return;
                    }

                    switchTurns(false);
                    DisplayController.changePlayerTurnMessage(playerOne.turn ? playerOne : playerTwo);   
                }
                return;
            })
            tilesContainer.appendChild(tileElement)
        }
    };

    const updateGameBoardArray = (id, sign) => {
        gameBoard[id - 1] = sign;
    }

    const switchTurns = (clearIndicator) => {
        if (clearIndicator) {
            playerOne.turn = true;
            playerTwo.turn = false;
        } else {
            playerOne.turn = !playerOne.turn;
            playerTwo.turn = !playerTwo.turn;
        }
    }

    const checkWinCondition = () => {
        let currentPlayer = playerOne.turn ? playerOne : playerTwo;

        const winningSpots = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6], 
        ];

        winningSpots.forEach(array => {
            if(gameBoard[array[0]] === currentPlayer.sign && gameBoard[array[1]] === currentPlayer.sign && gameBoard[array[2]] === currentPlayer.sign) {
                gameOver = true;
            }
        });

        let draw = gameBoard.every(sign => sign !== "");

        if(gameOver) {
            DisplayController.displayWinner(currentPlayer);
            return;
        } else if (draw) {
            /* When passing null to displayWinner() it means that the game has been a draw
            therefore the method should not expected a player as usual */
            DisplayController.displayWinner(null);
            gameOver = true;
            return;
        }
    }

    const resetGame = () => {
        gameBoard = ["","","","","","","","","",];
        gameOver = false;
        switchTurns(true);
    }

    return {
        gameBoard,
        setUp,
        updateGameBoardArray,
        switchTurns,
        checkWinCondition,
        resetGame
    }

})(playerOne, playerTwo);

let DisplayController = (function () {
    const markTitle = (id, player) => {
        let temporaryTitle = document.getElementById(`${id}`);

        if (temporaryTitle.textContent !== "") {
            console.log("Already filled");
            return false;
        } else {
            temporaryTitle.textContent = player.sign;
            Board.updateGameBoardArray(temporaryTitle.id, player.sign);
            return true;
        }
    }

    const clearBoard = () => {
        let tiles = document.querySelectorAll('.tile');

        tiles.forEach(tile => {
            tile.textContent = "";
        });
    }
    
    const removeWinnerHeading = () => {
        let body = document.body;
        let message = document.getElementById("winner");

        if (message) {
            body.removeChild(message);
        } else {
            return;
        }
    }

    const displayWinner = (player) => {
        let winnerHeader = document.createElement("h3");
        winnerHeader.id = "winner";
        
        if (player) {
            winnerHeader.textContent = `Winner: Player ${player.sign === "X" ? 1 : 2} (${player.sign})`;
        } else {
            winnerHeader.textContent = `It is a draw!`;
        }

        document.body.appendChild(winnerHeader);
    }

    const changePlayerTurnMessage = (player) => {
        let heading = document.getElementById("turn");

        if(player) {
            heading.textContent = `Player ${player.sign === 'X' ? 1 : 2} (${player.sign}) Turn`;
        } else {
            heading.textContent = `Player 1 (X) Turn`;
        }
    }

    const clearPlayerTurnMessage = () => {
        let heading = document.getElementById("turn");
        heading.textContent = "";
    }

    return {
        markTitle,
        clearBoard,
        displayWinner,
        removeWinnerHeading,
        changePlayerTurnMessage,
        clearPlayerTurnMessage
    }
})();

const clearButton = document.getElementById('clear');
clearButton.addEventListener("click", () => {
    DisplayController.clearBoard();
    DisplayController.removeWinnerHeading();
    Board.resetGame();
    DisplayController.changePlayerTurnMessage();
})

Board.setUp();