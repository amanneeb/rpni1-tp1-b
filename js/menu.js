/**
 * @author Anaïs Mannée-Batschy <2134649@csfoy.ca>
 * @file JS - Menu
 * @version 0.0.1
 */

 /*const refImageMenu = document.querySelector('.menu-principal');
 let refMenu = document.querySelector('.menuCache');

function changerIcone(){
    let strMenuOuvert = refImageMenu.classList[1];
    if(strMenuOuvert === 'ouvert'){
        refImageMenu.src='./images/hamburger_menu_icon.svg';
        refImageMenu.classList.remove('.menu-principal__item--ouvert');
        refImageMenu.classList.add('ferme');
        refMenu.style.display='none';
    } else if (strMenuOuvert === 'ferme'){
        refImageMenu.src='./images/close_icon.svg';
        refImageMenu.classList.remove('ferme');
        refImageMenu.classList.add('ouvert');
        refMenu.style.display='block';
    }
}*/


const refMenu = document.querySelector('.menu-principal__item');

function deployerMenu(){
    if(window.innerWidth < 800){
        console.log("YES: menu hamburger");
        
        for(intCpt=0; intCpt<refMenu.length; intCpt++){
            refMenu.classList.add('menu-principal__item--ferme');
            refMenu[intCpt].style.display = "none"
        }
        

    } else {
        console.log("NO: menu régulier");
        refMenu.classList.remove('menu-principal__item--ferme');

    }
}


window.addEventListener('load', function(){
    deployerMenu();
});
window.addEventListener('click', function(){
    deployerMenu();
});

