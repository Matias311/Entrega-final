import { input, btn, key } from "./js/variables.js";
import { promesa, geolo } from "./js/promesas.js";

input.addEventListener("input", () => input.value);

btn.addEventListener("click", () => {
  if (!input.value) {
    return;
  }
  promesa(input.value, key);
});

navigator.geolocation.getCurrentPosition((position) => {
  geolo(position.coords.latitude, position.coords.longitude, key);
});
