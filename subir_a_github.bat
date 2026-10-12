@echo off
title Subir a GitHub - Nuestro Album
echo ======================================================
echo           Subiendo proyecto a GitHub: Nuestro-Album
echo ======================================================
echo.
echo Repositorio: https://github.com/gabrielcarbonel0215-gif/Nuestro-Album.git
echo.
echo Sincronizando sff.html con index.html...
copy /Y sff.html index.html >nul
echo.
echo Guardando cambios y preparando subida...
git add .
git commit -m "update: actualizacion de contenido y diseno"
echo.
echo Subiendo a GitHub...
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ======================================================
    echo     EXITO: Los cambios se han subido a GitHub!
    echo     Web: https://gabrielcarbonel0215-gif.github.io/Nuestro-Album/
    echo     Repo: https://github.com/gabrielcarbonel0215-gif/Nuestro-Album
    echo ======================================================
) else (
    echo.
    echo Ocurrio un inconveniente al subir. Comprueba tu conexion a Internet.
)

echo.
pause
