function saveToLocalStorage(event)
        {
            event.preventDefault();
            const name = event.target.username.value;
            const email = event.target.userEmail.value;

            const obj = {
              name,
              email
            }
            axios.post("https://crudcrud.com/api/0ca3962512464c7fb7adfa8f849d9dd3/appointeddata",obj)
            .then((response)=>{
              console.log(response);
            })
            .catch((err)=>{
              console.log(err);
            })

            axios.get("https://crudcrud.com/api/0ca3962512464c7fb7adfa8f849d9dd3/appointeddata",obj)
            .then((response)=>{
           
              console.log(response);

             li.appendChild(document.createTextNode(`${obj.name} : ${obj.email}`))
            li.appendChild(editBtn)
            li.appendChild(delBtn)
            userList.appendChild(li);
            })
            .catch((err)=>{
              console.log(err);
            })



            
            //localStorage.setItem(obj.email, JSON.stringify(obj))

            const userList= document.querySelector('#users');

            const li = document.createElement('Li');
            const delBtn = document.createElement('input');
            const editBtn = document.createElement('input');
            editBtn.type = 'button';
            editBtn.value = 'EDIT'
            delBtn.type = 'button'
            delBtn.value = 'DELETE'
            // li.appendChild(document.createTextNode(`${obj.name} : ${obj.email}`))
            // li.appendChild(editBtn)
            // li.appendChild(delBtn)
            // userList.appendChild(li);

            delBtn.onclick = () => {
            localStorage.removeItem(obj.email)
            userList.removeChild(li)
          }
            editBtn.onclick = () => {
            
           // deserialized = JSON.parse(localStorage.getItem(obj.email))
            localStorage.removeItem(obj.email)
            userList.removeChild(li)
            document.getElementById("name").value = obj.name
            document.getElementById("email").value = obj.email
            
            
          }
          name.value="";
          email.value='';
        }