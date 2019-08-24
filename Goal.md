1. W celu szybkiego tworzenia aplikacji w dowolnej technologii przez kazdego konieczne jest ustalenie prostych zasadach
+ frontend i backend są oddzielne
+ backend = API

Struktura projektu:
+ css
+ img
+ js
+ page 
+ plugin
+ php
  + index.php
  + controller.php
  + model.php


PHP jako język skryptowy dla tworzenia template jest łatwy do uzycia i przetestowania, dlatego dynamiczne funkcje będą tam przechowywane jako 
przedsionek dla backendu.
Ważne jest spojrzenie na aplikację jako formę utrzymującą kod, z uwzględnieniem otoczenia: protokołu,
techniczny background a nie architektura


Każdy element systemu jest przeznaczony dla określonego usera, dlatego lepiej każdy element zdefiniować, kto będzie go uzywał

Przykładowy projekt: 
\Visitor
  \Newsletter
    + css
    + img
    + js
    + page 
    + plugin
    + php
      + index.php
      
      + rest.php
        http params
          Get
          Put
          Post
          Delete
      + Controller.php
        actions
      + Model.php
        attributes
      
\Admin
  \Newsletter
    + css
    + img
    + js
    + page 
    + plugin
    + php
      + index.php
      + Controller.php
      + Model.php      
