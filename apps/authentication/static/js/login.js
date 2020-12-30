const username = document.getElementById("username");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit");

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
