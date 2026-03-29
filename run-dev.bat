@echo off
echo Starting SPI Website in Development Mode...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if package.json exists
if not exist package.json (
    echo Error: package.json not found
    echo Please make sure you're in the correct directory
    pause
    exit /b 1
)

REM Install dependencies if node_modules doesn't exist
if not exist node_modules (
    echo Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo Error: Failed to install dependencies
        pause
        exit /b 1
    )
)

REM Check if .env file exists, create from example if not
if not exist .env (
    if exist .env.example (
        echo Creating .env file from .env.example...
        copy .env.example .env
        echo.
        echo IMPORTANT: Please edit .env file and add your Gmail App Password
        echo The contact form will not work without proper Gmail configuration
        echo.
    ) else (
        echo Warning: No .env file found and no .env.example to copy from
        echo The contact form may not work properly
        echo.
    )
)

REM Start the development server using nodemon
echo Starting development server with nodemon...
echo.
echo SPI Website will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
call npx nodemon server.js