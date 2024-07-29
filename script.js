document.getElementById('nameForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const responseMessage = document.getElementById('responseMessage');

    try {
        const response = await fetch('/greet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        });

        const data = await response.json();
        responseMessage.textContent = data.message;
    } catch (error) {
        responseMessage.textContent = 'There was an error. Please try again.';
    }
});
