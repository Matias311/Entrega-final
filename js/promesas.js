import { DOM } from "./DOM.js";
import { input } from "./variables.js";

/* Promesa con la cual solo se accede con el nombre de la ciudad, si existe un error tira una alerta */
export async function promesa(city, key) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&appid=${key}&units=metric`;
    const response = await fetch(url);
    const result = await response.json();
    input.value = "";
    DOM(result);
    guardarLocal(result);
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      html: `<span>Ciudad no encontrada, vuelva a intentar</span>`,
      timer: 5000,
      timerProgressBar: true,
      allowEnterKey: true,
      preConfirm: async () => {
        location.reload();
      },
    });
  }
}

/* Promesa con la cual se accede a la informacion con la latitud y longitud */
export async function geolo(lat, lon, key) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=${key}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  DOM(data);
}
/* Guarda la informacion en el local storage */
function guardarLocal(result) {
  localStorage.setItem("coord", JSON.stringify(result.coord));
}
