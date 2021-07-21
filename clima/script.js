document.querySelector(".busca").addEventListener("submit", (event) => {
  event.preventDefault();

  let input = document.querySelector("#searchInput").value;

  if (input !== "") {
    showWarning("Carregando...");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      input
    )}&appid=23732ccd8c5274148b542da31e2b146b&units=metric&lang=pt_br`;
  } else {
  }
});

function showWarning(msg) {
  document.querySelector(".aviso").innerHTML = msg;
}
