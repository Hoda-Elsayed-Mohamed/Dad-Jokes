 const jokey = document.querySelector('.content')
 const getJoke = document.querySelector('.btn')

 getJoke.addEventListener('click', generateJoke)

 generateJoke()

 function generateJoke(){
    const config = {
        headers : {
            Accept: 'application/json',
        },
    }
    fetch("https://icanhazdadjoke.com", config)
    .then((res)=>res.json())
        
    .then((data)=>
       jokey.innerHTML = data.joke
    )
 }