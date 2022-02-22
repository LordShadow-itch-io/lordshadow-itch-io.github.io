const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

//navbarLinks.addEventListener('click', clickk());

let show = true;

function toggleTopBar() {
    if (show) {
        navbarLinks.style.display = "flex";
        show = false;
    }
    else {
        navbarLinks.style.display = "none";
        show = true;
    }
}