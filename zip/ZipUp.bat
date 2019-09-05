@echo off
echo Set fso = CreateObject("Scripting.FileSystemObject") > _zipup.vbs
echo InputFolder = fso.GetAbsolutePathName(WScript.Arguments.Item(0)) >> _zipup.vbs
echo ZipFile = fso.GetAbsolutePathName(WScript.Arguments.Item(1)) >> _zipup.vbs

'Create empty ZIP file.
echo CreateObject("Scripting.FileSystemObject").CreateTextFile(ZipFile, True).Write "PK" ^& Chr(5) ^& Chr(6) ^& String(18, vbNullChar) >> _zipup.vbs

echo Set objShell = CreateObject("Shell.Application") >> _zipup.vbs
echo Set source = objShell.NameSpace(InputFolder).Items >> _zipup.vbs
echo objShell.NameSpace(ZipFile).CopyHere(source) >> _zipup.vbs


echo 'Keep script waiting until compression is done
echo Do Until objShell.NameSpace( ZipFile ).Items.Count = objShell.NameSpace( InputFolder ).Items.Count >> _zipup.vbs
echo     WScript.Sleep 200 >> _zipup.vbs
echo Loop >> _zipup.vbs

CScript  _zipup.vbs  %SOURCEDIR%  %OUTPUTZIP%

del _zipup.vbs