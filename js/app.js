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

bars.addEventListener("click", () => {

    // Remove display_none class from side_bar
    side_bar.classList.remove("display_none");

    // Add background_blur class to body
    body.classList.add("background_blur");
});

x_icon.addEventListener("click", () => {

    // Add display_none class to side_bar
    side_bar.classList.add("display_none");

    // Remove background_blur class to body
    body.classList.remove("background_blur");
});