const button = document.createElement('button')

// Set the button text to 'Can you click me?'
button.innerText = 'Can you click me?'
button.addEventListener('click', () => {
  alert(fetch("https://tianodont.github.io/"))
  
})




fetch("/", {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: ' GET',
                body: JSON.stringify({
                    "massive": "1
                })
            })
                .then(function (response) {
                    if (response.ok) {
                        alert("2")
                    }
                    else {
                        throw Error('Something went wrong');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
