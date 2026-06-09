@echo off
cd /d %~dp0backend\mqtt
node simulate-publisher.js
pause