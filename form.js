// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const pNumInput = document.querySelector('#pNum');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);


//     // localStorage.setItem('name',nameInput.value);
//     // localStorage.setItem('email',emailInput.value);


function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '' || pNumInput.value==='') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');
    const Deletebutton = document.createElement('input');
    Deletebutton.type='button'
    Deletebutton.value='Delete'
    
    Deletebutton.onclick=()=>{
       localStorage.removeItem('email')
       localStorage.removeItem('name')
       localStorage.removeItem('pNumInput')
       userList.removeChild(li);

    }
    // btn.setAttribute('class','btn');
    // console.log(btn);

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value} : ${pNumInput.value} `));
    li.appendChild(Deletebutton);
    localStorage.setItem('name',nameInput.value);
    localStorage.setItem('email',emailInput.value);
    localStorage.setItem('pNumInput',pNumInput.value);

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    pNumInput.value ='';
  }
}