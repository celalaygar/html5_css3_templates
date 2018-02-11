var toggle = document.getElementById('toggle-menu');
var menuF = document.getElementById('menuF');

function toggleMenu(){
    if (menuF.className == '') {
        menuF.className = 'toggle';
    }else{
        menuF.className = '';
    }
} toggle.onclick = toggleMenu;