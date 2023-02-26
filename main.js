// console.log("project added");
// console.log("hello");


// console.dir(document);
// console.log(document. domain);
// console.log(document. URL);
// console.log(document. title);
//  //document.title = 123;
// console.log(document. doctype);
// console.log(document. head);
// console.log(document. body);
// console.log(document. all);
// console.log (document. all[10]);
//  // document. all[10] textContent = 'Hello';
// console. log(document. forms [0]);
// console. log(document. links);
// console. log(document. images);
// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));


 //console. log(document. getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
//  console.log(headerTitle);
//  headerTitle.textContent = 'Hello';
//  headerTitle.innerText = 'Goodbye';
//  console.log(headerTitle. innerText);
//  headerTitle.innerHTML = '<h3>Hello</h3>`;
// header.style.borderBottom = 'solid 3px #000';

// var textTitle= document.getElementsByClassName('title');
// textTitle.style.fontWeight='bold';

// var titles = document.querySelectorAll( '.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
// titles[0].style.fontWeight='bold';
// titles[0].style.color='green';

// GETELEMENTSBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent= 'Hello 2';
// items[0].style.fontWeight = 'bold';
// items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';

// items[2].style.backgroundColor= 'green';

// Gives error
//items.style.backgroundColor = *#f4f4f4';
// for(var i = 0; i < items.length; i++){
//  items[i].style.backgroundColor= '#f4f4f4';
// }

// var li=document.getElementsByTagName('li');
// console.log('li');
// li[4].textContent='Hello';
// li[4].style.fontWeight = 'bold';

// li[4].style.backgroundColor= 'green'

// var item= document.querySelector('.list-group-item:nth-child(2)');
// //item.style.backgroundColor='green';
// var item= document.querySelector('.list-group-item:nth-child(3)');
// item.style.color='coral';

// var items = document.querySelectorAll('li');
// items[1].style.color='green';
 
// var odd= document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.background='green';
// }


var itemList= document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
 
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);

console.log(itemList.lastChild);
console.log(itemList.lastElementChild);

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

var newDiv =document.createElement('div');
newDiv.setAttribute('title','Hello');
var newDivText = document.createTextNode('Hello world');
newDiv.appendChild(newDivText);
console.log(newDiv);

var addText= document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.fontSize= '30px';
addText.insertBefore(newDiv, h1);

var newDiv =document.createElement('li');
var newDivText = document.createTextNode('Hello world');
newDiv.appendChild(newDivText);
console.log(newDiv);

 var parentNode= document.getElementById('items');
 parentNode.prepend(newDiv);
console.log(parentNode);





