function somar() {
  let a = parseInt(document.getElementById("n1").value);
  let b = parseInt(document.getElementById("n2").value);
  document.getElementById("resultado").innerText = "Resultado: " + (a + b);
}
