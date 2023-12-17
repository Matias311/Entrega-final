import {
  img,
  temp,
  tempMax,
  tempMin,
  ciudad,
  divider,
  description,
  cardHumidity,
  cardWind,
} from "./variables.js";

export function DOM(data) {
  const linkImg = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  img.src = linkImg;
  img.classList.add("opacity-100");
  temp.innerHTML = Math.floor(data.main.temp) + "&#8451;";
  tempMax.innerHTML = Math.floor(data.main.temp_max) + "&#8451;";
  divider.innerText = "/";
  tempMin.innerHTML = Math.floor(data.main.temp_min) + "&#8451;";
  ciudad.innerHTML = "Clima en " + data.name;
  description.innerHTML = data.weather[0].description;
  CardHumedad(data);
  CardWind(data);
}

function CardHumedad(data) {
  /* icono de gota */
  const img = document.createElement("img");
  img.src = "./img/drop.png";
  img.classList.add("w-8");
  cardHumidity.appendChild(img);
  /* Titulo */
  const title = document.createElement("h3");
  title.innerHTML = "Humedad";
  cardHumidity.appendChild(title);
  /* Porcentaje */
  const porcentaje = document.createElement("p");
  porcentaje.innerHTML = data.main.humidity + "%";
  cardHumidity.appendChild(porcentaje);
  /* Card clases */
  cardHumidity.classList.add(
    "flex",
    "border",
    "rounded-md",
    "border-black",
    "flex-col",
    "justify-center",
    "items-center",
    "py-2.5",
    "px-5",
    "w-2/4"
  );
}

function CardWind(data) {
  /* icono de gota */
  const img = document.createElement("img");
  img.src = "./img/wind.png";
  img.classList.add("w-8");
  cardWind.appendChild(img);
  /* Titulo */
  const title = document.createElement("h3");
  title.innerHTML = "Viento";
  cardWind.appendChild(title);
  /* Informacion viento kilometro hora */
  const velocidad = document.createElement("p");
  velocidad.innerHTML = Math.floor(data.wind.speed * 3.6) + " " + "km/h";
  cardWind.appendChild(velocidad);
  /* Card clases */
  cardWind.classList.add(
    "flex",
    "border",
    "rounded-md",
    "border-black",
    "flex-col",
    "justify-center",
    "items-center",
    "py-2.5",
    "px-5",
    "w-2/4"
  );
}
