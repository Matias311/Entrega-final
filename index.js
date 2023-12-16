const container = document.querySelector("#weather-container");
const input = document.querySelector("#input");
const select = document.querySelector("#select");
const btn = document.querySelector("#btn-busqueda");
const key = "f162883ffc65f950a63cb847901f3bd7";

async function promesa(city, country, key) {
  if (!city) {
    return;
  }
  if (!country) {
    return;
  }
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=es&appid=${key}&units=metric`;
  const response = await fetch(url);
  const result = await response.json();
  input.value = "";
  select.value = "";
  console.log(result);
  DOM(result);
}

function DOM(data) {
  const img = document.querySelector("#img");
  const temp = document.querySelector("#temp");
  const tempMax = document.querySelector("#temp_max");
  const ciudad = document.querySelector("#ciudad");
  const tempMin = document.querySelector("#temp_min");
  const linkImg = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  img.src = linkImg;
  img.classList.add("opacity-100");
  temp.innerHTML = Math.floor(data.main.temp);
  tempMax.innerHTML = "Maxima: " + Math.floor(data.main.temp_max);
  tempMin.innerHTML = "Minima: " + Math.floor(data.main.temp_min);
  ciudad.innerHTML = "Clima en " + data.name;
}

input.addEventListener("input", () => {
  return input.value;
});

select.addEventListener("change", () => {
  return select.value;
});

btn.addEventListener("click", () => {
  if (!input.value) {
    return;
  }
  if (!select.value) {
    return;
  }
  promesa(input.value, select.value, key);
});
