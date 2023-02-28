const button = document.createElement('button')

// Set the button text to 'Can you click me?'
button.innerText = 'Can you click me?'
button.addEventListener('click', () => {
  alert(fetch("https://tianodont.github.io/",  {               
        headers: {
                    'Content-Type': 'application/json'
                },
        method: ' GET',
        body: {"1" : "2"}
                }
       )
  
})



let t = await fetch("https://tianodont.github.io/").json()

alert(t)
