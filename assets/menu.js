// スマホ用メニューの開閉
document.querySelector('.menu-toggle').addEventListener('click', function () {
  var nav = document.querySelector('.global-nav');
  var open = nav.classList.toggle('open');
  this.setAttribute('aria-expanded', open);
});
