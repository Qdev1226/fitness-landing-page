document.getElementById('register-button').addEventListener("click", function() {
  document.querySelector('.popup-background').style.display = "flex";
  document.querySelector('body').style.overflow = "hidden";
});

document.querySelector('.close-button').addEventListener("click", function() {
	document.querySelector('.popup-background').style.display = "none";
  document.querySelector('body').style.overflow = "visible";
});
