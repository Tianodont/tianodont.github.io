
fetch("/", {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    "massive": "1"
                })
            })
                .then(function (response) {
                    if (response.ok) {
                        //pass
                    }
                    else {
                        throw Error('Something went wrong');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
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
