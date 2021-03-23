document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.loader').classList.add('hidden');
    const keyUp = document.querySelector('#keyUp');
    const keyDown = document.querySelector('#keyDown')
    const gotIt = document.querySelector('#gotIt');
    const guide = document.querySelector('.guide');


    // Check for Guide

    if (localStorage.getItem('guide') == 'hidden') {
        guide.style.display = "none";
    }

    gotIt.addEventListener('click', () => {
        guide.classList.add('hidden');
        localStorage.setItem('guide', 'hidden');
    });



    // Check for key presses

    document.onkeydown = checkKeyDown;

    function checkKeyDown(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            keyUp.classList.add('pressedUp');
        }
        else if (e.keyCode == '40')
            keyDown.classList.add('pressedDown');
    }

    document.onkeyup = checkKeyUp;

    function checkKeyUp(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            keyUp.classList.remove('pressedUp');
        }
        else if (e.keyCode == '40')
            keyDown.classList.remove('pressedDown');
    }




});
