const hamb = document.querySelector('.hamburger');

hamb.addEventListener('click', function () {
    this.classList.toggle('is-active');
});