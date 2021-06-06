@echo off

echo "-------Begin-------"

git status

set msg= "%date% %time% By lala"

rem 注释 set /p msg= 输入本次提交的注释，不建议省略：

git add .

git commit -m %msg%

git push origin main

echo "--------End!--------"

pause