@echo off
title SPI Website Launcher
color 1F

echo.
echo  ============================================
echo   SPI - Shri Paramhans International
echo   Website Launcher
echo  ============================================
echo.

:: Check if node_modules exists for frontend
if not exist "%~dp0node_modules" (
    echo  [1/2] Installing frontend dependencies...
    call npm install
    echo  Done.
    echo.
)

:: Check if node_modules exists for backend
if not exist "%~dp0backend\node_modules" (
    echo  [2/2] Installing backend dependencies...
    cd /d "%~dp0backend"
    call npm install
    cd /d "%~dp0"
    echo  Done.
    echo.
)

echo  Starting Backend Server on http://localhost:5000
start "SPI Backend" cmd /k "cd /d "%~dp0backend" && node server.js"

:: Small delay so backend starts first
timeout /t 2 /nobreak >nul

echo  Starting Frontend on http://localhost:5173
start "SPI Frontend" cmd /k "cd /d "%~dp0" && npm run dev"

:: Wait a moment then open browser
timeout /t 3 /nobreak >nul

echo.
echo  Opening website in browser...
start http://localhost:5173

echo.
echo  ============================================
echo   Both servers are running!
echo.
echo   Frontend : http://localhost:5173
echo   Backend  : http://localhost:5000
echo.
echo   Close the two terminal windows to stop.
echo  ============================================
echo.
pause
