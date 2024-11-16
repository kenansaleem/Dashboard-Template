let mainMenuOpen = document.body.getElementsByClassName("main-menu-open")[0];
let mainMenuClose = document.body.getElementsByClassName("main-menu-close")[0];
let sidebar = document.body.getElementsByClassName("sidebar")[0];

mainMenuOpen.addEventListener("click", function () {
    sidebar.classList.add("show-menu");
});

mainMenuClose.addEventListener("click", function () {
    sidebar.classList.remove("show-menu");
});

document.addEventListener('click', function (event) { 
    if (sidebar.classList.contains("show-menu")) {
        if (!sidebar.contains(event.target) && !mainMenuOpen.contains(event.target)) {
            sidebar.classList.remove("show-menu");
        }
    }
});
