const form = document.getElementById("sign-form");
const username = document.getElementById("username");
const image = document.getElementById("profile-image");
const fakeImage = document.getElementById("fake-image");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const showPassword = document.getElementById("see-password");
const showConfirmPassword = document.getElementById("see-confirm-password");
const submitButton = document.getElementById("submit");

function handleInputChange() {
  if (
    username.checkValidity() &&
    password.value != "" &&
    confirmPassword.value != ""
  ) {
    submitButton.classList.add("enabled");
    submitButton.classList.remove("disabled");
  } else {
    submitButton.classList.remove("enabled");
    submitButton.classList.add("disabled");
  }
}

function handleSeePassword(origin, target) {
  if (origin.classList.contains("active")) {
    origin.classList.remove("active");
    target.type = "password";
  } else {
    origin.classList.add("active");
    target.type = "text";
  }
}

function handleImageUpload(event) {
  const [upload] = event.target.files;

  if (upload) {
    const url = URL.createObjectURL(upload);
    fakeImage.classList.add("active");
    fakeImage.innerHTML = `
      <div id="image-data">
        <img src="${url}" id="uploaded-image" >
        <button type="button" onclick="handleRemoveImage()"><i class="fas fa-times icon"></i></button>
      </div>
    `;
  }
}

function handleRemoveImage() {
  const imageContainer = document.getElementById("image-data");
  imageContainer.style.opacity = 0;

  setTimeout(() => {
    fakeImage.classList.remove("active");
    fakeImage.innerHTML = `
      <i class="fas fa-upload icon appear"></i>
    `;
    image.value = "";
  }, 200);
}

username.oninput = handleInputChange;
password.oninput = handleInputChange;
confirmPassword.oninput = handleInputChange;
image.onchange = handleImageUpload;

showPassword.onclick = () => handleSeePassword(showPassword, password);
showConfirmPassword.onclick = () =>
  handleSeePassword(showConfirmPassword, confirmPassword);
