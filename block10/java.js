document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const successMessage = document.getElementById("success-message");
    successMessage.innerHTML = `Thank you for your interest, ${nameInput.value}!`;
    nameInput.value = "";
    emailInput.value = "";
  });
});
window.addEventListener("load", function () {
  const form = document.getElementById("myForm");
  const submitbtn = document.getElementById("submitbtn");
  form.addEventListener("submit", () => {
      window.location.replace("payme.html");
    });
});
