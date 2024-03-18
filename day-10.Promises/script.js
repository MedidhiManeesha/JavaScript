// // Create promise
// const promise = new Promise((resolve,reject) =>{
//     // Do async task
//     setTimeout(()=>{
//         console.log('Async task completed');
//         resolve();
//     },1000)
// })

// promise.then(()=>{
//     // we get here what we passed into resolve
//     console.log("Promise consumed");
// })

// console.log("Global scope");

// new Promise((resolve,reject) =>{
//     // Do async task
//     setTimeout(()=>{
//         resolve({name: 'John', age: 15});
//     },1000)
// }).then((user)=> console.log(user))

// const getUser = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({name:'John',age: 15})
//         }else{
//             reject("Something wrong")
//         }
//     },1000)
// })

// getUser
// .then((user)=>{
//     console.log(user)
//     return user.name}
//     )
// .then((name)=>{
//     console.log(name);
//     return name.length;
// })
// .then((nameLen)=>{
//     console.log(nameLen);
// })
// .catch((error)=>console.log(error))

// promise.all()
// const firstPromise = getUser('./movies.json')
// const secondPromise = getUser('./actors.json')
// const thirdPromise = getUser('./directors.json')

// const dummyPromise = new Promise((resolve,reject)=>{
//     resolve('Hello world')
// })

// promise.finally([firstPromise,secondPromise,thirdPromise,dummyPromise])
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=> console.log(error))

const promise1 = new Promise(callback);
promise1
    .then(()=>{console.log("Resolved promise")})
    .catch(()=>{console.log("Rejected promise")})

function callback(resolve, reject){
    setTimeout(()=>resolve(),2000)
}














