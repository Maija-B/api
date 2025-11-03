async function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }
  const response = await fetch(`/api/weather?city=${city}`);
  const data = await response.json();
  if (data.error) {
    document.getElementById("result").innerText = `Error: ${data.error}`;
  } else {
    document.getElementById("result").innerText =
      `City: ${data.city}\nTemperature: ${data.temperature}°C\nWeather: ${data.weather}`;
  }
}
