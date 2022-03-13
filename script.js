const toggleCards = () => {
	$(".card-body p").hide();
	$("#whatWeDo .card").click(function () {
		const pElement = $(this).find("p");
		pElement.slideToggle();
		$(this).toggleClass("bg-secondary");
	});
};
