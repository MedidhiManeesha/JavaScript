// function toggle(e){
//     e.target.classList.toggle('danger')
// }
// document.querySelector('button').addEventListener('click',toggle);

// const posts = [
//     {title:'one',body:'this is post one'},
//     {title:'two',body:'this is post two'}
// ]

// function createPost(post, cb){
//     setTimeout(()=>{
//         posts.push(post)
//         cb()
//     },2000)

// }

// function getPosts(){
//     setTimeout(()=>{
//         posts.forEach((post)=>{
//         const div = document.createElement('div')
//         div.innerHTML = `<strong>${post.title}</strong> = ${post.body}`
//         document.querySelector('#posts').appendChild(div)
//     })
// },1000)
    
// }

// createPost({title:'three',body:'post three'}, getPosts)

// -------------------------------------------------------------------

// Http request
// XMLHttp request allows us to make HTTP requests
//Dynamic pages - we can make requests to servers without refreshing page

const xhr = new XMLHttpRequest();
// xhr.open(type of request,url of API or file)
// xhr.open('GET','./movies.json')
xhr.open('GET','https://api.github.com/users/medidhimaneesha/repos')

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready

xhr.onreadystatechange = function (){
    // console.log(this.readyState);
    if(this.readyState === 4 && this.status === 200){
        // console.log(JSON. parse(this.responseText));
        const data = JSON.parse(this.responseText)
        data.forEach(repo =>{
            const li = document.createElement('li')
            li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`
            document.querySelector('#results').appendChild(li)
        })
    }
}
xhr.send()













