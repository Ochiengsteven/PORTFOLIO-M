const mainMenu = document.querySelector('#mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const portfolio = document.querySelector('a[href="#my-work"]');
const aboutMe = document.querySelector('a[href="#about-me"]');
const contactMe = document.querySelector('a[href="#contact-me"]');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
portfolio.addEventListener('click', close);
aboutMe.addEventListener('click', close);
contactMe.addEventListener('click', close);

// form validation

const form = document.querySelector('#form');
const emailText = document.querySelector('input[type="email"]');

form.addEventListener('submit', (event) => {
  if (emailText.value !== emailText.value.toLowerCase()) {
    event.preventDefault();

    // Remove previous error messages
    const previousErrorMessage = form.querySelector('.error-message');
    if (previousErrorMessage) {
      form.removeChild(previousErrorMessage);
    }

    const errorMessage = document.createElement('p');
    const formText = document.querySelector('#form textarea');
    errorMessage.textContent = 'Please enter your email in lower case!';
    errorMessage.classList.add('error-message');

    formText.insertAdjacentElement('afterend', errorMessage);
  }
});

// Store form data in localStorage
// Select the input elements
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#mail');
const messageInput = document.querySelector('#msg');

// Define the storeFormData function
function storeFormData() {
  // Get form input values
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // JavaScript object to hold the form data
  const formData = {
    name,
    email,
    message,
  };

  // Store the form data in localStorage
  localStorage.setItem('form1Data', JSON.stringify(formData));
}

// Retrieve form data from localStorage on page load
window.addEventListener('load', () => {
  const formData = JSON.parse(localStorage.getItem('form1Data'));
  if (formData) {
    nameInput.value = formData.name;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});

// Listen for changes in the input fields
nameInput.addEventListener('input', storeFormData);
emailInput.addEventListener('input', storeFormData);
messageInput.addEventListener('input', storeFormData);
