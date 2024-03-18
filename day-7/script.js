// console.log(window.document);
// console.log(document.body.innerHTML);
// document.body.innerHTML = '<h1>Hello world</h1>'
// let output = document.forms;

// output = document.forms;
// output = document.forms[0];
// output = document.forms[0].id;
// output = document.forms[0].method;
// output = document.forms[0].action;
// document.forms[0].id = 'new-id'

// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// output = document.images;
// output = document.images[0];
// output = document.images[0].src;

// const forms = Array.from(document.forms);
// forms.forEach((form) => console.log(form))

// console.log(output);


// Shopping list project example

// console.log(document.getElementById('app-title'));
// console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').className);
// console.log(document.getElementById('app-title').getAttribute('class'));

// set attributes
// document.getElementById('app-title').title = "Shopping List"
// document.getElementById('app-title').setAttribute('class','title')

// const title = document.getElementById('app-title')
// title.textContent = "Hello world"
// title.innerText ='hello again'
// title.innerHTML = "<strong>Shopping List</strong>"

// changing styles
// title.style.color = 'red'
// title.style.backgroundColor ='black'
// title.style.padding = '10px'
// title.style.borderRadius ='10px'
// console.log(title);

// query selector - for single elements
// console.log(document.querySelector('#app-title'));

// query selector - for multiple elements
// const listItems = document.querySelectorAll('.item')
// console.log(listItems);  //NodeList
// on NodeList we can apply higher order array methods 

// Traversing DOM

// Get child elements

// let output;
// const parent = document.querySelector('.parent')
// output = parent.children;
// output = parent.children[1].innerText;
// output = parent.children[1].className;
// output = parent.children[1].nodeName;

// Get parent elements from a child
// const child = document.querySelector('.child')
// output = child.parentElement;
// child.parentElement.style.border = '1px solid #ccc'

// Sibling elements
// const secondItem = document.querySelector('.child:nth-child(2)')
// output = secondItem;
// output = secondItem.nextElementSibling;
// secondItem.nextElementSibling.style.color = 'green';
// secondItem.previousElementSibling.style.color = 'orange';
// console.log(output);

// let output;
// const parent = document.querySelector('.parent')
// output = parent.childNodes;
// output = parent.childNodes[0].textContent;
// output = parent.childNodes[0].nodeName;
// output = parent.childNodes[3].textContent;
// output = parent.childNodes[3].outerHTML;
// parent.childNodes[1].textContent = 'Child ONE'
// const child = document.querySelector('.child')
// output = child.parentNode;
// output = child.parentElement;
// child.parentNode.style.backgroundColor = '#ccc'
// child.parentNode.style.padding = ' 10px'
// console.log(output);  // NodeList -- text is the white space

// Siblings
// const secondItem = document.querySelector('.child:nth-child(2)')
// output = secondItem.nextSibling;
// output = secondItem.previousSibling;

// const div = document.createElement('div')
// div.className ='my-element'
// div.id ='my-elem'
// div.setAttribute('title','shopping')
// // div.innerText = "Hello World"
// const text = document.createTextNode('Hello World')
// div.appendChild(text)

// document.querySelector('ul').appendChild(div)
// console.log(div);

// Quick & Dirty
// function createListItem(item){
//     const li = document.createElement('li')
//     li.innerHTML =`${item}<button class="remove-item btn-link text-red">
//     <i class="fa-solid fa-xmark"></i>
//   </button>`;
//   document.querySelector('.items').appendChild(li)
// }

// Clean & Performant

// function createNewItem(item){
//     const li = document.createElement('li')
//     li.appendChild(document.createTextNode(item))
//     const button = createButton('remove-item btn-link text-red')
//     li.appendChild(button)
//     document.querySelector('.items').appendChild(li)
// }

// function createButton(classes){
//     const button = document.createElement('button')
//     button.className = classes;
//     const icon = createIcon('fa-solid fa-xmark')
//     button.appendChild(icon);
//     return button;
// }

// function createIcon(classes){
//     const icon = document.createElement('i');
//     icon.className = classes;
//     return icon;
// }
// createNewItem('Eggs');
// createNewItem('Cheese');

// insertAdjacentElement Example
// function insertElement(){
//     const filter = document.querySelector('.filter');
//     const h1 = document.createElement('h1');
//     h1.textContent = 'insert Adjacent Element';
//     filter.insertAdjacentElement('beforebegin', h1);
// }

// // insertAdjacentText Example
// function insertHTML(){
//     const li = document.querySelector('li:nth-child(2)');
//     li.insertAdjacentHTML('afterend',',<h1>insert HTML</h1>')
// }

// // insertBefore Example // call on the parent
// function insertBeforeItem(){
//     const ul = document.querySelector('ul')
//     const li = document.createElement('li')
//     li.textContent = 'Insert Before'

//     const thirdItem = document.querySelector('li:nth-child(3)');
//     ul.insertBefore(li,thirdItem);
// }

// insertBeforeItem();
// insertElement();
// insertHTML();
// -------------------------------------------------------------------------------------
// Challenge
// function insertAfter(newEl, existingEl){
//     existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling)
// }
// const li = document.createElement('li');
// li.textContent = 'Insert me after';

// const firstItem = document.querySelector('li:first-child');
// insertAfter(li, firstItem)

// -------------------------------------------------------------------------------------
// Replace Elements
// function replaceFirstItem(){
//     const firstItem = document.querySelector('li:first-child')
//     const li = document.createElement('li');
//     li.textContent = "Replaced First";
//     firstItem.replaceWith(li)
// }

// function replaceSecondItem(){
//     const secondItem = document.querySelector('li:nth-child(2)')
//     secondItem.outerHTML = "<li>Replaced Second</li>";
// }

// replaceFirstItem();
// replaceSecondItem()

// function replaceAll(){
//     const lis = document.querySelectorAll('li')
    // lis.forEach((item, index) => {
    //     if(index === 1){
    //         item.innerHTML ="Second Item"
    //     }else{
    //         item.innerHTML ="item"
    //     }
    // })

//     lis.forEach((item, index) => item.innerHTML = index===1 ? "Replaced second" : "Old")

// }
// replaceAll()

// function replaceChildHeading(){
//     const header = document.querySelector('header')
//     const h1 = document.querySelector('h1')
//     const h2 = document.createElement('h2')
//     h2.textContent = "Shopping List"
//     header.replaceChild(h2,h1)

// }
// replaceChildHeading();

// function removeFirstItem(){
//     const ul = document.querySelector('ul')
//     const li = document.querySelector('li:first-child')
    
//     ul.removeChild(li)
// }
// removeFirstItem()

// function removeItem(itemNum){
//     const ul = document.querySelector('ul');
//     const li = document.querySelector(`li:nth-child(${itemNum})`)
//     ul.removeChild(li)
// }
// removeItem()

// const removeItem4 = (itemNum) => document.querySelectorAll('li')[itemNum -1].remove();
// removeItem4(2)


