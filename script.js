// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Attach to all forms
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault(); // Stop normal page reload

      // Collect form data
      const formData = new FormData(form);
      const action = form.getAttribute("action");

      try {
        // Send data to Formspree
        const response = await fetch(action, {
          method: "POST",
          body: formData,
          headers: { "Accept": "application/json" }
        });

        if (response.ok) {
          // Redirect to thank you page
          window.location.href = "thankyou.html";
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("Error submitting form. Check your internet connection.");
      }
    });
  });
});