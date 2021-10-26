const URL = 'http://localhost:7000/';

//Login page elements
let username = document.getElementById('username');
let password = document.getElementById('password');
let login = document.getElementById('loginButton');
let employeeLevel = document.getElementById('radio1');
let managerLevel = document.getElementById('radio2');

//Universal menu elements
let containerIndex = document.getElementsByClassName('container')[0];
let storedInfo = document.getElementsByClassName('storedInfo')[0];
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
hiddenUsername.id = 'hiddenUsername';
let hiddenPassword = document.createElement('hiddenPassword');
hiddenPassword.hidden = true;
hiddenPassword.innerText = '2';
hiddenPassword.id = 'hiddenPassword';
let foodLabel = document.createElement('label');
let foodRadio = document.createElement('input');
foodRadio.type= 'radio';
foodRadio.name= 'typeRadio';
foodRadio.id= 'foodRadio';
foodLabel.htmlFor = 'foodRadio';
foodLabel.innerText = 'Food'
let lodgingLabel = document.createElement('label');
let lodgingRadio = document.createElement('input');
lodgingRadio.type= 'radio';
lodgingRadio.name= 'typeRadio';
lodgingRadio.id = 'lodgingRadio';
lodgingLabel.htmlFor = 'lodgingRadio';
lodgingLabel.innerText = 'Lodging'
let travelLabel = document.createElement('label');
let travelRadio = document.createElement('input');
travelRadio.type= 'radio';
travelRadio.name= 'typeRadio';
travelRadio.id = 'travelRadio';
travelLabel.htmlFor = 'travelRadio';
travelLabel.innerText = 'Travel';
let otherLabel = document.createElement('label');
let otherRadio = document.createElement('input');
otherRadio.type= 'radio';
otherRadio.name= 'typeRadio';
otherRadio.id = 'otherRadio';
otherLabel.htmlFor = 'otherRadio';
otherLabel.innerText = 'Other'
let amountInput = document.createElement('input');
amountInput.id = 'amountInput';
let amountInputLabel = document.createElement('label');
amountInputLabel.htmlFor = 'amountInput';
amountInputLabel.innerText = 'Amount';
let descriptionInput = document.createElement('input');
descriptionInput.id = 'descriptionInput';
let descriptionInputLabel = document.createElement('label');
descriptionInputLabel.htmlFor = 'descriptionInput';
descriptionInputLabel.innerText = 'Description';
let welcomeRequest = document.createElement('h4');
welcomeRequest.innerText = 'Enter the details of your request below';
let requestSubmit = document.createElement('button');
requestSubmit.innerText = 'Submit request'
let hiddenUserId = document.createElement('hiddenUserId');
hiddenUserId.hidden = true;
hiddenUserId.id = 'hiddenUserId';
hiddenUserId.innerText = '2';


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
    containerIndex.appendChild(para);
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
    containerIndex.appendChild(para);
  }
}

//Universal menu functions

function loadLoginMenu(){
  if (employeeLevel.checked) {
    hiddenUsername.innerText = document.getElementById('username').value;
    hiddenPassword.innerText = document.getElementById('password').value
    containerIndex.innerHTML = '';
    storedInfo.appendChild(hiddenUsername);
    storedInfo.appendChild(hiddenPassword);
    getUserId();
    containerIndex.appendChild(h3);
    containerIndex.appendChild(pastTicketsButton);
    containerIndex.appendChild(addReimRequestButton);
    containerIndex.appendChild(logout);

  }
  if (managerLevel.checked) {
    containerIndex.innerHTML = '';
    containerIndex.appendChild(h3);
    containerIndex.appendChild(viewRequests);
    containerIndex.appendChild(logout);

  }
}
function logoutOfProgram() {
  containerIndex.innerHTML = '';
  location.reload;
  return false;
}

function failure() {
  console.log('failure');
  let para = document.createElement('p');
  para.setAttribute('style', 'color:red')
  para.innerText = 'Attempt failed'
  containerIndex.appendChild(para);

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
  containerIndex.appendChild(hiddenAuthor);
  containerIndex.appendChild(hiddenResolver);


}

//Manager menu functions
function managerReimMenu(data) {
  containerIndex.innerHTML = '';
  containerIndex.appendChild(reimsTable);
  populateAllReimsTable(data);
  containerIndex.appendChild(filterBy);
  containerIndex.appendChild(filterByPending);
  containerIndex.appendChild(filterByResolved);
  containerIndex.appendChild(selectReimburesementText);
  containerIndex.appendChild(selectReimbursement);
  containerIndex.appendChild(selectButton);
  containerIndex.appendChild(logout);
}

function managerResolveMenu(data, id) {
  containerIndex.innerHTML = '';
  containerIndex.appendChild(reimDetailMenu);
  containerIndex.appendChild(reimsTable);
  populateSingleReimTable(data);
  containerIndex.appendChild(reimDetails);
  containerIndex.appendChild(reimApproval);
  containerIndex.appendChild(reimDenial);
  containerIndex.appendChild(hiddenReimNum);
  hiddenReimNum.innerText = id;
}

//Manager onclick functions
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
function employeePastRequestsMenu(data) {
  containerIndex.innerHTML = '';
  containerIndex.appendChild(reimsTable);
  populateAllReimsTable(data);

}

addReimRequestButton.onclick = function createReimRequest(){
  containerIndex.innerHTML = '';
  containerIndex.appendChild(welcomeRequest);
  containerIndex.appendChild(foodLabel);
  containerIndex.appendChild(foodRadio);
  containerIndex.appendChild(travelLabel);
  containerIndex.appendChild(travelRadio);
  containerIndex.appendChild(lodgingLabel)
  containerIndex.appendChild(lodgingRadio);
  containerIndex.appendChild(otherLabel);
  containerIndex.appendChild(otherRadio);
  containerIndex.appendChild(amountInputLabel);
  containerIndex.appendChild(amountInput);
  containerIndex.appendChild(descriptionInputLabel);
  containerIndex.appendChild(descriptionInput);
  containerIndex.appendChild(requestSubmit);
}

async function getUserId() {
  var user = {
    username: document.getElementById('hiddenUsername').innerText,
    password: document.getElementById('hiddenPassword').innerText,
    level: 'EMPLOYEE'

}
let response = await fetch(URL + 'ErsUser/Proxy', {
  method: 'POST',
  body: JSON.stringify(user),
  credentials: 'include'
});
if (response.status === 200) {
  let proxy = await response.json();
  let values = Object.values(proxy);
  let userId = values[0];
  hiddenUserId.innerText = userId;
  storedInfo.appendChild(hiddenUserId);
  }

else {
  failure();
}
}

pastTicketsButton.onclick = async function(){
  let userId = document.getElementById('hiddenUserId').innerText;
  let response1 = await fetch(URL + "ErsReim/User/" +userId, {
    method: 'GET',
    credentials: 'include'
  });
  if (response1.status === 200) {
    let data = await response1.json();
    employeePastRequestsMenu(data);
  }

else {
  failure();
}
}

requestSubmit.onclick = async function() {
  let request = {
    author: {
      user_id: document.getElementById('hiddenUserId').innerText
  },
  resolver: null,
  reimbursementType: null,
  amount: document.getElementById('amountInput').value,
  description: document.getElementById('descriptionInput').value,
  resolved: false,
  accepted: false
  }
  let response = await fetch(URL + 'ErsReim', {
    method: 'POST',
    body: JSON.stringify(request),
    credentials: 'include'
  });
  if(response.status === 201) {
    console.log('success');
  }
  else {
    console.log('failure');
  }

}






