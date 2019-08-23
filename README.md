# app
Application for Connection with allegro and ebay, research on market, filtering, management

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



Service
  UserType/App
    Visitor
    Marketer
    Accountant
    Admin
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
    + product
    + Customer
      + Contact
  

Service
  
Admin
  + users
    + roles    
  + logs
  
