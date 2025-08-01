@echo off
cd /d %~dp0
echo.
echo 🔄 Adding all changes...
git add .

echo 📝 Enter commit message:
set /p msg=
git commit -m "%msg%"

echo ⬆️ Pushing to GitHub...
git push

echo ✅ Done!
pause
