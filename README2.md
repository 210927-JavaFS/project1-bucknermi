# Expense Reimbursement System

## Project Description

The Expense Reimbursement System will manage the process of reimbursing employees for expenses incurred while on company time. All employees in the company can login and submit requests for reimbursement and view their past tickets and pending requests. Finance managers can log in and view all reimbursement requests and history for all employees in the company. Finance managers are authorized to approve and deny requests for expense reimbursement.

## Technologies Used

* Java
* SQL
* CSS
* HTML
* JavaScript
* JUnit
* Hibernate
* AWS RDS
* AWS EC2
* Log4J
* Javalin

## Features

* Login to system as either employee or manager 
   * Employee:
      * Create and submit new reimbursement requests
      * View past user reimbursement request submissions
   * Manager
      * View all past reimbursement requests by all employees
      * Filter past reimbursement requests by status
      * Approve/deny any pending reimbursement requests


To-do list:
* Static hosting of webpage through AWS S3 bucket
* Allow users to submit image of receipts for their reimbursement requests using BLOB

## Getting Started
   

> Clone project onto local machine using git clone https://github.com/210927-JavaFS/project1-bucknermi.git 
> Open project in IDE (Spring Tool Suite, Eclipse, VSCode etc.)
> Navigate to src/main/resources/hibernate.cfg.xml
> Configure endpoints (i.e. hibernate.connection.url) to match your RDS database so that hibernate can create a database when the application is run
> Run the Driver class as Java application
> Navigate to the url: http:localhost:7000.index.html


## Usage
> Create users and employees to use in your RDS
> Login at http:localhost:7000.index.html to access employee and manager features
> Use application to create/review reimbursement requests


## Contributors



## License


