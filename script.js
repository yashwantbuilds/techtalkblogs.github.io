document.addEventListener('DOMContentLoaded', function() {
    const parentItems = document.querySelectorAll('.parent-item');

    parentItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
    });
});
