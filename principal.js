(function () {
    var menu = document.getElementById('menu');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('menuFixo');
        else menu.classList.remove('menuFixo');
    });
})();