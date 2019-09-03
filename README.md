# app
Application for Connection with allegro and ebay, research on market, filtering, management

https://app.origini.pl

https://github.com/origini/app

git clone https://github.com/origini/app.git


## environment
docker
python
express framework 
migration

## TODO

podział na moduły:

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
  
  
  
