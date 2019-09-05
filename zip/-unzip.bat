:: Create result.zip from the entire Test folder:
Compress-Archive -Path C:\Test -DestinationPath C:\result
:: Extract the content of result.zip in the specified Test folder:
Expand-Archive -Path result.zip -DestinationPath C:\Test