window.addEventListener("resize", () => {
  handleScreenSize(window.innerWidth);
});

window.addEventListener("load", () => {
  handleScreenSize(window.innerWidth);
});

function handleScreenSize(width) {
  const landingImage = document.getElementById("landing-image");

  landingImage.src = `static/assets/${
    width <= 700 ? "MobileLandingIcon.svg" : "LandingIcon.svg"
  } `;

  console.log(width);
}
