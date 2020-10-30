window.addEventListener("resize", () => {
  handleScreenSize(window.screen.width);
});

window.addEventListener("load", () => {
  handleScreenSize(window.screen.width);
});

function handleScreenSize(width) {
  const landingImage = document.getElementById("landing-image");

  landingImage.src = `static/assets/${
    width <= 700 ? "MobileLandingIcon.svg" : "LandingIcon.svg"
  } `;
}
