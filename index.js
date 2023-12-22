/* Imports */
import {
  input,
  btn,
  key,
  btnEdit,
  contenedorInputBTN,
  cardHumidity,
  cardAmanecer,
  cardWind,
  cardAtardecer,
  hora,
  script,
  appContainer,
  body,
} from "./js/variables.js";
import { promesa, geolo } from "./js/promesas.js";

/* Boton de busqueda */
btnEdit.addEventListener("click", () => {
  contenedorInputBTN.classList.toggle("hidden");
});
/* Buscador */
input.addEventListener("input", () => input.value);
/* Limpia las cartas, retorna si no hay nada en el input y llama a la promesa */
btn.addEventListener("click", () => {
  if (!input.value) {
    return;
  }
  /* !input.value && return; */
  promesa(input.value, key);
  cardHumidity.innerHTML = "";
  cardAmanecer.innerHTML = "";
  cardWind.innerHTML = "";
  cardAtardecer.innerHTML = "";
  contenedorInputBTN.classList.add("hidden");
});
/* Busca si hay algo en el local y si no ocupa la informacion del navegador */
window.addEventListener("load", () => {
  if (localStorage.getItem("coord")) {
    const coord = JSON.parse(localStorage.getItem("coord"));
    geolo(coord.lat, coord.lon, key);
  } else {
    navigator.geolocation.getCurrentPosition(success, err);
  }
  /* Detecta la hora a la cual se ingresa y modifica el background */
  if (hora <= 19) {
    script.src = "./js/DayParticles.js";
    appContainer.appendChild(script);
    body.classList.add(
      "bg-gradient-to-tl",
      "via-[#80BFFF]",
      "via-50%",
      "from-[#94e7ff]",
      "to-[#fcd34d]"
    );
  } else {
    script.src = "./js/NightParticles.js";
    appContainer.appendChild(script);
  }
});
/* si se obtiene informacion del navegador se pasa y se llama a geolo para mostrar info en la pagina */
function success({ coords: { latitude, longitude } } = position) {
  geolo(latitude, longitude, key);
}
/* Si existe un error obteniendo la informacion, revisa el local y si no hay nada en el local, agrega valores predeterminados y llama a la funcion de geolo para mostrar la infor en la pantalla */
function err() {
  const dataLocal = JSON.parse(localStorage.getItem("coord")) || {
    lat: -33.45694,
    lon: -70.64827,
  };
  geolo(dataLocal.lat, dataLocal.lon, key);
}
