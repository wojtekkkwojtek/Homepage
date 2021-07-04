{
    const welcome = () => {
        console.log("It's good to have you here");
    }

    welcome();

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const headerTheme = document.querySelector(".js-headerTheme");

        body.classList.toggle("body--dark");
        headerTheme.innerText = body.classList.contains("body--dark") ? "JASNY MOTYW" : "CIEMNY MOTYW";

    }

    const init = () => {
        const headerButtonTheme = document.querySelector(".js-headerButtonTheme");
        headerButtonTheme.addEventListener("click", toggleBackground);
    }

    init();

    const showOrHide = () => {
        const headerShow = document.querySelector(".js-headerShow");
        const headerName = document.querySelector(".js-headerName");

        if(headerName.innerText === "...") {
            headerShow.innerText = "UKRYJ";
            headerName.innerText = "Wojciech K";
        }
        else{
            headerShow.innerText = "POKAŻ";
            headerName.innerText = "...";
        }
    }

    const display = () => {
        const headerShow = document.querySelector(".js-headerShow");
        headerShow.addEventListener("click", showOrHide);
    }

    display();

}

