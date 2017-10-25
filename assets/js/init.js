
$('.button-collapse').sideNav();
$('.parallax').parallax();

var owl = $('.owl-carousel');
owl.owlCarousel({
	margin: 30,
	nav: true,
	navText: [ '', '' ],
	    loop:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    responsiveClass:true,
	responsive:{
	    0:{
	        items:1
	    },
	    600:{
	        items:1
	    },
	    992:{
	        items:1
	    }
	}
});