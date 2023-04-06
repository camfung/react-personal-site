@echo off
set component_name=%1

mkdir .\src\pages\%component_name%
cd .\src\pages\%component_name%

plop --plopfile "C:\Users\camer\OneDrive\Desktop\firebase-react-app\plopfile.js" --dest=./ --name=%component_name%
