import { DOM } from "./DOM.js";
import { input } from "./variables.js";

export async function promesa(city, key) {
  if (!city) {
    return;
  }
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&appid=${key}&units=metric`;
  const response = await fetch(url);
  const result = await response.json();
  input.value = "";
  console.log(result);
  DOM(result);
}

export async function geolo(lat, lon, key) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=${key}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  DOM(data);
}
