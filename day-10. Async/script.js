// setTimeout(function (){
//     console.log('Hello from callback');
//     // Callback is a function which is to be executed after another function has finished execution
//     // Function passed as an argument to another function
// },0)
// console.log("Hello from global scope");
// Callbacks gets put onto the task queue and waits for the callstack to clear before it's run
// function changeText(){
//     document.querySelector('#heading').textContent = 'Hello from Callback'
// }
// const timerId = setTimeout(changeText, 2000)

// document.querySelector('#cancel').addEventListener('click',()=>{
//     clearTimeout(timerId)
//     console.log("Timer Cancelled");
// })

//  setInterval & clearInterval
//  setInterval - repeatedly call a function or execute a code snippet, a fixed time delay between each call
// const intervalId = setInterval(myCallBack, 1000, 'Hello')
// function myCallBack(a){
//     console.log(a, Date.now());
// }

let intervalId;
function startChange(){
if (!intervalId){
    intervalId = setInterval(changeRandomColor, 1000)
    
}
// function changeColor(){
//     if(document.body.style.backgroundColor !== 'black'){
//         document.body.style.backgroundColor = 'black'
//         document.body.style.color = 'white'
//     }else{
//         document.body.style.backgroundColor = 'white'
//         document.body.style.color = 'black'
//     }
// }

function changeRandomColor(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    document.body.style.backgroundColor = `#${randomColor}`
}
}

function stopChange(){
    clearInterval(intervalId)
}

document.querySelector('#stop').addEventListener('click',stopChange)
document.querySelector('#start').addEventListener('click', startChange)
