document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        // Clear previous error messages
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('messageError').textContent = '';

        // Validate name
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required.';
            isValid = false;
        }

        // Validate email
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Invalid email address.';
            isValid = false;
        }

        // Validate message
        const message = document.getElementById('message').value.trim();
        if (message === '') {
            document.getElementById('messageError').textContent = 'Message is required.';
            isValid = false;
        }

        // If form is invalid, prevent form submission
        if (!isValid) {
            event.preventDefault();
        }
    });
});
