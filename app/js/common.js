$(function() {
	// Custom JS
	var $menuTrigger = $('.js-menuToggle');
	var $topNav = $('.js-topPushNav');
	var $openLevel = $('.js-openLevel');
	var $closeLevel = $('.js-closeLevel');
	var $closeLevelTop = $('.js-closeLevelTop');
	var $navLevel = $('.js-pushNavLevel');
	var $headerChangingBock = $('.js-headerChangingBock');

	var $searchIcon = $('.js-searchIcon');

	function openPushNav() {
		$topNav.addClass('isOpen');
		$('body').addClass('pushNavIsOpen');
	}

	function closePushNav() {
		$topNav.removeClass('isOpen');
		$openLevel.siblings().removeClass('isOpen');
		$('body').removeClass('pushNavIsOpen');
	}

	$menuTrigger.on('click touchstart', function(e) {
		e.preventDefault();
		if ($topNav.hasClass('isOpen')) {
			$headerChangingBock.empty();

			closePushNav();
		} else {
			$headerChangingBock.append(`<span>Get A Quick Quote</span>`);

			openPushNav();
		}
	});

	$openLevel.on('click touchstart', function(e) {
		$headerChangingBock.empty();
		$headerChangingBock.append(`<span>${e.target.innerText}</span>`);

		$(this)
			.next($navLevel)
			.addClass('isOpen');
	});

	$closeLevel.on('click touchstart', function() {
		$(this)
			.closest($navLevel)
			.removeClass('isOpen');
		$headerChangingBock.empty();
		$headerChangingBock.append(`<span>Get A Quick Quote</span>`);
	});

	$closeLevelTop.on('click touchstart', function() {
		$headerChangingBock.empty();
		closePushNav();
	});

	$searchIcon.on('click touchstart', function() {
		// closePushNav();
	});

	$('.screen').click(function() {
		closePushNav();
	});
});
