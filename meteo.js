let ville = "Tokyo";

let btn = document.querySelector("#changer");
btn.addEventListener("click", () => {
  let ville = prompt("Choississez une ville");
  recevoirTemperature(ville);
});

function recevoirTemperature(ville = "Tokyo") {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

  let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let temperature = reponse.main.temp;
        document.querySelector("#ville").textContent = ville;
        document.querySelector("#temperature_label").textContent = temperature;
      }
    } else {
      alert("Aïe, il y a un problème");
    }
  };
}
recevoirTemperature();
