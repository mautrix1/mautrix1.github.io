function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var moonIcon = document.getElementById("moonIcon");
    var sunIcon = document.getElementById("sunIcon");
    var myVideo = document.getElementById("myVideo");
    var mySecondVideo = document.getElementById("mySecondVideo");

    if (element.classList.contains("dark-mode")) {
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline-block";
        myVideo.src = "El Horno Dark.mp4"; // Change video source to dark mode video
        if (mySecondVideo) mySecondVideo.style.display = "block"; // Show second video in dark mode if it exists
    } else {
        moonIcon.style.display = "inline-block";
        sunIcon.style.display = "none";
        myVideo.src = "El Horno.mp4"; // Change video source to bright mode video
        if (mySecondVideo) mySecondVideo.style.display = "none"; // Hide second video in bright mode if it exists
    }
}

function toggleLanguageDropdown() {
    var dropdownMenu = document.getElementById("languageDropdown");
    var appsDropdown = document.getElementById("appsDropdown");
    dropdownMenu.classList.toggle("show");
    appsDropdown.classList.remove("show"); // Ensure apps dropdown is closed
}

function toggleAppsDropdown() {
    var dropdownMenu = document.getElementById("appsDropdown");
    var languageDropdown = document.getElementById("languageDropdown");
    dropdownMenu.classList.toggle("show");
    languageDropdown.classList.remove("show"); // Ensure language dropdown is closed
}

// Close dropdowns when clicking outside
document.addEventListener("click", function(event) {
    var languageDropdown = document.getElementById("languageDropdown");
    var appsDropdown = document.getElementById("appsDropdown");

    var languageToggle = event.target.closest("#languageDropdownToggle");
    var appsToggle = event.target.closest("#appsDropdownToggle");

    if (!languageToggle && !appsToggle && !event.target.closest(".dropdown-menu")) {
        languageDropdown.classList.remove("show");
        appsDropdown.classList.remove("show");
    }
});
