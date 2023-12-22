/* Import */
import {
  img,
  temperatura,
  tempMax,
  tempMin,
  ciudad,
  divider,
  description,
  cardHumidity,
  cardWind,
  cardAmanecer,
  cardAtardecer,
  horasCard,
  btnEdit,
  appContainer,
} from "./variables.js";

/* Funcion principal la cual modifica el DOM, esta se encarga del icono e informacion de la temperatura */
export function DOM(data) {
  const {
    weather,
    main: { temp_max, temp_min, temp },
    name,
  } = data;
  const linkImg = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  img.src = linkImg;
  img.classList.add("opacity-100");
  temperatura.innerHTML = Math.floor(temp) + "&#8451;";
  tempMax.innerHTML = Math.floor(temp_max) + "&#8451;";
  divider.innerText = "/";
  tempMin.innerHTML = Math.floor(temp_min) + "&#8451;";
  ciudad.innerHTML = "Clima en " + name;
  ciudad.classList.add("vov", "fade-in", "fast");
  description.innerHTML = weather[0].description;
  CardHumedad(data);
  CardWind(data);
  AtardecerAmanecer(data);
  btnEdit.src = "./img/edit.png";
  appContainer.classList.add(
    "border",
    "border-black",
    "rounded-xl",
    "p-10",
    "text-white",
    "bg-black",
    "opacity-75"
  );
}
/* Esta funcion genera la carta de humedad */
function CardHumedad({ main: { humidity } } = data) {
  /* icono de gota */
  const img = document.createElement("img");
  img.src = "./img/drop.png";
  img.classList.add("w-8");
  cardHumidity.appendChild(img);
  /* Titulo */
  const title = document.createElement("h3");
  title.innerHTML = "Humedad";
  title.classList.add("italic", "font-medium");
  cardHumidity.appendChild(title);
  /* Porcentaje */
  const porcentaje = document.createElement("p");
  porcentaje.innerHTML = humidity + "%";
  porcentaje.classList.add("text-sm");
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
    "w-2/4",
    "bg-opacity-75",
    "bg-[#171717]",
    "vov",
    "fade-in",
    "fastest",
    "t-1"
  );
}
/* Esta funcion genera la carta de viento */
function CardWind({ wind: { speed } } = data) {
  /* icono de gota */
  const img = document.createElement("img");
  img.src = "./img/wind.png";
  img.classList.add("w-8");
  cardWind.appendChild(img);
  /* Titulo */
  const title = document.createElement("h3");
  title.innerHTML = "Viento";
  title.classList.add("italic", "font-medium");
  cardWind.appendChild(title);
  /* Informacion viento kilometro hora */
  const velocidad = document.createElement("p");
  velocidad.innerHTML = Math.floor(speed * 3.6) + " " + "km/h";
  velocidad.classList.add("text-sm");
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
    "w-2/4",
    "bg-opacity-75",
    "bg-[#171717]",
    "vov",
    "fade-in",
    "fastest",
    "t-2"
  );
}
/* Esta funcion genera la hora del amanecer y atardecer */
function AtardecerAmanecer({ sys: { sunrise, sunset } } = data) {
  /* Amanecer */
  /* Imagen */
  const sunriseImg = document.createElement("img");
  sunriseImg.src = "./img/sunrise.png";
  /* Title */
  const sunriseTitle = document.createElement("h3");
  sunriseTitle.innerHTML = "Amanecer";
  sunriseTitle.classList.add("italic", "font-medium");
  /* Tiempo */
  const tiempoSunrise = document.createElement("p");
  tiempoSunrise.innerHTML = tiempoConversion(sunrise);
  tiempoSunrise.classList.add("text-sm");
  /* AppendChild */
  cardAmanecer.appendChild(sunriseImg);
  cardAmanecer.appendChild(sunriseTitle);
  cardAmanecer.appendChild(tiempoSunrise);
  /* Sunset */
  /* Imagen */
  const sunSetImg = document.createElement("img");
  sunSetImg.src = "./img/sunset.png";
  /* Title */
  const sunsetTitle = document.createElement("h3");
  sunsetTitle.innerHTML = "Atardecer";
  sunsetTitle.classList.add("italic", "font-medium");
  /* Tiempo */
  const tiempoSunSet = document.createElement("p");
  tiempoSunSet.innerHTML = tiempoConversion(sunset);
  tiempoSunSet.classList.add("text-sm");
  /* AppendChild */
  cardAtardecer.appendChild(sunSetImg);
  cardAtardecer.appendChild(sunsetTitle);
  cardAtardecer.appendChild(tiempoSunSet);
  /* Estilos */
  horasCard.classList.add(
    "flex",
    "justify-around",
    "items-center",
    "border",
    "rounded-md",
    "border-black",
    "bg-opacity-75",
    "bg-[#171717]",
    "vov",
    "fade-in",
    "fastest",
    "t-3"
  );
  cardAtardecer.classList.add("flex", "flex-col", "items-center");
  cardAmanecer.classList.add("flex", "flex-col", "items-center");
}
/* Esta funcion pasa de unix a timestamp y asi podemos obtener la hora */
function tiempoConversion(unixTime) {
  /* Pasa el unix a milisegundos */
  let date = new Date(unixTime * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let formattedTime = hours + ":" + minutes;
  return formattedTime;
}
