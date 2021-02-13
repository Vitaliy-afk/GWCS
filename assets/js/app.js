jQuery( document ).ready(function() {
	initSlickSlider();
	initBurgerMenu();
	initAddResizeClass();
});



function initAddResizeClass() {
	var win = $(window),
			doc = $('html'),
			resizeClass = 'resize-active',
			flag, timer;
		var removeClassHandler = function() {
			flag = false;
			doc.removeClass(resizeClass);
		};
		var resizeHandler = function() {
			if(!flag) {
				flag = true;
				doc.addClass(resizeClass);
			}
			clearTimeout(timer);
			timer = setTimeout(removeClassHandler, 500);
		};
		win.on('resize orientationchange', resizeHandler);
}

// const cards = document.querySelectorAll('.card');

// for (let i = 0; i < cards.length; i++) {
// 	const card = cards[i];
// 	card.addEventListener('mousemove', startRotate);
// 	card.addEventListener('mouseout', stopRotate);
	
// }

// function startRotate(event) {
// 	const cardItem = this.querySelector('.card__item');
//     const halfHeight = cardItem.offsetHeight  / 2;
//     const halfWidth = cardItem.offsetWidth / 2;

// 	cardItem.style.transform = 'rotateX(' + -(event.offsetY - 
// 	halfHeight) / 2 + 'deg) rotateY(' + (event.offsetX -
// 	halfWidth) / 2 + 'deg)';
// }

// function stopRotate(event) {
// 	const cardItem = this.querySelector('.card__item');
// 	cardItem.style.transform = 'rotate(0)';
// }


// function asd() {
// 	jQuery(document).ready(function(){
// 		jQuery('#progressBar').progressbar({
// 					value: 0
// 			});
// 	   });
// 	   var statusTracker;
// 	   var percentage = 0;
	   
// 	   function checkStatus() {
// 		   percentage = percentage + value;
// 		   jQuery('.green').animate({
// 			   width : percentage + '%'
// 		   });
	   
// 		   if (percentage == 0) stop();
// 	   }
// 	   function startProgress(){
// 		   statusTracker = setInterval(checkStatus, 100);
// 	   }
	   
// 	   function stop() {
// 		   clearInterval(statusTracker);
// 	   }
// 	   jQuery(document).ready(startProgress); 
	
// }





function initBurgerMenu() {
	jQuery('#hamburger-holder').on('click', function(e){
		e.preventDefault()
		jQuery('body').toggleClass('nav-active');
	});
	jQuery('.profile2').on('click', function(e){
		e.preventDefault()
		jQuery('body').toggleClass('profile-active');
	});
	jQuery(".nav-opener.close").click(function(e){
        jQuery("body").removeClass("nav-active");
	});
	
}



function initSlickSlider() {
	jQuery('.slider').slick({
	infinite: true,
	speed: 3500,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	easing: 'ease',
	dots: false,
	rows: false,
	adaptiveHeight: true,
	// variableWidth: true,
	// centerMode: true,
	responsive: [
		{
		  breakpoint: 2560,
		  settings: {
			slidesToShow: 5,
			slidesToScroll: 3,
			infinite: true,
		  }
		},
		{
			breakpoint: 1025,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  infinite: true,
			}
		  },
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
})};

