# app
Application for Connection with allegro and ebay, research on market, filtering, management

https://app.origini.pl

https://github.com/origini/app

git clone https://github.com/origini/app.git

cd F:\xampp73\htdocs\origini-app\
docker-compose up -d



## environment
bash scripts
https://github.com/npocmaka/batch.scripts

docker
python
express framework 
migration




### Install the dependencies

    npm install

### Run the dev server with reload at localhost:8080

    npm run dev

### Build the app for production

    npm run build
    
    
## Start
    node app.js
    
## TODO


## ApiUnit

## Environment/Tier 

### Local                
  	Developer's 
  	desktop/workstation
  	
### Development/Trunk   
    Development server acting as a sandbox where unit testing may be performed by the developer
  
### Integration 
	CI build target, or for developer testing of side effects
	
### Testing/Test/QC/Internal Acceptance
	The environment where interface testing is performed. A quality control team ensures that the new code will not have any impact on the existing functionality and tests major functionalities of the system after deploying the new code in the test environment.

The purpose of the test environment is to allow human testers to exercise new and changed code via either automated checks or non-automated techniques. After the developer accepts the new code and configurations through unit testing in the development environment, the items are moved to one or more test environments.[3] Upon test failure, the test environment can remove the faulty code from the test platforms, contact the responsible developer, and provide detailed test and result logs. If all tests pass, the test environment or a continuous integration framework controlling the tests can automatically promote the code to the next deployment environment. 
 
### Staging/Stage/Model/Pre-production/External-Client Acceptance/Demo 
	Mirror of production environment

A stage or staging environment is an environment for testing that exactly resembles a production environment.[7] It seeks to mirror an actual production environment as closely as possible and may connect to other production services and data, such as databases. For example, servers will be run on remote machines, rather than locally (as on a developer's workstation during dev, or on a single test machine during test), which tests the effects of networking on the system
	
### Production/Live       
 	Serves end-users/clients 


## podział na moduły:

PROJECT-CREATE
category
product-name

PROJECT-QUEUE
STATUS active/done
CRUD

PROJECT-QUEUE-CRONJOB
how often

COMPARASION
product

MARKET:
allegro
ebay

uruchamianie kolejki
zapisywanie danych 

ALLEGRO
+ get file from allegro
+ get sdk from swagger
+ connection with 
+ searching


EBAY
+ get file from ebay
+ get sdk from swagger
+ connection with 
+ searching


SEARCHING
text
price
  min
  max
delivery
  country
  city
 

COMPARASION

price
platform
title
imgs
content
created
updated
deleted


Aplikacja pracująca w tle nazywa się Routing,
służy do monitorowania co dzieje się w każdej warstwie

Aplikacja Visitor służy niezalogowanym użytkownikom
Każda aplikacja ma swój widok, logikę i bazę danych do której może mieć dostęp inna aplikacja
Np Visitor ma dostęp do listy aktywnych produktów do pokazania we ofercie, pobierane od Markietera
Każda aplikacja ma różne warstwy dostępu, wedle aplikacji, dla każdej ma inne API
np:

  Marketer  
  Auth
    Admin
    User
    App::Router
      User jest zalogowany?
      
  Public             
    + frontend
      Tool:LogIn
        logowanie do Marketingu
      
    + obecnie aktywne oferty z kampanii
      Router::UserRole = Visitor
    + informacje o koncie
      Router::UserRole =  Admin
    + lista aktywnych przypisanych do mnie ofert promocyjnych
        Router::UserRole = Customer




Router - sprawdza ruch i uprawnienia, dostep
  Matrix for access: App / UserRole
  Matrix for access: Tool / UserRole
  
  UserRole
    Visitor
    Marketer
    Accountant
    Admin   
    
  App  
    Visitor
    Marketer
    Accountant
    Admin    
    
  App
    Tool
      Session
      Tracker
      
      
  

Visitor
  + LogIn
    + login
    + Dont Have Account ? SignUp
  + SignUp
    + form create
    + Have Account ? LogIn
  + Newsletter
    + form create
  + Offer
    + Order
    
VisitorOrder
CustomerOrder
AdminForUserOrder

Customer
  + LogOut
  + Account
  + Data
  + Newsletter
    + Create  
    + delete
  + Logs
  
Marketer
    
  + product
    + specification
    + price    
    + create
    + delete
    
  + offer
    + template
    + product
    + create
    + delete
    
    
  + channel    
    + social/VisitorPage
    + newsletter
      + customer Account
      + Visitor


  + campaign
    + channel
    + offer
    + time_in
    + time_out
    + user filter
    + create
    + stop
    + start
    + delete
  
  + Tracking
    + campaing
    + users
    
  + Report
    + how often
    + filter
    + email
  
Accounting
  + Report
  + Order
    + Marketer::Product
    + Customer
      + Contact
  

 
Admin
  + users
    + roles    
  + logs
  


Tools - uzywane przez APP, zawiera API + SDK
  
  settings
  access
    role
    action


  Account
    Data
    
  Log
    API
    View
    Action
      Login
      Logout
  
  Sign
    SignUp
    SingOff
  
  
  Queue 
    jobs    
      type
    plan      
      status
    
    
  Messages
    add
    list
  
  Account
    Log
    Tracker
  
  
  
