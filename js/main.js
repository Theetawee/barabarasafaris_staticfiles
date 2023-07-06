
function toggleTab(e) {
	const t = document.querySelector(`#tab-${e}`),
		s = document.getElementById(`arrow-${e}`);
	s.classList.toggle("fa-angles-down", t.classList.contains("active")),
		s.classList.toggle("fa-angles-up", !t.classList.contains("active")),
		t.classList.toggle("active");
}
function showTab(e) {
	document.querySelector(`#tab-${e}`).classList.toggle("active");
}
	$(document).ready(function () {
		$(".owl-carousel.main-owl").owlCarousel({
			loop: true,
			margin: 10,
			responsiveClass: true,
			autoplay: true,
			autoplayTimeout: 5000, // Change slide after every 2 seconds
			autoplayHoverPause: true, // Pause autoplay on hover
			center: false,
			nav: true,
			navText: [
				'<i class="fa-solid fa-angle-left text-success"></i>',
				'<i class="fa-solid fa-angle-right text-success"></i>',
			],
			items: 3,
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
				},
				992: {
					items: 3,
				},
			},
		});
	});

	$(document).ready(function () {
		$(".owl-carousel.other-owl").owlCarousel({
			loop: true,
			margin: 10,
			responsiveClass: true,
			autoplay: true,
			autoplayTimeout: 5000, // Change slide after every 5 seconds
			autoplayHoverPause: true, // Pause autoplay on hover
			nav: true,
			navText: [
				'<i class="fa-solid fa-angle-left text-success"></i>',
				'<i class="fa-solid fa-angle-right text-success"></i>',
			],
			items: 4, // Show 4 items on big screens
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

	document.getElementById("activate").addEventListener("click", function (e) {
		e.preventDefault(),
			(document.getElementById("chat-card").style.display = "block");
	}),
	document.getElementById("close").addEventListener("click", function () {
		document.getElementById("chat-card").style.display = "none";
	});
