
const toggle = document.querySelector('.toggle'),
      box= document.querySelector('.box'),
      content= document.querySelector('.content'),
      faq = document.querySelector('.bottom-sec');


box.addEventListener('click',opentoggle);
content.addEventListener('click', closetoggle);

function opentoggle(e){
    content.style.display ='block';
    toggle.innerHTML = '&times;';
    faq.style.height="130vh";
};

function closetoggle(e) {
    content.style.display = 'none';
    toggle.innerHTML = '+';
    faq.style.height="125vh";
};




