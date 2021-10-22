let username = document.getElementById('username');
let password = document.getElementById('password');
let login = document.getElementById('loginButton');
let employeeLevel = document.getElementById('radio1');
let managerLevel = document.getElementById('radio2');

managerLevel.addEventListener('click', ()=>{console.log(managerLevel.checked)})
employeeLevel.addEventListener('click', ()=>{console.log(employeeLevel.checked)})
login.addEventListener('click', ()=>{if(employeeLevel.checked)
    {document.location.href = "EmployeeMenu.html"}
else if(managerLevel.checked)
 {document.location.href="ManagerViewReimbursements.html"}
 else  
     alert("Please select a level");
 
});

