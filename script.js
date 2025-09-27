function toggleMode() {
    const body = document.documentElement;

    body.classList.toggle("light");

    const switchButtonIcon = document.querySelector("#switch button img");  
    const LightMode = body.classList.contains("light");
    const profile = document.getElementById("fotoDePerfil");
    

    if (LightMode) {
        switchButtonIcon.src = "./assets/sun.svg";
        switchButtonIcon.alt = "Light mode icon";
        // profile.setAttribute("src", "./assets/me.jpg");
        profile.src = "./assets/me.jpg";
    } else {
        switchButtonIcon.src = "./assets/moon-stars.svg";
        switchButtonIcon.alt = "Dark mode icon";
        // profile.setAttribute("src", "./assets/me-dark.jpeg");
        profile.src = "./assets/me-dark.jpg";
    }




    // html.classlist.toggle("light");

}