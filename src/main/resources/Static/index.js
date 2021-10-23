const URL = "http://localhost:7000/";

//Login page elements
let container = document.getElementsByClassName('container');
let username = document.getElementById('username');
let password = document.getElementById('password');
let login = document.getElementById('loginButton');
let employeeLevel = document.getElementById('radio1');
let managerLevel = document.getElementById('radio2');

//Universal menu elements
let logout = document.createElement('button');
logout.innerText = "Logout";
let h3 = document.createElement('h3');
h3.innerText = 'Hello and welcome to your home menu. Please select an option from below';

//Manager elements
let viewRequests = document.createElement('button');
viewRequests.innerHTML = 'View all past reimbursement requests'
let filterBy = document.createElement('h4');
sortBy.innerText = 'Filter your requests by:';
let filterByPending = document.createElement('button');
filterByPending.innerText = 'Pending requests';
let filterByResolved = document.createElement('button');
FilterByResolved.innerHTML = 'Resolved requests';
let selectReimbursement = document.createElement('input');
SelectReimbursement.innerText = 'Enter the id of the request you would like to edit';

//Login page functions
logout.onclick = logout.onclick = function () {
  location.reload();
  return false;
}
login.onclick = loginToApp;

async function loginToApp() {
  if (managerLevel.checked) {
    var user = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      level: "MANAGER"
    }
  }
  else if (employeeLevel.checked) {
    var user = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      level: "EMPLOYEE"
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
    credentials: "include"  
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
      document.getElementsByClassName('container')[0].appendChild(h3);
      document.getElementsByClassName('container')[0].appendChild(viewRequests);
      document.getElementsByClassName('container')[0].appendChild(logout);

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

//Universal menu functions
function logoutOfProgram() {
  document.getElementsByClassName("container")[0].innerHTML = '';
  location.reload;
  return false;
}

//Manager menu functions
viewRequests.onclick = async function() {
  let response = await fetch(URL + "ErsReim", {
    method: "GET",
    credentials: "include" 
  });
  if(response.status==200) {
    console.log("success");
  }
  else{
    
  }
}



