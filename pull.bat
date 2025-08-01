@echo off
cd /d %~dp0
echo.
echo 🔽 Pulling latest changes from GitHub...
git pull

echo ✅ Done!
pause
