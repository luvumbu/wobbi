@echo off
setlocal enabledelayedexpansion
title Wobbi - Lancement
cd /d "%~dp0"

echo ============================================
echo   Wobbi - demarrage automatique
echo ============================================
echo.

echo [1/4] Verification de Node.js...
where node >nul 2>nul
if errorlevel 1 (
    echo Node.js n'est pas installe sur ce PC.
    where winget >nul 2>nul
    if not errorlevel 1 (
        echo Installation de Node.js via winget...
        echo Une fenetre Windows peut demander une confirmation, acceptez-la.
        winget install -e --id OpenJS.NodeJS.LTS --silent --accept-package-agreements --accept-source-agreements
        set "PATH=%ProgramFiles%\nodejs;%PATH%"
        where node >nul 2>nul
    )
    if errorlevel 1 (
        echo.
        echo Installation automatique impossible.
        echo Ouverture de la page de telechargement de Node.js...
        start https://nodejs.org/fr/download
        echo.
        echo Installez Node.js, puis redemarrez ce fichier.
        pause
        exit /b 1
    )
    echo Node.js installe.
) else (
    echo Node.js deja present.
)
echo.

echo [2/4] Verification des dependances...
if not exist "node_modules" (
    echo Installation des dependances, cela peut prendre une minute...
    call npm ci
    if errorlevel 1 (
        echo.
        echo L'installation des dependances a echoue.
        pause
        exit /b 1
    )
    echo Dependances installees.
) else (
    echo Dependances deja installees.
)
echo.

echo [3/4] Demarrage du studio Wobbi...
powershell -NoProfile -Command "if(Test-NetConnection -ComputerName 127.0.0.1 -Port 5173 -InformationLevel Quiet -WarningAction SilentlyContinue){ exit 0 } else { exit 1 }" >nul 2>nul
if errorlevel 1 (
    start "Wobbi - Serveur" cmd /k npm run dev
) else (
    echo Wobbi tourne deja, pas besoin de le relancer.
)
echo.

echo [4/4] Ouverture du navigateur des que le studio est pret...
powershell -NoProfile -Command "for($i=0;$i -lt 40;$i++){ if(Test-NetConnection -ComputerName 127.0.0.1 -Port 5173 -InformationLevel Quiet -WarningAction SilentlyContinue){ exit 0 }; Start-Sleep -Seconds 1 }; exit 1"
if errorlevel 1 (
    echo Le studio met plus de temps que prevu a demarrer.
    echo Ouverture du navigateur quand meme...
)
start http://127.0.0.1:5173

echo.
echo Wobbi est lance. Vous pouvez fermer cette fenetre.
echo (La fenetre "Wobbi - Serveur" doit rester ouverte pendant l'utilisation.)
ping -n 6 127.0.0.1 >nul
exit /b 0
