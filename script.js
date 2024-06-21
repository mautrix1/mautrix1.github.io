document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".proyectos div");

    function handleScroll() {
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("show");
            } else {
                element.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case elements are already in view
});
