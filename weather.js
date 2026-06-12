const codes = {
    0: "Clear",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Cloudy",
    61: "Rain",
    63: "Rain",
    71: "Snow",
    95: "Thunderstorm"
};

async function getCoords(city){

    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );

    const data = await response.json();

    return data.results?.[0];
}

async function fetchWeather(
    lat,
    lon,
    name
){

    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=5&timezone=auto`
    );

    const data = await response.json();

    document.getElementById("place")
        .textContent = name;

    document.getElementById("temp")
        .textContent =
        Math.round(
            data.current.temperature_2m
        );

    document.getElementById("desc")
        .textContent =
        codes[data.current.weather_code]
        || "Weather";

    document.getElementById("wind")
        .textContent =
        `🌬 Wind: ${data.current.wind_speed_10m} km/h`;

    let html = "";

    data.daily.time.forEach(
        (day, index) => {

            html += `
                <div class="item">

                    <strong>
                        ${new Date(day)
                            .toLocaleDateString(
                                undefined,
                                {
                                    weekday:"short"
                                }
                            )}
                    </strong>

                    <p>
                        ${
                            codes[
                                data.daily.weather_code[index]
                            ] || "Weather"
                        }
                    </p>

                    <p>
                        ${
                            Math.round(
                                data.daily.temperature_2m_max[index]
                            )
                        }°
                        /
                        ${
                            Math.round(
                                data.daily.temperature_2m_min[index]
                            )
                        }°
                    </p>

                </div>
            `;
        }
    );

    document.getElementById(
        "forecast"
    ).innerHTML = html;
}

async function loadWeather(){

    const city =
        document.getElementById("city")
        .value || "London";

    const location =
        await getCoords(city);

    if(!location){

        alert("City not found");

        return;
    }

    fetchWeather(
        location.latitude,
        location.longitude,
        `${location.name}, ${location.country}`
    );
}

function useLocation(){

    navigator.geolocation.getCurrentPosition(

        position => {

            fetchWeather(
                position.coords.latitude,
                position.coords.longitude,
                "My Location"
            );
        },

        () => {

            alert(
                "Location access denied"
            );
        }
    );
}

document.getElementById("city")
    .addEventListener(
        "keypress",
        e => {

            if(e.key === "Enter"){

                loadWeather();
            }
        }
    );

loadWeather();