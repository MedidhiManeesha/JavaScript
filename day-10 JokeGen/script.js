const jokeEl = document.querySelector('#joke');
const jokeBtn = document.querySelector('#joke-btn')

const getJoke = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.chucknorris.io/jokes/random')
    
    xhr.onreadystatechange = function (){
    if(this.readyState === 4 ){
        if(this.status === 200){
            jokeEl.innerHTML = JSON.parse(this.responseText).value    
        }else{
            jokeEl.innerHTML ='Something went wrong'
        }
    }
};


xhr.send()
};
// getJoke()



jokeBtn.addEventListener('click',getJoke)
document.addEventListener('DOMContentLoaded', getJoke)