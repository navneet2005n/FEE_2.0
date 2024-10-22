document.getElementById('hamburger').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdown-menu');
    if (dropdown.style.display === "flex") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "flex";
    }
});
