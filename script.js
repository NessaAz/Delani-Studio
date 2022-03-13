$(".about-btn").mouseenter(function () {
	$(this).css("animation-play-state", "paused");
});
$(".about-btn").mouseleave(function () {
	$(this).css("animation-play-state", "running");
});

$(document).ready(function () {
	toggleCards();
	addHoverEffect();
});

const toggleCards = () => {
	$(".card-body p").hide();
	$("#whatWeDo .card").click(function () {
		const pElement = $(this).find("p");
		pElement.slideToggle();
		$(this).toggleClass("bg-secondary");
	});
};

const addHoverEffect = () => {
	const overlay = $("#portfolio h5");
	overlay.hide();
	$(".portfolio-container").hover(function () {
		$(this).find("h5").slideToggle("fast");
	});
};
