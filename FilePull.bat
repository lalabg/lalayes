@echo off

echo "-------Begin-------"

git pull

rem # 重置本地库，强制拉取远程分支
rem git fetch --all && git reset --hard origin/master && git pull

echo "--------End!--------"

pause