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
})();