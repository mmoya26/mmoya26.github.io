(() => {

    // List of all links in navigation bar
    const navLinks = Array.from(document.querySelectorAll(".regular_navbar_item"));

    // Hidden dropdown menu element
    const dropDownMenu = document.querySelector(".dropdown_menu");

    navLinks.forEach(link => {
        
        /* If the current link contains class "business" add event listener for when mouse is over to display
        dropdown menu */
        if (link.classList.contains("business")) {
            link.addEventListener("mouseover", () => {
                dropDownMenu.classList.remove("display_none");
            });
        } else {
            /* Else if the current link does not contain class "business" then add regular event listener from when
            mouse is not longer over the element to hide dropdown menu*/
            link.addEventListener("mouseover", () => {
                dropDownMenu.classList.add("display_none");
            });
        }
    });

    // When mouse is no longer hovering the dropdown add the display_none class to dropdown element so it hides
    dropDownMenu.addEventListener("mouseout", () => {
        dropDownMenu.classList.add("display_none");
    });


    const sideBarELement = document.querySelector(".side_bar");
    const barsElement = document.querySelector(".bars");
    const sideBarXIcon = document.querySelector(".side_bar_x");

    barsElement.addEventListener("click", () => {
        sideBarELement.classList.remove("display_none");
    });

    sideBarXIcon.addEventListener("click", () => {
        sideBarELement.classList.add("display_none");
    });


    function setSwiper(){
        // User hasn't resized in 500ms

        // If window width is less than or equal to 500px then set carousel to only show one image
        if (window.innerWidth <= 500) {
            let swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 45,
                slidesPerGroup: 1,
                loop: true,
                loopFillGroupWithBlank: true,
                navigation: {
                    nextEl: ".next_arrow",
                    prevEl: ".prev_arrow",
                },
            });
        } else if(window.innerWidth <= 1400) {
            // If window width is less than or equal to 1400px then set carousel to only show two image
            let swiper = new Swiper(".mySwiper", {
                slidesPerView: 2,
                spaceBetween: 45,
                slidesPerGroup: 2,
                loop: true,
                loopFillGroupWithBlank: true,
                navigation: {
                    nextEl: ".next_arrow",
                    prevEl: ".prev_arrow",
                },
            });
        } else {
            // If window is not less than or equal to 500 px or 1400px set to original state to show three images
            let swiper = new Swiper(".mySwiper", {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
                loop: true,
                loopFillGroupWithBlank: true,
                navigation: {
                    nextEl: ".next_arrow",
                    prevEl: ".prev_arrow",
                },
            });
        }
    }

    let timer;

    // Set timer on window resize to check if user has resized the window any in the last half second
    window.onresize = function(){
      clearTimeout(timer);
      timer = setTimeout(setSwiper, 500);
    };

    // This function will be called once the script loads once so that the carousel can be set right away
    setSwiper();
})();