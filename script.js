function ReceberChat(event) {
    event.preventDefault(); // Prevent form submission

    // Access form elements by their IDs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Do something with the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form
    event.target.reset();
}