// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});

// Simple form validation
function validateForm() {
  let form = document.forms["contactForm"];
  let name = form["name"].value.trim();
  let email = form["email"].value.trim();
  let message = form["message"].value.trim();

  if (name === "" || email === "" || message === "") {
    alert("All fields are required.");
    return false;
  }

  // Simple email format check
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Success feedback
  alert("Thank you, " + name + "! Your message has been sent.");
  return true;
}
