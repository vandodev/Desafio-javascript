document.querySelector(".busca").addEventListener("submit", async (event) => {
  event.preventDefault();

  let input = document.querySelector("#searchInput").value;

  if (input !== "") {
    showWarning("Carregando...");

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      input
    )}&appid=23732ccd8c5274148b542da31e2b146b&units=metric&lang=pt_br`;

    let results = await fetch(url);
    let json = await results.json();

    if (json.cod === 200) {
      showInfo({});
    } else {
      showWarning("Não encontramos essa localização");
    }
  }
});

function showWarning(msg) {
  document.querySelector(".aviso").innerHTML = msg;
}
