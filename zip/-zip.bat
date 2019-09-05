:: PowerShell 5.0
:: Create result.zip from the entire Test folder:
:: Compress-Archive -Path polkurier -DestinationPath .
:: https://superuser.com/questions/201371/create-zip-folder-from-the-command-line-windows
:: "zipper.vbs" "C:\folderToZip\" "C:\mynewzip.zip"
del /f polkurier.zip
SET SOURCEDIR=F:\xampp73\htdocs\polkurier_presta\polkurier
SET OUTPUTZIP=F:\xampp73\htdocs\polkurier_presta\polkurier.zip
CALL ZipUp
@echo off