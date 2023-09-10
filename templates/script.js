let back1 = document.getElementById('back1');
let back2 = document.getElementById('back2');
let back3 = document.getElementById('back3');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  back1.style.top = value * 1.8 + 'px';
  back2.style.top = value * 1.1 + 'px';
  back3.style.top = value * 1.3 + 'px';
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