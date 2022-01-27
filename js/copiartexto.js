var botoncopy = document.querySelector("#btn-copy");
botoncopy.addEventListener("click", function (event) {
  event.preventDefault();
  var copyText = document.querySelector("#msg");
  copyText.select();
  document.execCommand("copy");
});
