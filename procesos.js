const textoIngresado = document.querySelector("#texto");
const textoResultado = document.querySelector("#textoResultado");

const btnEncriptar = document.querySelector("#encri");
const btnDesencriptar = document.querySelector("#desencri");
const btnCopiar = document.querySelector("#copiar");

let toggle = document.getElementById("toggle");
let label = document.getElementById("label");
let advertencia = document.getElementById("advertencia");
let titulo = document.getElementById("titulo");
let noResuelto = document.getElementById("noResuelto");
toggle.addEventListener("change", (event) => {
  let estado = event.target.checked;
  document.body.classList.toggle("oscuro");
  if (estado == true) {
    label.innerHTML = '<i class="fa-solid fa-sun"></i>';
    label.style.color ="white";
    advertencia.style.color="white";
    titulo.style.color="skyblue";
    noResuelto.style.color="#5e5b5b";
  } else {
    label.innerHTML = '<i class="fa-solid fa-moon"></i>';
    label.style.color ="black";
    titulo.style.color="darkblue";
    noResuelto.style.color="black";
    advertencia.style.color="#5e5b5b";
  }
});

function encriptar() {
  let texto = textoIngresado.value;
  let Mayusculas = /[A-Z]/;
  let Acentos = /[áéíóúÁÉÍÓÚ]/;

  if (Mayusculas.test(texto) || Acentos.test(texto)) {
    alert("Error: Ha ingresado mayúsculas y/o acentos. Intente de nuevo.");
    textoIngresado.focus();
  } else {
    let textoEncriptado = texto
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("o", "ober")
      .replaceAll("a", "ai")
      .replaceAll("u", "ufat");

    document.getElementById("noResuelto").style.visibility = "hidden";
    document.getElementById("copiar").style.visibility = "visible";

    textoResultado.value = textoEncriptado;
  }
}

function desencriptar() {
  let textoEncriptado = textoIngresado.value;
  let texto = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";

  textoResultado.value = texto;

  document.getElementById("texto").value = '';

}

function copiar() {
  let textoEncriptado = textoResultado.value;
  navigator.clipboard.writeText(textoEncriptado);
  textoIngresado.value = "";
  textoResultado.value = "";
  textoIngresado.focus();
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;


