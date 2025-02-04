//your code here
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        // Example form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!name || !email || !password) {
            alert('Please fill in all the required fields.');
            event.preventDefault(); // Prevent form submission
        } else {
            alert('Form submitted successfully!');
        }
    });
});

