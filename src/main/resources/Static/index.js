const URL = 'http://localhost:7000/';

//Login page elements
let container = document.getElementsByClassName('container');
let username = document.getElementById('username');
let password = document.getElementById('password');
let login = document.getElementById('loginButton');
let employeeLevel = document.getElementById('radio1');
let managerLevel = document.getElementById('radio2');

//Universal menu elements
let logout = document.createElement('button');
logout.innerText = 'Logout';
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
selectReimbursement.id = 'reimbursementId';
let selectReimburesementText = document.createElement('h4');
selectReimburesementText.innerText = 'Enter the Id of the reimbursement you would like to view/edit';
let selectButton = document.createElement('button');
selectButton.innerText = 'Select reimbursement';
let reimDetailMenu = document.createElement('h3');
reimDetailMenu.innerText = 'Details for this reimbursement are: ';
let reimDetails = document.createElement('div');
let reimApproval = document.createElement('button');
reimApproval.id = 'reimApproval';
reimApproval.innerText = 'Approve this reimbursement request';
let reimDenial = document.createElement('button');
reimDenial.innerText = 'Deny this reimbursement request';
let hiddenReimNum = document.createElement('hiddenReimNum');
hiddenReimNum.hidden = true;
hiddenReimNum.id = 'hiddenReimNum';
hiddenReimNum.innerText = '2';


//Employee main menu elements
let pastTicketsButton = document.createElement('button');
pastTicketsButton.innerText = 'View past tickets';
let addReimRequestButton = document.createElement('button');
addReimRequestButton.innerText = 'Add a new reimbursement';
let hiddenUsername = document.createElement('hiddenUsername');
hiddenUsername.hidden = true;
hiddenUsername.innerText = '2';
let hiddenPassword = document.createElement('hiddenPassword');
hiddenPassword.hidden = true;
hiddenPassword.innerText = '2';

//Login page functions
logout.onclick = function () {
  location.reload();
  return false;
}
login.onclick = loginToApp;

async function loginToApp() {
  if (managerLevel.checked) {
    var user = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
      level: 'MANAGER'
    }
  }
  else if (employeeLevel.checked) {
    var user = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
      level: 'EMPLOYEE'
    }
  }
  else {
    console.log('failure');
    let para = document.createElement('p');
    para.setAttribute('style', 'color:red');
    para.innerText = 'Please select a login level';
    document.getElementsByClassName('container')[0].appendChild(para);
  }


  let response = await fetch(URL + 'Login', {
    method: 'POST',
    body: JSON.stringify(user),
    credentials: 'include'
  });

  if (response.status === 200) {

      loadLoginMenu();
    }

  else {
    console.log('failure');
    let para = document.createElement('p');
    para.setAttribute('style', 'color:red')
    para.innerText = 'LOGIN FAILED'
    document.getElementsByClassName('container')[0].appendChild(para);
  }
}

//Universal menu functions

function loadLoginMenu(){
  if (employeeLevel.checked) {
    hiddenUsername.innerText = document.getElementById('username').value;
    hiddenPassword.innerText = document.getElementById('password').value
    document.getElementsByClassName('container')[0].innerHTML = '';
    document.getElementsByClassName('storedInfo')[0].appendChild(hiddenUsername);
    document.getElementsByClassName('storedInfo')[0].appendChild(hiddenPassword);
    document.getElementsByClassName('container')[0].appendChild(h3);
    document.getElementsByClassName('container')[0].appendChild(pastTicketsButton);
    document.getElementsByClassName('container')[0].appendChild(addReimRequestButton);
    document.getElementsByClassName('container')[0].appendChild(logout);

  }
  if (managerLevel.checked) {
    document.getElementsByClassName('container')[0].innerHTML = '';
    document.getElementsByClassName('container')[0].appendChild(h3);
    document.getElementsByClassName('container')[0].appendChild(viewRequests);
    document.getElementsByClassName('container')[0].appendChild(logout);

  }
}
function logoutOfProgram() {
  document.getElementsByClassName('container')[0].innerHTML = '';
  location.reload;
  return false;
}

function failure() {
  console.log('failure');
  let para = document.createElement('p');
  para.setAttribute('style', 'color:red')
  para.innerText = 'Attempt failed'
  document.getElementsByClassName('container')[0].appendChild(para);

}

function populateAllReimsTable(data) {
  reimsTableBody.innerHTML = '';
  for (let ErsReim of data) {

    let row = document.createElement('tr');

    for (let cell in ErsReim) {
      let td = document.createElement('td');
      if (cell != 'author' && cell != 'resolver') {
        td.innerText = ErsReim[cell];
      }
      else if (ErsReim[cell]) {
        td.innerText = ErsReim[cell].user_id;
      }
      row.appendChild(td);
    }
    reimsTableBody.appendChild(row);
  }
  reimsTable.appendChild(reimsTableBody);
}




function populateSingleReimTable(data) {
  reimsTableBody.innerHTML = '';

  let row = document.createElement('tr');
  let hiddenAuthor = document.createElement('p');
  let hiddenResolver = document.createElement('p');
  let values = Object.values(data);
  hiddenAuthor.innerText = JSON.stringify(values[1]);
  hiddenResolver.innerText = JSON.stringify(values[2]);

  hiddenAuthor.hidden = true;

  hiddenResolver.hidden = true;

  if (values[2] == null) {
    values[2] = [];
  }

  let author = Object.values(values[1]);
  let resolver = Object.values(values[2]);

  for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
    let td = document.createElement('td');
    td.id = reimsTableHeaderArr[i]
    if (i == 1) {
      let x = author[0];
      td.innerText = x.toString();

    }
    else if (i == 2) {
      td.innerText = resolver[0];
    }

    else {
      td.innerText = values[i];
    }
    row.appendChild(td);
  }
  reimsTableBody.appendChild(row);
  reimsTable.appendChild(reimsTableBody);
  document.getElementsByClassName('container')[0].appendChild(hiddenAuthor);
  document.getElementsByClassName('container')[0].appendChild(hiddenResolver);


}

//Manager menu functions
function managerReimMenu(data) {
  document.getElementsByClassName('container')[0].innerHTML = '';
  document.getElementsByClassName('container')[0].appendChild(reimsTable);
  populateAllReimsTable(data);
  document.getElementsByClassName('container')[0].appendChild(filterBy);
  document.getElementsByClassName('container')[0].appendChild(filterByPending);
  document.getElementsByClassName('container')[0].appendChild(filterByResolved);
  document.getElementsByClassName('container')[0].appendChild(selectReimburesementText);
  document.getElementsByClassName('container')[0].appendChild(selectReimbursement);
  document.getElementsByClassName('container')[0].appendChild(selectButton);
  document.getElementsByClassName('container')[0].appendChild(logout);
}

function managerResolveMenu(data, id) {
  document.getElementsByClassName('container')[0].innerHTML = '';
  document.getElementsByClassName('container')[0].appendChild(reimDetailMenu);
  document.getElementsByClassName('container')[0].appendChild(reimsTable);
  populateSingleReimTable(data);
  document.getElementsByClassName('container')[0].appendChild(reimDetails);
  document.getElementsByClassName('container')[0].appendChild(reimApproval);
  document.getElementsByClassName('container')[0].appendChild(reimDenial);
  document.getElementsByClassName('container')[0].appendChild(hiddenReimNum);
  hiddenReimNum.innerText = id;
}

viewRequests.onclick = async function () {
  let response = await fetch(URL + 'ErsReim', {
    method: 'GET',
    credentials: 'include'
  });
  if (response.status == 200) {
    let data = await response.json();
    managerReimMenu(data);
  }
  else {
    failure();

  }
}

filterByPending.onclick = async function () {
  let response = await fetch(URL + 'ErsReim/False', {
    method: 'GET',
    credentials: 'include'
  });
  if (response.status == 200) {
    let data = await response.json();
    managerReimMenu(data);
  }
  else {
    failure();
  }
}

filterByResolved.onclick = async function () {
  let response = await fetch(URL + 'ErsReim/True', {
    method: 'GET',
    credentials: 'include'
  });
  if (response.status == 200) {
    let data = await response.json();
    managerReimMenu(data);
  }
  else {
    failure();
  }

}

selectButton.onclick = async function getReimbursement() {
  let id = document.getElementById('reimbursementId').value;
  let response = await fetch(URL + 'ErsReim/Reim/' + document.getElementById('reimbursementId').value, {
    method: 'GET',
    credentials: 'include'
  })
  if (response.status == 200) {
    let data = await response.json();
    managerResolveMenu(data, id);


  }
  else {
    failure();
  }

}





reimApproval.onclick = async function approveReim() {
  let response = await fetch(URL + 'ErsReim/Reim/' + document.getElementById('hiddenReimNum').innerText, {
    method: 'GET',
    credentials: 'include'
  })
  console.log(document.getElementById('hiddenReimNum').innerText);
  if (response.status == 200) {
    let data = await response.json();

    let values = Object.values(data);
    let author = Object.values(values[1]);
    let x = author[0];
     
     

    console.log(x);
    console.log(values);
    let accReim = {
      reimbursementId: values[0],
      author: { user_id: 2 } ,
      resolver: {user_id: 2 },
      reimbursementType: values[3],
      amount: values[4],
      description: values[5],
      resolved: true,
      accepted: true
    }
    console.log(JSON.stringify(data.author));
    let response1 = await fetch(URL + 'ErsReim', {
      method: 'PUT',
      body: JSON.stringify(accReim),
      credentials: 'include'
    }); if (response1.status == 201) {
      console.log('success')
    }
  else {
    console.log('failure');
  }


}
  else {
  failure();
}

}

reimDenial.onclick = async function denyReim() {
  let response = await fetch(URL + 'ErsReim/Reim/' + document.getElementById('hiddenReimNum').innerText, {
    method: 'GET',
    credentials: 'include'
  })
  console.log(document.getElementById('hiddenReimNum').innerText);
  if (response.status == 200) {
    let data = await response.json();

    let values = Object.values(data);
    let author = Object.values(values[1]);
    let x = author[0];
      console.log(x);
     

    console.log(x);
    console.log(values);
    let accReim = {
      reimbursementId: values[0],
      author: { user_id: 2 } ,
      resolver: {user_id: 2 },
      reimbursementType: values[3],
      amount: values[4],
      description: values[5],
      resolved: true,
      accepted: false
    }
    console.log(JSON.stringify(data.author));
    let response1 = await fetch(URL + 'ErsReim', {
      method: 'PUT',
      body: JSON.stringify(accReim),
      credentials: 'include'
    }); if (response1.status == 201) {
      console.log('success')
    }
  else {
    console.log('failure');
  }


}
  else {
  failure();
}

}


//Employee Menu Functions
function employeePastRequestsMen(data) {
  document.getElementsByClassName('container')[0].innerHTML = '';
  document.getElementsByClassName('container')[0].appendChild(reimsTable);
  populateAllReimsTable(data);
  
}

pastTicketsButton.onclick = async function(){
  var user = {
    username: document.getElementById('hiddenUsername').value,
    password: document.getElementById('hiddenPassword').value,
    level: 'EMPLOYEE'

}
let response = await fetch(URL + 'Login', {
  method: 'POST',
  body: JSON.stringify(user),
  credentials: 'include'
});

if (response.status === 200) {
  let proxy = await response.json();
  let values = Object.values(proxy);
  let userId = data[0];

  let response1 = await fetch(URL + "User/" +userId, {
    method: 'GET',
    credentials: 'include'
  });
  if (response1.status === 200) {
    let data = await response1.json();
    employeePastRequestsMen(data);
  }

  
  }

else {
  failure();
}
}








