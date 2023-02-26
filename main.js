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
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//  console.log(headerTitle);
//  headerTitle.textContent = 'Hello';
//  headerTitle.innerText = 'Goodbye';
//  console.log(headerTitle. innerText);
//  headerTitle.innerHTML = '<h3>Hello</h3>`;
header.style.borderBottom = 'solid 3px #000';

// var textTitle= document.getElementsByClassName('title');
// textTitle.style.fontWeight='bold';

var titles = document.querySelectorAll( '.title');
console.log(titles);
titles[0].textContent = 'Hello';
titles[0].style.fontWeight='bold';
titles[0].style.color='green';



