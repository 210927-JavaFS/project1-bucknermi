const URL = 'http://18.223.29.20/:7000/';

//PAGE ELEMENTS SECTION
//******************************************************************** */
//******************************************************************** */
//******************************************************************** */

//Login page elements
//******************************************************************** */
//******************************************************************** */
let username = document.getElementById('username');
let password = document.getElementById('password');
let login = document.getElementById('loginButton');
let employeeLevel = document.getElementById('radio1');
let managerLevel = document.getElementById('radio2');

//Universal menu elements
//******************************************************************** */
//******************************************************************** */
let containerIndex = document.getElementsByClassName('container')[0];
let storedInfo = document.getElementsByClassName('storedInfo')[0];
let navbar = document.getElementsByClassName('navbar')[0];
let br = document.createElement('br');
br.innerText = ' \n ';
let logout = document.createElement('button');
logout.innerText = 'Logout';
logout.className = 'button';
let h3 = document.createElement('h3');
h3.innerText = 'Hello and welcome to your home menu. Please select an option from below: ';
let reimsTable = document.createElement('table');
var reimsTableHeaderArr = ['Id', 'Author Id', 'Resolver Id', 'Type', 'Amount', 'Description',
'Submit Time', 'Resolve Time',  'Resolved', 'Accepted'];
var reimsTableHeder = document.createElement('thead');
for (let i = 0; i < reimsTableHeaderArr.length; i++) {
  let th = document.createElement('th');
  th.innerText = reimsTableHeaderArr[i];
  reimsTable.appendChild(th);
}
var reimsTableBody = document.createElement('tbody');

//Manager menu elements
//******************************************************************** */
//******************************************************************** */
let managerHomeButton = document.createElement('button');
managerHomeButton.innerText = 'Home';
managerHomeButton.className = 'button';
let viewRequests = document.createElement('button');
viewRequests.className = 'button';
viewRequests.innerHTML = 'View all reimbursement requests'
let filterBy = document.createElement('h4');
filterBy.innerText = 'Filter your requests by:';
let filterByPending = document.createElement('button');
filterByPending.className = 'button';
filterByPending.innerText = 'Pending requests';
let filterByResolved = document.createElement('button');
filterByResolved.className = 'button';
filterByResolved.innerHTML = 'Resolved requests';
let selectReimbursement = document.createElement('input');
selectReimbursement.id = 'reimbursementId';
let selectReimburesementText = document.createElement('h4');
selectReimburesementText.innerText = 'Enter the Id of the reimbursement you would like to view/approve/deny: ';
let selectButton = document.createElement('button');
selectButton.className = 'button';
selectButton.innerText = 'Select reimbursement';
let reimDetailMenu = document.createElement('h3');
reimDetailMenu.innerText = 'Details for this reimbursement are: ';
let reimDetails = document.createElement('div');
let reimApproval = document.createElement('button');
reimApproval.className = 'button';
reimApproval.id = 'reimApproval';
reimApproval.innerText = 'Approve this reimbursement request';
let reimDenial = document.createElement('button');
reimDenial.className = 'button';
reimDenial.innerText = 'Deny this reimbursement request';
let hiddenReimNum = document.createElement('hiddenReimNum');
hiddenReimNum.hidden = true;
hiddenReimNum.id = 'hiddenReimNum';
hiddenReimNum.innerText = '2';


//Employee menu elements
//******************************************************************** */
//******************************************************************** */
let employeeHomeButton = document.createElement('button');
employeeHomeButton.className = 'button';
employeeHomeButton.innerText = 'Home';
let pastTicketsButton = document.createElement('button');
pastTicketsButton.className = 'button';
pastTicketsButton.innerText = 'View past tickets';
let addReimRequestButton = document.createElement('button');
addReimRequestButton.className = 'button';
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
let amountInput = document.createElement('textarea');
amountInput.id = 'amountInput';
amountInput.rows = 1;
amountInput.cols = 8;
let amountInputLabel = document.createElement('label');
amountInputLabel.htmlFor = 'amountInput';
amountInputLabel.innerText = '\n \n Amount: \n';
let descriptionInput = document.createElement('textarea');
descriptionInput.id = 'descriptionInput';
descriptionInput.rows = 8;
descriptionInput.cols = 50;
let descriptionInputLabel = document.createElement('label');
descriptionInputLabel.htmlFor = 'descriptionInput';
descriptionInputLabel.innerText = '\n \n Description: \n';
let welcomeRequest = document.createElement('h4');
welcomeRequest.innerText = 'Enter the details of your request below';
let requestSubmit = document.createElement('button');
requestSubmit.className = 'button';
requestSubmit.innerText = 'Submit request'
let hiddenUserId = document.createElement('hiddenUserId');
hiddenUserId.hidden = true;
hiddenUserId.id = 'hiddenUserId';
hiddenUserId.innerText = '2';
let reimbursementRadioTye = document.createElement('words');
reimbursementRadioTye.innerText = 'Type: \n';
let selectReimburesementTextEmployee = document.createElement('h4');
selectReimburesementTextEmployee.innerText = 'Enter the Id of the reimbursement you would like to view closer: ';
let selectButtonEmployee = document.createElement('button');
selectButtonEmployee.className = 'button';
selectButtonEmployee.innerText = 'Select reimbursement';
let selectReimbursementEmployee = document.createElement('input');
selectReimbursementEmployee.id = 'reimbursementId';

//FUNCTIONS SECTION
//******************************************************************** */
//******************************************************************** */
//******************************************************************** */

//Universal menu functions
//******************************************************************** */
//******************************************************************** */

function loadLoginMenu(){
  if (employeeLevel.checked) {
  employeeMainMenu();
  navbar.appendChild(logout);
  navbar.appendChild(employeeHomeButton);
    
  }
  if (managerLevel.checked) {
  managerMainMenu();
  navbar.appendChild(logout);
  navbar.appendChild(managerHomeButton);
  }
}

function failure() {
alert('Attempt failed')
}

function success() {
  alert('Attempt successful, redirecting...')
}

function requestFailure() {
  alert('This request has already been closed')
}

function populateAllReimsTable(data) {
  reimsTableBody.innerHTML = '';
  for (let ErsReim of data) {
    let row = document.createElement('tr');
    let values = Object.values(ErsReim);

    if (values[2] == null) {
      values[2] = [];
    }
    if (values[1] == null) {
      values[1] == [];
    }

    if (values[8] == false) {
      values[8] = 'no';
      values[9] = '--';
    }
    else {
      values[8] = 'yes';
    if (values[9] == false) {
      values[9] = 'no'
    }
    else {
      values[9] = 'yes';
    } }

    if(values[7] == null) {
      values[7] = '--';
    }

    if(values[6] == null){
      values[6]= '--';
    }

    if(values[5] == null) {
      values[5]= '--';
    }

    let shortDesc = values[5].substring(0,7)
    if(values[5].length > 7) {
    values[5] = (shortDesc + '...'); }

    let shortDesc1 = values[6].substring(0,8)
    if(values[6].length > 8) {
    values[6] = (shortDesc1 + '...'); }

    let shortDesc2 = values[7].substring(0,8)
    if(values[7].length > 8) {
    values[7] = (shortDesc2 + '...'); }

    values [4] = (values[4] + '$')
    
    let author = Object.values(values[1]);
    let resolver = Object.values(values[2]);
  
    for (let i = 0; i < values.length; i++) {
      let td = document.createElement('td');
      td.id = reimsTableHeaderArr[i]
      if (i == 1) {
        td.innerText = author[0];
      }
      else if (i == 2) {
        if (resolver[0] == undefined) {
        td.innerText = '--';}
        else {
        td.innerText = resolver[0];
      }
      }
      else {
        td.innerText = values[i];
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
  
  let values = Object.values(data);

  if (values[2] == null) {
    values[2] = [];
  }
  if (values[1] == null) {
    values[1] == [];
  }

  if (values[8] == false) {
    values[8] = 'no';
    values[9] = ' ';
  }
  else {
    values[8] = 'yes';
  if (values[9] == false) {
    values[9] = 'no'
  }
  else {
    values[9] = 'yes';
  } }

  if(values[7] == null) {
    values[7] = '--';
  }

  if(values[6] == null){
    values[6]== '--';
  }

  let desc = values[5];
  if (desc.length > 50) {
    desc = desc.substring(0,50) + ' \n ' + desc.substring(50,desc.length);
    if(desc.length>100) {
      desc = desc.substring(0,100) + ' \n ' + desc.substring(100,desc.length);
        if(desc.length>150) {
      desc = desc.substring(0,150) + ' \n ' + desc.substring(150,desc.length);
      if(desc.length>200) {
        desc = desc.substring(0,200) + ' \n ' + desc.substring(200,desc.length);}
    }
    values[5] = desc;
    }
    
  }

  let author = Object.values(values[1]);
  let resolver = Object.values(values[2]);

  for (let i = 0; i < values.length; i++) {
    let td = document.createElement('td');
    td.id = reimsTableHeaderArr[i]+'single'
    if (i == 1) {
      td.innerText = author[0];
    }
    else if (i == 2) {
      if (resolver[0] == undefined) {
      td.innerText = '--';}
      else {
      td.innerText = resolver[0];
    }
    }
    else {
      td.innerText = values[i];
    }
    row.appendChild(td);
  }
  reimsTableBody.appendChild(row);
  reimsTable.appendChild(reimsTableBody);
}

//Login page functions
//******************************************************************** */
//******************************************************************** */

logout.onclick = function () {
  location.reload();
  return false;
}


login.onclick = async function loginToApp() {
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
    var user = {
      
    }
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
   failure();
  }
}


//Manager menu functions
//******************************************************************** */
//******************************************************************** */
function managerMainMenu() {
  hiddenUsername.innerText = document.getElementById('username').value;
  hiddenPassword.innerText = document.getElementById('password').value
  storedInfo.appendChild(hiddenUsername);
  storedInfo.appendChild(hiddenPassword);
  getManagerId();
  containerIndex.innerHTML = '';  
  containerIndex.appendChild(h3);
  containerIndex.appendChild(viewRequests);  
}


function managerMainMenuNav() {
  containerIndex.innerHTML = '';  
  containerIndex.appendChild(h3);
  containerIndex.appendChild(viewRequests);
}


managerHomeButton.onclick = function () {
  containerIndex.innerHTML = '';  
  containerIndex.appendChild(h3);
  containerIndex.appendChild(viewRequests);
}


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
//******************************************************************** */
//******************************************************************** */

async function getManagerId() {
  var user = {
    username: document.getElementById('hiddenUsername').innerText,
    password: document.getElementById('hiddenPassword').innerText,
    level: 'MANAGER'
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


viewRequests.onclick = async function viewRequests() {
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


selectButton.onclick = async function () {
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


reimApproval.onclick = async function () {
  let response = await fetch(URL + 'ErsReim/Reim/' + document.getElementById('hiddenReimNum').innerText, {
    method: 'GET',
    credentials: 'include'
  })
  if (response.status == 200) {
    let data = await response.json();

    let values = Object.values(data);
    let author = Object.values(values[1]);
    if(values[8]==true){
      requestFailure();
    }
    else{
    let x = author[0];
    let y = document.getElementById('hiddenUserId').innerText;
    let accReim = {
      reimbursementId: values[0],
      author: { user_id: x } ,
      resolver: {user_id: y },
      reimbursementType: values[3],
      amount: values[4],
      description: values[5],
      submitTime: values[6],
      resolved: true,
      accepted: true
    }
    let response1 = await fetch(URL + 'ErsReim', {
      method: 'PUT',
      body: JSON.stringify(accReim),
      credentials: 'include'
    }); if (response1.status == 201) {
      success(); 
      managerMainMenuNav(); 
    }
  else {
    failure();
    
  }}
}
  else {
  failure();
}
}


reimDenial.onclick = async function () {
  let response = await fetch(URL + 'ErsReim/Reim/' + document.getElementById('hiddenReimNum').innerText, {
    method: 'GET',
    credentials: 'include'
  })
  if (response.status == 200) {
    let data = await response.json();

    let values = Object.values(data);
    let author = Object.values(values[1]);
    if(values[8]==true){
      requestFailure();}
      else {
    let x = author[0];
    let y = document.getElementById('hiddenUserId').innerText;
    let accReim = {
      reimbursementId: values[0],
      author: { user_id: x } ,
      resolver: {user_id: y },
      reimbursementType: values[3],
      amount: values[4],
      description: values[5],
      resolved: true,
      accepted: false
    };
    let response1 = await fetch(URL + 'ErsReim', {
      method: 'PUT',
      body: JSON.stringify(accReim),
      credentials: 'include'
    }); if (response1.status == 201) {
      success();
      managerMainMenuNav();
    }
  else {
    failure();
  }}
}
  else {
  failure();
}
}


//Employee Menu Functions
//******************************************************************** */
//******************************************************************** */

function employeeMainMenu(){
  hiddenUsername.innerText = document.getElementById('username').value;
  hiddenPassword.innerText = document.getElementById('password').value
  storedInfo.appendChild(hiddenUsername);
  storedInfo.appendChild(hiddenPassword);
  getUserId();
  containerIndex.innerHTML = '';
  containerIndex.appendChild(h3);
  containerIndex.appendChild(pastTicketsButton);
  containerIndex.appendChild(addReimRequestButton);
}


function employeePastRequestsMenu(data) {
  containerIndex.innerHTML = '';
  containerIndex.appendChild(reimsTable);
  populateAllReimsTable(data);
  containerIndex.appendChild(selectReimburesementTextEmployee)
  containerIndex.appendChild(selectButtonEmployee);
  containerIndex.appendChild(selectReimbursementEmployee);
}


function employeeMainMenuNav(){
  containerIndex.innerHTML = '';
  containerIndex.appendChild(h3);
  containerIndex.appendChild(pastTicketsButton);
  containerIndex.appendChild(addReimRequestButton);
}


employeeHomeButton.onclick = function(){
  containerIndex.innerHTML = '';
  containerIndex.appendChild(h3);
  containerIndex.appendChild(pastTicketsButton);
  containerIndex.appendChild(addReimRequestButton);
}


addReimRequestButton.onclick = function createReimRequest(){
  containerIndex.innerHTML = '';
  containerIndex.appendChild(welcomeRequest);
  containerIndex.appendChild(reimbursementRadioTye);
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


function employeeResolveMenu(data) {
  containerIndex.innerHTML = '';
  containerIndex.appendChild(reimDetailMenu);
  containerIndex.appendChild(reimsTable);
  populateSingleReimTable(data);
}

//Employee onclick functions
//******************************************************************** */
//******************************************************************** */

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


selectButtonEmployee.onclick = async function () {
  let response = await fetch(URL + 'ErsReim/Reim/' + document.getElementById('reimbursementId').value, {
    method: 'GET',
    credentials: 'include'
  })
  if (response.status == 200) {
    let proxy = await response.json();
    let values = Object.values(proxy);
    let id = values[1].user_id;
    console.log(id);
    console.log(values);
    console.log(document.getElementById('hiddenUserId').innerText);
  

    if(id == document.getElementById('hiddenUserId').innerText) {
    employeeResolveMenu(proxy);}
    else{
      failure();
    }
  }
  else {
    failure();
  }
}


pastTicketsButton.onclick = async function(){
  let userId = document.getElementById('hiddenUserId').innerText;
  let response1 = await fetch(URL + 'ErsReim/User/' +userId, {
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
  let x = "OTHER";
  if (travelRadio.checked) {
    x = "TRAVEL";
  }
  else if (foodRadio.checked) {
    x = "FOOD";
  }
  else if (lodgingRadio.checked) {
    x = "LODGING";
  }
  else {}
  let y =  document.getElementById('amountInput').value;
  y = Number(y).toFixed(2);
  z = Number(y);

  let request = {
    author: {
      user_id: document.getElementById('hiddenUserId').innerText
  },
  resolver: null,
  reimbursementType: x,
  amount: z,
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
    success();
    employeeMainMenuNav();
  }
  else {
    failure();
  }
}






