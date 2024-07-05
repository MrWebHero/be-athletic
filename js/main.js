document.addEventListener("DOMContentLoaded", function () {
   
	/* ======   оторазить форму поиска по клику на лупу в шапке      ====== */
	const headerSearchOpen = document.querySelector('#search-open');
	const headerSearchForm = document.querySelector('#header-search-form');

	headerSearchOpen.addEventListener('click', ()=>{
		
		headerSearchForm.classList.toggle('search-form--open');
		console.log(headerSearchForm.classList);
	});

	/* ======  menu icon click ====== */
	const menuToggle = document.querySelector('#menu-toggle');
	const mobileMenu = document.querySelector('#header-menu');
	const bodyEl = document.body;

	if (menuToggle) {

		/*   клик поиконке гамбургер*/  
		menuToggle.addEventListener('click', ()=> {
			
			if (menuToggle.classList.contains('active')) {

				menuToggle.classList.remove('active');
				mobileMenu.classList.remove('active');
				bodyEl.classList.remove('lock');
			
			} else {
				menuToggle.classList.add('active');
			    mobileMenu.classList.add('active');
				bodyEl.classList.add('lock');
			}
		});

       /*   клик по мобильному меню*/  
		mobileMenu.addEventListener('click', () => {
			menuToggle.classList.remove('active');
			mobileMenu.classList.remove('active');
			bodyEl.classList.remove('lock');
		});
	}
	/*HEADER SLIDER */
	var headerSwiper = new Swiper(".header-slider", {
		loop: true,
		speed: 1000,
		effect: "fade",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

    /*===== toggle theme color ===== */
   const toggleTheme = document.querySelector('.toggle-theme');
   if(toggleTheme){
		const toggleThemeInput = toggleTheme.querySelector('.toggle-theme__input');
		toggleTheme.addEventListener('click', ()=>{
		if(toggleThemeInput.checked){bodyEl.classList.add('green-theme');}
		else{bodyEl.classList.remove('green-theme');}
	});
   }
    /*===== button backTop ===== */
	const backTop = document.querySelector('.back-top');
	if(backTop){
		window.addEventListener('scroll', ()=>{
			if(window.scrollY > 500){backTop.classList.add('back-top--visible');}
			else{backTop.classList.remove('back-top--visible');}
		})
	}
})