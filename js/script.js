console.log("It's good to have you here")

let header__buttonTheme = document.querySelector(".header__buttonTheme");
let background = document.querySelector(".background");
let header__spanThemeName = document.querySelector(".header__spanThemeName");
let header__spanShowHide = document.querySelector(".header__spanShowHide");
let header__spanNameSurname = document.querySelector(".header__spanNameSurname");

header__buttonTheme.addEventListener("click", () => {
    background.classList.toggle("backgroundDark");

    if (background.classList.contains("backgroundDark")) {
        header__spanThemeName.innerText = "JASNY MOTYW";
    }
    else {
        header__spanThemeName.innerText = "CIEMNY MOTYW";
    }



});

header__spanShowHide.addEventListener("click", () => {
    if (header__spanNameSurname.innerText === "Wojciech K"){
        header__spanShowHide.innerText = "POKAŻ";
    }
        else {header__spanShowHide.innerText = "UKRYJ";
    }
});

header__spanShowHide.addEventListener("click", () => {
    header__spanNameSurname.innerText = "Wojciech K";
    
    if (header__spanShowHide.innerText === "POKAŻ"){
        header__spanNameSurname.innerText = "..."
    }
});