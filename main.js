const menuBar = document.querySelector('.menu-bar'),
    links = document.querySelector('.links');

menuBar.addEventListener('click', function () {
    if (links.style.maxHeight) {
        links.style.maxHeight = null;
    } else {
        links.style.maxHeight = links.scrollHeight + 'px';
    }
});