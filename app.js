document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const firstName = document.querySelector('.firstName');
  const lastName = document.querySelector('.lastName');
  const email = document.querySelector('.email');
  const password = document.querySelector('.password');
  const togglePassword = document.querySelector('#togglePassword');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get trimmed values
    const fName = firstName.value.trim();
    const lName = lastName.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    // Clear previous error messages
    clearErrorMessages();

    // Validate fields
    let isValid = true;

    if (fName === '') {
      setErrorFor(firstName, 'First Name cannot be empty');
      isValid = false;
    }

    if (lName === '') {
      setErrorFor(lastName, 'Last Name cannot be empty');
      isValid = false;
    }

    if (emailVal === '') {
      setErrorFor(email, 'Email cannot be empty');
      isValid = false;
    } else if (!validateEmail(emailVal)) {
      setErrorFor(email, 'Looks like this is not an email');
      isValid = false;
    }

    if (passwordVal === '') {
      setErrorFor(password, 'Password cannot be empty');
      isValid = false;
    }

    if (isValid) {
      // Simulate form submission
      alert('Form submitted successfully!');
      form.reset();
      clearErrorMessages();
    }
  });

  // Validate email function
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Clear all error messages
  function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((message) => {
      message.textContent = '';
      message.style.display = 'none';
    });

    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
      input.classList.remove('error');
    });
  }

  // Set error message and styles
  function setErrorFor(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    input.classList.add('error');
  }

  // Toggle password visibility
  togglePassword.addEventListener('click', () => {
    if (password.type === 'password') {
      password.type = 'text';
      togglePassword.classList.remove('fa-eye');
      togglePassword.classList.add('fa-eye-slash');
    } else {
      password.type = 'password';
      togglePassword.classList.remove('fa-eye-slash');
      togglePassword.classList.add('fa-eye');
    }
  });
});
