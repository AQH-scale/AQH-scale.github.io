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
        'lon': 47.6061,
        'lat': 122.3328,
      }
    }),
  })

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

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function setVariables() {

    const setBackground = (main_background_color, card_color, text_color) => {
      document.body.style.background = main_background_color;
      document.getElementById('aqi-section').style.background = card_color
      document.getElementById('textBox').style.background = card_color
      document.getElementById('aqi-section').style.color = text_color
    }

    var aqi = 60;
    var condition = "Hazardous";
    var colorClass = "maroon";
    if (aqi >= 0 && aqi <= 50) {
        setBackground('#0B6E4F', "#7fb68590", "#2deb60")
        condition = "Good";
        colorClass = "green";
    } else if (aqi <= 100) {
        setBackground('#bda800', "#dbc30090", "#ffff00")
        condition = "Moderate";
        colorClass = "yellow";
    } else if (aqi <= 150) {
        setBackground('#ff4d00', "#ff740090", "#ffc100")
        condition = "Unhealthy for sensitive groups";
        colorClass = "orange";
    } else if (aqi <= 200) {
        setBackground('#472929', "#5D3E3E", "#E15555")
        condition = "Unhealthy";
        colorClass = "red";
    } else if (aqi <= 300) {
        setBackground('#664229', "#987554", "#E5D3B3")
        condition = "Very unhealthy";
        colorClass = "purple";
    }
    document.getElementById("airCondition").innerHTML = condition;
    document.getElementById("aqiNum").innerHTML = aqi;
    document.getElementById("color").innerHTML = colorClass;
}

