var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
        nav.classList.add("bg-change", "shadow");
    } else {
        nav.classList.remove("bg-change", "shadow");
    }
});



$(document).ready(function () {
    $(".owl-carousel.main-owl").owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		autoplay: true,
		autoplayTimeout: 7000,
		center: true,
		nav: true,
		center: true,
		items: 3,
		navText: [
			'<i class="fa-solid fa-angles-left  text-success"></i>',
			'<i class="fa-solid fa-angles-right  text-success"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			700: {
				items: 2,
			},

			1000: {
				items: 3,
			},
			1200: {
				items: 4,
			}
		},
	});
});



$(document).ready(function () {
	$(".owl-carousel.other-owl").owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: true,
		items: 3,
		navText: [
			'<i class="fa-solid fa-angles-left  text-success"></i>',
			'<i class="fa-solid fa-angles-right  text-success"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			900: {
				items: 3,
			},
			1200: {
				items: 4,
			},
		},
	});
});




$(document).ready(function () {
  // Add hover behavior to dropdown menu
  $(".dropdown").hover(
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(0).fadeIn(300);
    },
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(0).fadeOut(300);
    }
  );
});


function toggleTab(parent) {
	const tab = document.querySelector(`#tab-${parent}`);
	const arrow = document.getElementById(`arrow-${parent}`);
	arrow.classList.toggle("fa-angles-down", tab.classList.contains("active"));
	arrow.classList.toggle("fa-angles-up", !tab.classList.contains("active"));
	tab.classList.toggle("active");
}


function showTab(parent) {
	const tab = document.querySelector(`#tab-${parent}`);
	tab.classList.toggle("active");
}
