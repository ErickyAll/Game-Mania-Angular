$(document).ready(function () {
  $(".menu-bars").click(function () {
    $(".menu").toggleClass("mostraEscondeMenu");
  });

  $(document).ready(function () {
    $(".menu-text").click(function () {
      $(".menu").toggleClass("mostraEscondeMenu");
    });
  });

  $(".btn-price").click(function () {
    alert("Produto indisponivel :/");
  });
});

// function abreFechaMenu() {
//   // navbar -tag nav
//   let navbar = document.querySelector('.menu')
//   navbar.classList.toggle('mostraEscondeMenu')
//   // console.log(navbar);
// }
