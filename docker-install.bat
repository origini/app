-curl.bat https://download.docker.com/win/static/stable/x86_64/docker-17.09.0-ce.zip docker.zip
call zipjs.bat unzip -source docker.zip -destination .
mkdir F:\docker
zipjs.bat unzip -source F:\xampp73\htdocs\origini-app\docker.zip -destination F:\
F:\docker\docker.exe
