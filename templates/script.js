document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("password").value;

  if (user === "" || pass === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

  alert(`Bienvenido, ${user}!`);
});
