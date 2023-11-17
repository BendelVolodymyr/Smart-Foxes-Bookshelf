
  const homeLink = document.querySelector(".home-link");
  const shopLink = document.querySelector(".shoping-link");
  const svgEl = document.querySelector('.icon-basket');


window.addEventListener('load', () => {
  if (window.location.href === shopLink.href) {
      shopLink.classList.add('link-active');
     svgEl.classList.add('link-active-svg');
  } else{
     homeLink.classList.add('link-active');
  }
    
   
});





  const optionMenu = document.querySelector('.select-menu'),
   selectedBtn = optionMenu.querySelector('.active-user-acc'),
   options = optionMenu.querySelectorAll('.option'),
   sBtn_text = optionMenu.querySelector('.user-name');

selectedBtn.addEventListener('click', () => optionMenu.classList.toggle('active'));

   options.forEach(option =>{
    option.addEventListener('click', () => {
        optionMenu.classList.remove('active');
    })
   })

