const baricon = document.querySelector('.bar-icon'),
      menu = document.querySelector('.menu');

baricon.addEventListener('click',displaySideBar);
menu.addEventListener('click',closeSideBar);

function displaySideBar(e){
   menu.style.display="block";
   baricon.style.display="none";
}

function closeSideBar(e){
    menu.style.display="none";
    baricon.style.display="block";
 }
 