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
} from "./js/variables.js";
import { promesa, geolo } from "./js/promesas.js";

btnEdit.addEventListener("click", () => {
  contenedorInputBTN.classList.toggle("hidden");
});

input.addEventListener("input", () => input.value);

btn.addEventListener("click", () => {
  if (!input.value) {
    return;
  }
  promesa(input.value, key);
  cardHumidity.innerHTML = "";
  cardAmanecer.innerHTML = "";
  cardWind.innerHTML = "";
  cardAtardecer.innerHTML = "";
  contenedorInputBTN.classList.add("hidden");
});

window.addEventListener("load", () => {
  navigator.geolocation.getCurrentPosition(success, err);
});

function success(position) {
  geolo(position.coords.latitude, position.coords.longitude, key);
}

function err() {
  const dataLocal = JSON.parse(localStorage.getItem("coord")) || {
    lat: -33.45694,
    lon: -70.64827,
  };
  geolo(dataLocal.lat, dataLocal.lon, key);
}
