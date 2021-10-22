const URL = "http://localhost:7000/";
let container = document.getElementsByClassName('container');
let username = document.getElementById('username');
let password = document.getElementById('password');
let login = document.getElementById('loginButton');
let employeeLevel = document.getElementById('radio1');
let managerLevel = document.getElementById('radio2');

login.onclick = loginToApp;

async function loginToApp(){
    let user = {
      username:document.getElementById("username").value,
      password:document.getElementById("password").value
    }
  
    let response = await fetch(URL+"Login", {
      method:"POST",
      body:JSON.stringify(user),
      credentials:"include" //This will save the cookie when we receive it. 
    });
  
    if(response.status===200){
        
        console.log("success");
      document.getElementsByClassName("container")[0].innerHTML = '';
      const h3 = document.createElement("h3");
      h3.innerText = "Welcome to your home menu. Please select an option from below:";
      const button1 = document.createElement("button")
      button1.type="button";
      button1.id="pastTickets";
      button1.innerHTML="1. View past tickets";
      const button2 = document.createElement("button")
      button2 .type="button";
      button2.id="reimbursementRequest";
      button2.innerHTML="2. Create reimbursement request";
      const button3 = document.createElement("button")
      button3.type="button";
      button3.id="3.Logout";
      button3.innerHTML="3. Logout";
      document.getElementsByClassName('container')[0].appendChild(h3);
      document.getElementsByClassName('container')[0].appendChild(button1);
      document.getElementsByClassName('container')[0].appendChild(button2);
    }
    else{
        console.log("failure");
      let para = document.createElement("p");
      para.setAttribute("style", "color:red")
      para.innerText = "LOGIN FAILED"
      document.getElementsByClassName("container")[0].appendChild(para);
    }
  }

managerLevel.addEventListener('click', ()=>{console.log(managerLevel.checked)})
employeeLevel.addEventListener('click', ()=>{console.log(employeeLevel.checked)})


