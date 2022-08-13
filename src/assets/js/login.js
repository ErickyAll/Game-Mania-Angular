$(document).ready(function () {
  //mask
  $("#phone").mask("(00) 0 0000-0000");

  //validar form
  $("#signin").click(function () {
    let user = $("#usuario").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let key = $("#password").val();

    if (
      user.trim() == "" ||
      phone.trim() == "" ||
      email.trim() == "" ||
      key.trim() == ""
    ) {
      // console.log("Favor, preencher todos os campos");
    } else {
      $("#signin").css("background-color", "green");
    }
  });
});
