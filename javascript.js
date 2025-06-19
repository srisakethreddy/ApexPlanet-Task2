// Wait until page is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email.includes('@') || !message) 
    {
      alert("Please fill in all fields correctly.'");
    } 
    else
    {
     alert("Form has been successfully submitted!");
      form.reset(); // Clear the form
    }
  });
});
