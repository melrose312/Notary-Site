// Simple form submission handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  // Show success message (in production, this would send to a server)
  alert("Thank you for your message! We will get back to you soon!");

  // Reset form
  this.reset();
});
