let back1 = document.getElementById('back1');
let back2 = document.getElementById('back2');
let back3 = document.getElementById('back3');
let elem = document.getElementById('textBox');
let box = elem.getBoundingClientRect();

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
    var aqi = 100;
    var condition = "Hazardous";
    var colorClass = "maroon";
    if (aqi >= 0 && aqi <= 50) {
        condition = "Good";
        colorClass = "green";
    } else if (aqi <= 100) {
        condition = "Moderate";
        colorClass = "yellow";
    } else if (aqi <= 150) {
        condition = "Unhealthy for sensitive groups";
        colorClass = "orange";
    } else if (aqi <= 200) {
        condition = "Unhealthy";
        colorClass = "red";
    } else if (aqi <= 300) {
        condition = "Very unhealthy";
        colorClass = "purple";
    }
    document.getElementById("airCondition").innerHTML = condition;
    document.getElementById("aqiNum").innerHTML = aqi;
    document.getElementById("color").innerHTML = colorClass;
}