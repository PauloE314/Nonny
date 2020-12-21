const username = document.getElementById("username");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit");
const error = document.getElementById('error-container');

// Error animation
if (error) {
  setTimeout(() => {
    error.style.transform = 'scale(0)';
    error.style.marginTop = '-2rem'
    error.style.marginBottom = '-1rem'
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
