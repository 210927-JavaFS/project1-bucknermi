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
let reimsTable = document.createElement('table');
var reimsTableHeaderArr = ['Reimbursement Id', 'Author Id', 'Resolver Id', 'Type', 'Amount', 'Description', 'Resolved', 'Accepted'];
var reimsTableHeder = document.createElement('thead');
for (let i = 0; i < reimsTableHeaderArr.length; i++) {
  let th = document.createElement('th');
  th.innerText = reimsTableHeaderArr[i];
  reimsTable.appendChild(th);
}
var reimsTableBody = document.createElement('tbody');

//Manager main menu elements
let viewRequests = document.createElement('button');
viewRequests.innerHTML = 'View all past reimbursement requests'
let filterBy = document.createElement('h4');
filterBy.innerText = 'Filter your requests by:';
let filterByPending = document.createElement('button');
filterByPending.innerText = 'Pending requests';
let filterByResolved = document.createElement('button');
filterByResolved.innerHTML = 'Resolved requests';
let selectReimbursement = document.createElement('input');
let reimbursementId = document.getElementById('selectReimbursementId');
let selectReimburesementText = document.createElement('h4');
selectReimburesementText.innerText = 'Enter the Id of the reimbursement you would like to view/edit';
let selectButton = document.createElement('button');
selectButton.innerText = 'Select reimbursement'

//Manager reimbursements menu elements


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

function failure() {
  console.log("failure");
    let para = document.createElement("p");
    para.setAttribute("style", "color:red")
    para.innerText = "Attempt failed"
    document.getElementsByClassName("container")[0].appendChild(para);

}

//Manager menu functions
function managerReimMenu(data) {
  document.getElementsByClassName("container")[0].innerHTML = '';
  document.getElementsByClassName("container")[0].appendChild(reimsTable);
    populateAllReimsTable(data);
    document.getElementsByClassName('container')[0].appendChild(filterBy);
    document.getElementsByClassName('container')[0].appendChild(filterByPending);
    document.getElementsByClassName('container')[0].appendChild(filterByResolved);
    document.getElementsByClassName('container')[0].appendChild(selectReimburesementText);
    document.getElementsByClassName('container')[0].appendChild(selectReimbursement);
    document.getElementsByClassName('container')[0].appendChild(selectButton);
    document.getElementsByClassName('container')[0].appendChild(logout);
}
viewRequests.onclick = async function () {
  let response = await fetch(URL + "ErsReim", {
    method: "GET",
    credentials: "include"
  });
  if (response.status == 200) {
    let data = await response.json();
    managerReimMenu(data);
  }
  else {
   failure();

  }
}

function populateAllReimsTable(data) {
  reimsTableBody.innerHTML = '';
  for (let ErsReim of data) {
    
    let row = document.createElement('tr');

    for (let cell in ErsReim) {
      let td = document.createElement('td');
      if(cell!='author' && cell!= 'resolver'){
      td.innerText = ErsReim[cell];
      }
      else if (ErsReim[cell]){
        td.innerText = ErsReim[cell].user_id;
      }
      row.appendChild(td);
    }
    reimsTableBody.appendChild(row);
  }
  reimsTable.appendChild(reimsTableBody);

}

filterByPending.onclick = async function()
{
  let response = await fetch(URL + "ErsReim/False", {
    method: "GET",
    credentials: "include"
  });
  if (response.status == 200) {
    let data = await response.json();
    managerReimMenu(data);
  }
  else {
    failure();
  }
}

filterByResolved.onclick = async function()
{
  let response = await fetch(URL + "ErsReim/True", {
    method: "GET",
    credentials: "include"
  });
  if (response.status == 200) {
    let data = await response.json();
    managerReimMenu(data);
  }
  else {
    failure();
  }
  
}

selectButton.onclick = async function getReimbursement(reimbursementId)
{
  let response = await fetch(URL + "ErsReim/" +reimbursementId, {
    method: "GET",
    credentials: "include"
  });
  if (response.status == 200) {
    let data = await response.json();
    managerReimMenu(data);
  }
  else {
    failure();
  }

}





