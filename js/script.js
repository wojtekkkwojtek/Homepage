console.log("It's good to have you here")

let headerButtonTheme = document.querySelector(".js-headerButtonTheme");
let body = document.querySelector(".js-body");
let headerTheme = document.querySelector(".js-headerTheme");
let headerShow = document.querySelector(".js-headerShow");
let headerName = document.querySelector(".js-headerName");

headerButtonTheme.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    headerTheme.innerText = body.classList.contains("body--dark") ? "JASNY MOTYW" : "CIEMNY MOTYW";
});

headerShow.addEventListener("click", () => {
    if(headerName.innerText === "...") {
        headerShow.innerText = "UKRYJ";
        headerName.innerText = "Wojciech K";
    }
    else{
        headerShow.innerText = "POKAŻ";
        headerName.innerText = "...";
    }
});