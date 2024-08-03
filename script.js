document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    const currentUrl = window.location.href;

    // Get all menu links
    const menuLinks = document.querySelectorAll('.menu-link');

    menuLinks.forEach(link => {
        // Check if the href matches the current URL
        if (link.href === currentUrl) {
            link.classList.add('active'); // Highlight the active link
            link.closest('.submenu').classList.add('active-menu'); // Open the submenu
            link.closest('.menu-item').querySelector('.parent-item').classList.add('active'); // Highlight parent item
        }
    });

    // Toggle submenu display on parent item click
    const parentItems = document.querySelectorAll('.parent-item');

    parentItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('open');
        });
    });
});
