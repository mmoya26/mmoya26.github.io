(() => {
    const navLinks = Array.from(document.querySelectorAll(".regular_navbar_item"));
    const dropDownMenu = document.querySelector(".dropdown_menu");

    navLinks.forEach(link => {
        if (link.classList.contains("business")) {
            link.addEventListener("mouseover", () => {
                dropDownMenu.classList.remove("display_none");
            });
        } else {
            link.addEventListener("mouseover", () => {
                dropDownMenu.classList.add("display_none");
            });
        }
    });

    // When mouse is removed from dropdown add display none class to dropdown element so it hides
    dropDownMenu.addEventListener("mouseout", () => {
        dropDownMenu.classList.add("display_none");
    });
})();