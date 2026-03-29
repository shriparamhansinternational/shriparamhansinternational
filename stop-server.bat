@echo off
echo Stopping SPI Website Server...
echo.

REM Find and kill processes running on port 3000
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do (
    echo Stopping process with PID: %%a
    taskkill /PID %%a /F >nul 2>&1
)

echo.
echo SPI Website server stopped.
echo.
pause