
// index.js

document.addEventListener("DOMContentLoaded", function () {
  // Get the "Sign Up" button
  const signUpButton = document.querySelector(".button3");

  // Add a click event listener to the "Sign Up" button
  signUpButton.addEventListener("click", function () {
      // Get the email, password, and checkbox elements
      const emailInput = document.querySelector(".email-input");
      const passwordInput = document.querySelector(".password-input");
      const termsCheckbox = document.querySelector("#termsCheckbox");

      // Check if the email and password fields are empty
      if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
          alert("Fill in the fields.");
          return; // Prevent further action if fields are empty
      }

      // Check if the checkbox is not checked
      if (!termsCheckbox.checked) {
          alert("Please agree to the terms.");
          return; // Prevent further action if checkbox is not checked
      }

      // If all checks pass, proceed with sign-up or other actions here
      // For now, let's just print a success message to the console
      console.log(emailInput);
      console.log(passwordInput);
      console.log("Sign up successful!");
  });
});
