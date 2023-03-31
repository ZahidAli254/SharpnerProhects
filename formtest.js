function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    
    const obj = {
        name,
        email
    }
    axios.post("https://crudcrud.com/api/5afcdfbc59304927b2991e5d1664b4f4/todo",obj)
    .then((response)=>{
        showNewUserOnScreen(response.data)
        console.log(response)
    })
    .catch((err)=>{
        document.body.innerHTML=document.body.innerHTML+"<h4> something went wrong </h4>"
        console.log(err)
    })
    //localStorage.setItem(obj.email, JSON.stringify(obj))
    //showNewUserOnScreen(obj)
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/5afcdfbc59304927b2991e5d1664b4f4/todo")
    .then((response)=>{
        //console.log(response)
        for(var i=0;i<response.data.length;i++){
            showNewUserOnScreen(response.data[i])
        }
    })
    .catch((error)=>{
        console.log(error)
    })
    // const localStorageObj = localStorage;
    // const localstoragekeys  = Object.keys(localStorageObj)

    // for(var i =0; i< localstoragekeys.length; i++){
    //     const key = localstoragekeys[i]
    //     const userDetailsString = localStorageObj[key];
    //     const userDetailsObj = JSON.parse(userDetailsString);
    //     showNewUserOnScreen(userDetailsObj)
    // }
})

function showNewUserOnScreen(user){
    // user={
    //     _id:'',
    //     name:'',
    //     email:''
    // }
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    
    // console.log(localStorage.getItem(user.emailId))
    if(localStorage.getItem(user.email) !== null){
        removeUserFromScreen(user.email)
    }

    const parentNode = document.getElementById('listOfUsers1');
    const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}
                            <button onclick=editUserDetails('${user.email}','${user.name}','${user._id}')>✓</button>
                            <button onclick=deleteUser('${user._id}')> ✖</button>
                            </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

// //Edit User

function editUserDetails(user,userId){

    document.getElementById('email').value = "";
    document.getElementById('name').value = "";

    if(localStorage.getItem(user.email) !== null){
        removeUserFromScreen(user.email)
    }
    const parentNode = document.getElementById('listOfUsers2');
    const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}
    </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
    deleteUser(userId)
 }

// // deleteUser('abc@gmail.com')

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/5afcdfbc59304927b2991e5d1664b4f4/todo/${userId}`)
    .then((response)=>{
        removeUserFromScreen(userId);
    })
    .catch((err)=>{
        console.log(err);
    })
    // console.log(emailId)
    // localStorage.removeItem(emailId);
    // removeUserFromScreen(emailId);

}

function removeUserFromScreen(userId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(userId);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}