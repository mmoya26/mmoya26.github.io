// Get bars element
let bars = document.getElementById("bars");

// Get side bar element
let side_bar = document.getElementById("side_bar");

// Get (X) element from side bar
let x_icon = document.getElementById("x");

// Get body element
let body = document.querySelector("body");

// Get Li's inside side navbar
let side_bar_list_items = document.querySelector("#side_bar li");

// Overlay element
let overlayScreen = document.querySelector('.overlay');

// Side bar links
let sideBarItems = Array.from(document.querySelectorAll('.side_bar li a'));

bars.addEventListener("click", () => {
    side_bar.classList.toggle("display_none");
    overlayScreen.classList.toggle('display_none');
});

x_icon.addEventListener("click", () => {
    side_bar.classList.toggle("display_none");
    overlayScreen.classList.toggle('display_none');
});

sideBarItems.forEach(item => {
    item.addEventListener("click", (e) => {
        side_bar.classList.toggle("display_none");
        overlayScreen.classList.toggle('display_none');
    });
})