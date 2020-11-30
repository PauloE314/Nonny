const username = document.getElementById("username");
const email = document.getElementById("email");
const image = document.getElementById("profile-image");
const fakeImage = document.getElementById("fake-image");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const showPassword = document.getElementById("see-password");
const showConfirmPassword = document.getElementById("see-confirm-password");
const submitButton = document.getElementById("submit");

function handleInputChange() {
  if (
    username.value === "" ||
    email.value === "" ||
    password.value === "" ||
    confirmPassword.value === "" ||
    password.value !== confirmPassword.value
  ) {
    submitButton.classList.add("disabled");
  } else {
    submitButton.classList.remove("disabled");
  }
}

function handleSeePassword(origin, target) {
  console.log(target);

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

username.onchange = handleInputChange;
email.onchange = handleInputChange;
password.onchange = handleInputChange;
confirmPassword.onchange = handleInputChange;

showPassword.onclick = () => handleSeePassword(showPassword, password);
showConfirmPassword.onclick = () =>
  handleSeePassword(showConfirmPassword, confirmPassword);

image.onchange = handleImageUpload;
