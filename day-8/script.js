// const clearBtn = document.querySelector('#clear');
//  Includes changes in HTML
// function onClear(){
//     const itemList = document.querySelector('ul');
//     const item = itemList.querySelectorAll('li');
//     while(itemList.firstChild){
//         itemList.removeChild(itemList.firstChild)
//     }
    // item.forEach((item)=>item.remove())
    // itemList.innerHTML = '';
// }

// JS event listener
// clearBtn.onclick = function (){
//     alert('Clear Items')
// }
// clearBtn.onclick = function (){
//     console.log('Clear Items');
// } // multiple functions on same event doesn't happen

// Modern way to addEventListener()
// Alert is synchronous and blocking 

// clearBtn.addEventListener('click',onClear)
// clearBtn.addEventListener('click',()=> console.log("clicked clear"))

// setTimeout(()=> clearBtn.removeEventListener('click',onClear),5000)

// logo.addEventListener('click',()=> console.log("Clicked"))
// logo.addEventListener('dblclick',()=>{
//     if(document.body.style.backgroundColor !== 'purple'){
//     document.body.style.backgroundColor = 'purple'
//     document.body.style.color = 'white'
//     }else{
        
//     document.body.style.backgroundColor = 'white'
//     document.body.style.color = 'black'
//     }
// })

// // Mouse Events
// logo.addEventListener('click',onClick)
// logo.addEventListener('dblclick',onDoubleClick)
// logo.addEventListener('contextmenu',onRightClick)
// logo.addEventListener('mousedown',onMouseDown)
// logo.addEventListener('mouseup',onMouseUp)
// logo.addEventListener('wheel',onMouseWheel)
// logo.addEventListener('mouseover',onMouseOver)
// logo.addEventListener('mouseout',onMouseOut)
// logo.addEventListener('dragstart',onDragStart)
// logo.addEventListener('drag',onDrag)
// logo.addEventListener('dragend',onDragEnd)

// const logo = document.querySelector('img')

// function onClick(e){
//     console.log(e.target);
// }

// logo.addEventListener('click',onClick)
// document.body.addEventListener('click',function (e){
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(e.type);
//     console.log(e.timeStamp);
//     console.log(e.clientX);
//     console.log(e.clientY);
//     console.log(e.offsetX);
//     console.log(e.offsetY);
//     console.log(e.pageX);
//     console.log(e.pageY);
//     console.log(e.screenX);
//     console.log(e.screenY);
// })

// function onDrag(e){
//     document.querySelector('h1').textContent =`X ${e.clientX} Y ${e.clientY}`
// }

// logo.addEventListener('drag',onDrag)

// const item = document.querySelector('#item-input')

// const onKeyPress = (e) =>{
//     console.log('keypress');
// }

// const onKeyUp = (e) =>{
//     console.log('keyUp');
// }

// const onKeyDown = (e) =>{
//     // key
//     // console.log(e.key);
//     // document.querySelector('h1').textContent = e.key
//     // if(e.key === 'Enter'){
//     //     alert('You pressed enter')
//     // }

//     // keyCode
//     if(e.keyCode === 13){
//         alert("You pressed enter")
//     }
//     // code
//     if(e.code === 'Digit1'){
//         console.log("You pressed 1");
//     }

//     if(e.repeat){
//         console.log("You are holding down"+ e.key);
//     }
//     console.log('Shift' + e.shiftKey);
//     console.log('Shift' + e.ctrlKey);
//     console.log('Shift' + e.altKey);

// }
// item.addEventListener('keypress',onKeyPress)
// item.addEventListener('keyup',onKeyUp)
// item.addEventListener('keydown',onKeyDown)

// --------------------------------------------------------------
// Input Events
// const itemInput = document.querySelector('#item-input');
// const priorityInput = document.querySelector('#priority-input');
// const checkbox = document.querySelector('#checkbox');
// const heading = document.querySelector('h1');

// function onInput(e){
//     heading.textContent = e.target.value;
// }

// function onChecked(e){
//     const isChecked = e.target.checked;
//     heading.textContent = isChecked ? 'Checked' : 'Not Checked';
// }

// itemInput.addEventListener('input', onInput)
// priorityInput.addEventListener('change',onInput)
// checkbox.addEventListener('input', onChecked);
// itemInput.addEventListener('focus', onFocus);
// itemInput.addEventListener('blur',onBlur);

// --------------------------------------------------------------------
// Form Submission & FormData Object
// const form = document.querySelector('#item-form');

// function onSubmit(e){
//     e.preventDefault();

//     const item = document.querySelector('#item-input').value;
//     const priority = document.querySelector('#priority-input');
//     console.log(item, priority.value);

//     if (item === '' || priority === '0'){
//         alert('Please fill all fields');
//         return;
//     }
//     console.log(item,priority);
// }

// form.addEventListener('submit', onSubmit);

// function onSubmit2(e){
//     e.preventDefault();

//     const formData = new FormData(form);

//     const item = formData.get('item');
//     const priority = formData.get('priority')

//     const entries = formData.entries();
//     for(let entry of entries){
//         console.log(entry[0]);
//     }
// }

// form.addEventListener('submit', onSubmit2)
// ------------------------------------
// Event Bubbling

// const button = document.querySelector('form button')
// const div = document.querySelector('form div:nth-child(2)')

// button.addEventListener('click', (e)=> {
//     alert('Button was clicked')
//     e.stopPropagation()
// })

// div.addEventListener('click',()=>{
//     alert('Div was clicked')
// })

// Event Delegation
// to handle patterns , for multiple events 

// const listItems = document.querySelectorAll('li');
// const list = document.querySelector('ul')

// list.addEventListener('click',(e)=>{
//     if(e.target.tagName === 'LI'){
//         e.target.remove()
//     }
// })

// Page loading & Window Events
// window.addEventListener('load', ()=> console.log('page loaded'))
// window.addEventListener('DOMContentLoaded', ()=>{
//     console.log('DOM loaded');
// })
// console.log("Run me");

// window.addEventListener('resize',()=>{
//     document.querySelector('h1').innerText = `Resized ${innerWidth} x ${innerHeight}`
// })

// window.addEventListener('scroll' , ()=>{
//     if(window.scrollY > 30){
//         document.body.style.backgroundColor = 'black'
//         document.body.style.color = 'white'
//     }else{
//         document.body.style.backgroundColor = 'white'
//         document.body.style.color = 'black'
//     }
// })



























