const username = document.getElementById("username");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit");

function handleChange() {
  if (username.value === "" || password.value === "") {
    submitButton.classList.add("disabled");
  } else {
    submitButton.classList.remove("disabled");
  }
}

username.onchange = handleChange;
password.onchange = handleChange;
