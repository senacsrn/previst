this.addEventListener("install", function (event) {
  console.log("Service worker instalado.");
});

this.addEventListener("activate", function (event) {
  console.log("Service worker ativado.");
});
