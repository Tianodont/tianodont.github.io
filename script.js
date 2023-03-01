const button = document.createElement('button')

// Set the button text to 'Can you click me?'
button.innerText = 'Can you click me?'
button.addEventListener('click', () => {
        fetch("https://tianodont.github.io/", {
                method: "post",
                headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        "1": "2",
                        "2": "3"
                })
        })
                .then((response) => {
                        //do something awesome that makes the world a better place
                });

})


try {
        const response = await fetch('https://tianodont.github.io/', {
        method: 'POST',
        body: formData
        });
        const result = await response.json();
        console.log('Успех:', JSON.stringify(result));
        } catch (error) {
        console.error('Ошибка:', error);
        }
