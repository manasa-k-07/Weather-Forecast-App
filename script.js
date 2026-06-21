const apiKey = "b2ce220a484cf414e81eae0fb9561a05";

async function getWeather() {
  const city = document.getElementById("city").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}</h2>
            <h3>${data.main.temp}°C</h3>
            <p>${data.weather[0].description}</p>
            
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        `;
    document.getElementById("city").value = "";
  } catch (error) {
    alert("City not found");
  }
}
document.getElementById("city").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getWeather();
  }
});
