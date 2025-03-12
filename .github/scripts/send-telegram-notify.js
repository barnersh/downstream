(async () => {
    const url = `https://api.telegram.org/bot6294043429:AAHfKoVxMeCEwrNvG9G2zHFhwhSqWmPU5Ys/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '-1001804960926',
            text: `
                🔔 *新的 Pull Request*
                📌 #${prData.number}: ${prData.title}
                👤 作者: ${prData.author}
                🔀 分支: ${prData.branch} → ${prData.base}
                📁 倉庫: ${prData.repo}
                🔗 [查看 PR](${prData.url})
            `,
            parse_mode: 'Markdown'
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
})();