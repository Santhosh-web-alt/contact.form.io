const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear-btn');
const errorMessage = document.getElementById('error-message');
const thankYouMessage = document.getElementById('thank-you-message');
const submittedName = document.getElementById('submitted-name');
const submittedEmail = document.getElementById('submitted-email');
const submittedMessage = document.getElementById('submitted-message');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        errorMessage.textContent = 'Please fill out all fields.';
        errorMessage.style.display = 'block';
        return;
    }

    // Process the form data ex;- send to server
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Displaying the thank you message
    thankYouMessage.style.display = 'block';
    submittedName.textContent = name;
    submittedEmail.textContent = email;
    submittedMessage.textContent = message;

    // Clear the form fields
    form.reset();
    errorMessage.style.display = 'none';
});

clearBtn.addEventListener('click', () => {
    form.reset();
    errorMessage.style.display = 'none';
    thankYouMessage.style.display = 'none';
});