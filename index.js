// default it is dark theme
let darkTheme = true;

let cssTheme = document.getElementById("theme"); // to get current theme
let toggleBtn = document.getElementById("toggle-btn"); // to get event on the toggle button

toggleBtn.addEventListener("click", function() {
    if(darkTheme) { // if event on toggleButton
        // change theme to white
        cssTheme.setAttribute("href", "style2.css");
        darkTheme = false;
    }

    else {
        cssTheme.setAttribute("href", "style.css");
        darkTheme = true;
    }
})

