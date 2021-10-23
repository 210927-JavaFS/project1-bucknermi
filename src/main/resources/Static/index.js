const URL = "http://localhost:7000/";
let container = document.getElementsByClassName('container');
let username = document.getElementById('username');
let password = document.getElementById('password');
let login = document.getElementById('loginButton');
let employeeLevel = document.getElementById('radio1');
let managerLevel = document.getElementById('radio2');

login.onclick = loginToApp;
pastTickets.onclick = viewPastTickets;
logout.onclick = logoutOfProgram;

async function loginToApp() {
  if (managerLevel.checked)
    let user = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      UserRole: "MANAGER"
    }
  else if (employeeLevel.checked) {
    let user = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      UserRole: "EMPLOYEE"
    }
  }
  else {
    console.log("failure");
    let para = document.createElement("p");
    para.setAttribute("style", "color:red");
    para.innerText = "Please select a login level";
    document.getElementsByClassName("container")[0].appendChild(para);
  }


  let response = await fetch(URL + "Login", {
    method: "POST",
    body: JSON.stringify(user),
    credentials: "include" //This will save the cookie when we receive it. 
  });

  if (response.status === 200) {

    console.log("success");
    if (employeeLevel.checked) {
      document.getElementsByClassName("container")[0].innerHTML = '';
      const h3 = document.createElement("h3");
      h3.innerText = "Welcome to your home menu. Please select an option from below:";
      const button1 = document.createElement("button")
      button1.type = "button";
      button1.id = "pastTickets";
      button1.innerHTML = "1. View past tickets";
      const button2 = document.createElement("button")
      button2.type = "button";
      button2.id = "reimbursementRequest";
      button2.innerHTML = "2. Create reimbursement request";
      const button3 = document.createElement("button")
      button3.type = "button";
      button3.id = "logout";
      button3.innerHTML = "3. Logout";
      document.getElementsByClassName('container')[0].appendChild(h3);
      document.getElementsByClassName('container')[1].appendChild(button1);
      document.getElementsByClassName('container')[2].appendChild(button2);
      document.getElementsByClassName('container')[3].appendChild(button3);
    }
    if (managerLevel.checked) {
      document.getElementsByClassName("container")[0].innerHTML = '';
      const h3 = document.createElement("h3");
      h3.innerText = "Welcome to your home menu. Please select an option from below:";
      const button4 = document.createElement("button")
      button4.type = "button";
      button4.id = "allRequests";
      button4.innerHTML = "1. View all reimbursement requests from employees";
      const button5 = document.createElement("button")
      button5.type = "button";
      button5.id = "logout";
      button5.innerHTML = "2. Logout";
      document.getElementsByClassName('container')[0].appendChild(h3);
      document.getElementsByClassName('container')[1].appendChild(button4);
      document.getElementsByClassName('container')[2].appendChild(button5);
    }
  }

    else {
  console.log("failure");
  let para = document.createElement("p");
  para.setAttribute("style", "color:red")
  para.innerText = "LOGIN FAILED"
  document.getElementsByClassName("container")[0].appendChild(para);
}
  }

  function logoutOfProgram {
    
  }




