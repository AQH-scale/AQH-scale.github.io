let back1 = document.getElementById('back1');
let back2 = document.getElementById('back2');
let back3 = document.getElementById('back3');
let elem = document.getElementById('textBox');
let box = elem.getBoundingClientRect();

async function fillInText() {
  const response = await $.ajax({
    method: "POST",
    url: `http://localhost:8056/api`,
    contentType: "application/json",
    data: JSON.stringify({
      'query': 'hello',
      'location': {
        'lon': 47.6038321,
        'lat': -122.330062,
      }
    }),
  })


  console.log(response.data)

  document.getElementById("PM25").innerHTML = response.data.components.pm2_5
  document.getElementById("PM10").innerHTML = response.data.components.pm10
  document.getElementById("CO").innerHTML = response.data.components.co
  document.getElementById("SO2").innerHTML = response.data.components.so2
  document.getElementById("NO2").innerHTML = response.data.components.no2
  document.getElementById("O3").innerHTML = response.data.components.o3
  document.getElementById("aqiNum").innerHTML = response.data.aqi;

  document.getElementById('gpt-response').innerHTML = response.gtp_info
  setVariables()

  console.log(response)


}



fillInText()

window.addEventListener('scroll', () => {
    if (window.scrollY + box.height < box.bottom) {
        let value = window.scrollY;

        back1.style.top = value * 1.8 + 'px';
        back2.style.top = value * 1.1 + 'px';
        back3.style.top = value * 1.3 + 'px';
    }
});

var activeLink = null;
function toggleBackground(event) {
  var clickedLink = event.target;
  if (activeLink !== null) {
    activeLink.classList.remove('active');
  }
  if (activeLink !== clickedLink) {
    clickedLink.classList.add('active');
    activeLink = clickedLink;
  } else {
    activeLink = null;
  }
}

function setVariables() {
    const changeLengths = (pm25, pm10, co, so2, no2, o3) => {
        /*const gases = [pm25, pm10, co, so2, no2, o3];*/
        if (pm25 <= 10) {
            document.getElementById('pm25-section').style.width = "20%";
            document.getElementById('pm25-section').style.background = "#2deb60";
        } else if (pm25 <= 25) {
            document.getElementById('pm25-section').style.width = "40%";
            document.getElementById('pm25-section').style.background = "#ffda75";
        } else if (pm25 <= 50) {
            document.getElementById('pm25-section').style.width = "60%";
            document.getElementById('pm25-section').style.background = "#ff5100";
        } else if (pm25 <= 75) {
            document.getElementById('pm25-section').style.width = "80%";
            document.getElementById('pm25-section').style.background = "#E15555";
        } else {
            document.getElementById('pm25-section').style.gas.width = "100%";
            document.getElementById('pm25-section').style.background = "#E5D3B3";
        }

        if (pm10 <= 20) {
            document.getElementById('pm10-section').style.width = "20%";
            document.getElementById('pm10-section').style.background = "#2deb60";
        } else if (pm10 <= 50) {
            document.getElementById('pm10-section').style.width = "40%";
            document.getElementById('pm10-section').style.background = "#ffda75";
        } else if (pm10 <= 100) {
            document.getElementById('pm10-section').style.width = "60%";
            document.getElementById('pm10-section').style.background = "#ff5100";
        } else if (pm10 <= 200) {
            document.getElementById('pm10-section').style.width = "80%";
            document.getElementById('pm10-section').style.background = "#E15555";
        } else {
            document.getElementById('pm10-section').style.width = "100%";
            document.getElementById('pm10-section').style.background = "#E5D3B3";
        }

        if (co <= 4400) {
            document.getElementById('co-section').style.width = "20%";
            document.getElementById('co-section').style.background = "#2deb60";
        } else if (co <= 9400) {
            document.getElementById('co-section').style.width = "40%";
            document.getElementById('co-section').style.background = "#ffda75";
        } else if (co <= 12400) {
            document.getElementById('co-section').style.width = "60%";
            document.getElementById('co-section').style.background = "#ff5100";
        } else if (co <= 15400) {
            document.getElementById('co-section').style.width = "80%";
            document.getElementById('co-section').style.background = "#E15555";
        } else {
            document.getElementById('co-section').style.width = "100%";
            document.getElementById('co-section').style.background = "#E5D3B3";
        }
        
        if (so2 <= 20) {
            document.getElementById('so2-section').style.width = "20%";
            document.getElementById('so2-section').style.background = "#2deb60";
        } else if (so2 <= 80) {
            document.getElementById('so2-section').style.width = "40%";
            document.getElementById('so2-section').style.background = "#ffda75";
        } else if (so2 <= 250) {
            document.getElementById('so2-section').style.width = "60%";
            document.getElementById('so2-section').style.background = "#ff5100";
        } else if (so2 <= 350) {
            document.getElementById('so2-section').style.width = "80%";
            document.getElementById('so2-section').style.background = "#E15555";
        } else {
            document.getElementById('so2-section').style.width = "100%";
            document.getElementById('so2-section').style.background = "#E5D3B3";
        }

        if (no2 == 0) {
            document.getElementById('no2-section').style.width = "0%";
            document.getElementById('no2-section').style.background = "#2deb60";
        } else if (no2 <= 40) {
            document.getElementById('no2-section').style.width = "20%";
            document.getElementById('no2-section').style.background = "#2deb60";
        } else if (no2 <= 70) {
            document.getElementById('no2-section').style.width = "40%";
            document.getElementById('no2-section').style.background = "#ffda75";
        } else if (no2 <= 150) {
            document.getElementById('no2-section').style.width = "60%";
            document.getElementById('no2-section').style.background = "#ff5100";
        } else if (no2 <= 200) {
            document.getElementById('no2-section').style.width = "80%";
            document.getElementById('no2-section').style.background = "#E15555";
        } else {
            document.getElementById('no2-section').style.width = "100%";
            document.getElementById('no2-section').style.background = "#E5D3B3";
        }

        if (o3 <= 60) {
            document.getElementById('o3-section').style.width = "20%";
            document.getElementById('o3-section').style.background = "#2deb60";
        } else if (o3 <= 100) {
            document.getElementById('o3-section').style.width = "40%";
            document.getElementById('o3-section').style.background = "#ffda75";
        } else if (o3 <= 140) {
            document.getElementById('o3-section').style.width = "60%";
            document.getElementById('o3-section').style.background = "#ff5100";
        } else if (o3 <= 180) {
            document.getElementById('o3-section').style.width = "80%";
            document.getElementById('o3-section').style.background = "#E15555";
        } else {
            document.getElementById('o3-section').style.width = "100%";
            document.getElementById('o3-section').style.background = "#E5D3B3";
        }
    }

    /*
    const good = (gas) => {
        document.getElementById('bar-section').style.gas.width = 20;
        document.getElementById('bar-section').style.gas.background = "#2deb60";
    }
    const fair = (gas) => {
        document.getElementById('bar-section').style.gas.width = 40;
        document.getElementById('bar-section').style.gas.background = "#ffda75";
    }
    const moderate = (gas) => {
        document.getElementById('bar-section').style.gas.width = 60;
        document.getElementById('bar-section').style.gas.background = "#ff5100";
    }
    const poor = (gas) => {
        document.getElementById('bar-section').style.gas.width = 80;
        document.getElementById('bar-section').style.gas.background = "#E15555";
    }
    const veryPoor = (gas) => {
        document.getElementById('bar-section').style.gas.width = 100;
        document.getElementById('bar-section').style.gas.background = "#E5D3B3";
    }*/

    var pm25 = 7.36;
    var pm10 = 8.21;
    var co = 216.95;
    var so2 = 0;
    var no2 = 1.03;
    var o3 = 49.35;
    changeLengths(pm25, pm10, co, so2, no2, o3);

    const setBackground = (main_background_color, card_color, text_color, button_color) => {
      document.body.style.background = main_background_color;
      document.getElementById('aqi-section').style.background = card_color
      document.getElementById('textBox').style.background = card_color
      document.getElementById('aqi-section').style.color = text_color
      document.getElementById('button').style.color = button_color
    }

    var aqi = document.getElementById("aqiNum").innerHTML;
    var condition = "Hazardous";
    var colorClass = "maroon";
    if (aqi >= 0 && aqi <= 50) {
        setBackground('#0B6E4F', "#7fb68590", "#2deb60", '#0B6E4F')
        condition = "Good";
        colorClass = "green";
    } else if (aqi <= 100) {
        setBackground('#bda800', "#dbc30090", "#ffff00", '#bda800')
        condition = "Moderate";
        colorClass = "yellow";
    } else if (aqi <= 150) {
        setBackground('#f28552', "#f1b689bc", "#ff5100", '#f28552')
        condition = "Unhealthy for sensitive groups";
        colorClass = "orange";
    } else if (aqi <= 200) {
        setBackground('#472929', "#5D3E3E", "#E15555", '#472929')
        condition = "Unhealthy";
        colorClass = "red";
    } else if (aqi <= 300) {
        setBackground('#664229', "#987554", "#E5D3B3", '#664229')
        condition = "Very unhealthy";
        colorClass = "purple";
    }
    document.getElementById("airCondition").innerHTML = condition;
    document.getElementById("color").innerHTML = colorClass;
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("body").classList.add("loaded");
    }, 3000)
});

var input = document.getElementById("input");

input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      const text = input.value
      console.log(text)
    }
  });

