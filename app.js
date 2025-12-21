// Simple form submission handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  // Show success message
  alert("This feature has not been implemented, for demonstration only.");

  // Reset form
  this.reset();
});
