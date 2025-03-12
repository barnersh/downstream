(async () => {
    const url = `https://api.telegram.org/bot6294043429:AAHfKoVxMeCEwrNvG9G2zHFhwhSqWmPU5Ys/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '6294043429',
            text: 'tg-deply-notify'
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
})