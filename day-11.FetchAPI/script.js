// Fetch API
// Fetching a JSON file
// fetch('./movies.json')
// .then((response)=> response.json())
// .then((data)=>console.log(data))

// Fetching a text file
// fetch('./test.txt')
//     .then((response)=> response.text())
//     .then((data)=>console.log(data))

// Fetching from an API
// fetch('https://api.github.com/users/medidhimaneesha')
// .then((response)=> response.json())
// .then((data)=>console.log(data))

// Fetch - options

// function createPost({ title, body}){
//     fetch('https://jsonplaceholder.typicode.com/posts',{
//         method: 'POST',
//         body: JSON.stringify({
//             title,
//             body
//         }),
//         headers: {
//             'Content-Type':'application/json',
//             token: 'abc123'
//         }
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// createPost({title: 'hello', body:'this is body'})

// Error Handling

// Test with response.ok
// fetch('http://httpstat.us/404')
// .then((response)=>{
//     if(!response.ok){
//         throw new Error('Request Failed')
//     }
//     return response
// })
// .then(()=>{
//     console.log('success');
// })
// .catch((error)=>{
//     console.log(error);
// })


// fetch('http://httpstat.us/500')
// .then((response)=>{
//     if(response.status === 404){
//         throw new Error('Not Found')
//     }else if(response.status === 500){
//         throw new Error('Server Error')
//     }else if(response.status !== 200){
//         throw new Error('Request Failed')
//     }
//     return response
// })
// .then(()=>{
//     console.log('success');
// })
// .catch((error)=>{
//     console.log(error);
// })


// Catch does not run on 404 error
// Catch runs on a network error
// fetch('http://hello123.net')
// .then((response)=> {
//     return response
// })
// .then(()=>{
//     console.log('success');
// })
// .catch((error)=>{
//     console.log(error);
// })

// ---------------------------------------------------------------------
// Async & Await

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:'John', age: 20})
//     },1000)
// })

// async function getPromise(){
//     const response = await promise;
//     console.log(response);
// }

// getPromise();

// function getUsers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res)=> res.json())
//     .then((data)=> console.log(data))
// }

// async function getUsers(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()
//     console.log(data);
// }

// const getPosts = async () =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json()
//     console.log(data);
// }

// getPosts();

// -------------------------------------------------------------------
// Try & Catch statements

// function double(number){
//     if(isNaN(number)){
//         throw new Error(number + 'is not a number')
//     }
//     return number * 2
// }

// try{
//     const y = double(7)
//     console.log(y);
// }catch(error){
//     console.log(error);
// }

// function getData(endpoint){
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET',endpoint)

//         xhr.onreadystatechange = function (){
//             if(this.readyState ===4){
//                 if(this.status === 200){
//                     resolve(JSON.parse(this.responseText))
//                 }else{
//                     reject('Error: Something went wrong')
//                 }
//             }
//         }

//         setTimeout(()=> {
//             xhr.send();

//         }, Math.floor(Math.random()* 3000)+ 1000)
//     })
// }



// async function getAllData(){
//     const movies = await getData('./movies.json')
//     const actors = await getData('./movies.json')
//     const directors = await getData('./movies.json')
//     console.log(movies, actors, directors);
// }

// async function getAllDataWithFetch(){
//     const moviesRes = await fetch('./movies.json')
//     const movies = await moviesRes.json()

    // const actorsRes = await fetch('./actors.json')
    // const actors = await actorsRes.json()

    // const directorRes = await fetch('./directors.json')
    // const directors = await directorRes.json()

//     console.log(movies);
// }

// getAllDataWithFetch()

// async function getAllDataPromiseAll(){
//     const [ moviesRes, actorsRes, directorRes] = await Promise.all([
//         fetch('./movies.json'),
//         fetch('./actors.json'),
//         fetch('./directors.json')
//     ])

//     const movies = await moviesRes.json()
//     const actors = await actorsRes.json()
//     const directors = await directorRes.json()

//     console.log(movies, actors, directors);
// }

// getAllDataPromiseAll()















