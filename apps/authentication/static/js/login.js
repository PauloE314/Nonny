const username = document.getElementById("username");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit");
const error = document.getElementById('error-message');

// Error animation
if (error) {
  setTimeout(() => {
    error.style.height = '0';
  }, 1000);
}

// Form validation
function handleChange() {
  if (username.value === "" || password.value === "") {
    submitButton.classList.add("disabled");
  } else {
    submitButton.classList.remove("disabled");
  }
}

username.oninput = handleChange;
password.oninput = handleChange;
