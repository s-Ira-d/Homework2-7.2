const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const saveBtn = document.getElementById("saveBtn");

const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername) {
  usernameInput.value = savedUsername;
}

if (savedPassword) {
  passwordInput.value = savedPassword;
}

saveBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    alert("Будь ласка, заповніть усі поля!");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Дані збережено!");
});
