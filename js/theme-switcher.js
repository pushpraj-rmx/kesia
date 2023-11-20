// js/theme-switcher.js

document.addEventListener('DOMContentLoaded', function () {
    const themeSwitcher = document.getElementById('theme-switcher');
    
    themeSwitcher.addEventListener('click', function () {
        // Toggle the theme by changing the value of data-theme
        document.documentElement.setAttribute(
            'data-theme',
            document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
        );
    });
});
