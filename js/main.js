$(document).ready(() => {
  let navbarHeight = $('.navbar').outerHeight();

  $('.navbar__list-item-link').on('click', function(e) {
		e.preventDefault();

    resetMobileNav();

		let elem = $(this.hash),
		elemPos = elem.offset().top - navbarHeight + 1;

    $('html, body').animate({
      scrollTop: elemPos
    }, 500);
	});

  $('.navbar__toggle').on('click', function(e) {
    $(this).toggleClass('navbar__toggle--open');
    $('.navbar__list').slideToggle('fast');
  });

  const resetMobileNav = () => {
    //If desktop, close mobile nav
    if(!$('.navbar__toggle').is(':visible')) {
      $('.navbar__toggle').removeClass('navbar__toggle--open');
      $('.navbar__list').removeAttr('style');
    }
  };

  const onWindowResize = () => {
    resetMobileNav();
  };

  const onWindowScroll = () => {
    let scrollPos = $(window).scrollTop();

    $('.navbar__list-item-link').each(function() {
      let _this = $(this),
          section = $(_this.attr('href'));

      if(section.position().top <= scrollPos + navbarHeight && section.position().top + section.outerHeight() > scrollPos + navbarHeight) {
        $('.navbar__list a').removeClass('navbar__list-item-link--active');
        _this.addClass('navbar__list-item-link--active');
      }else{
        _this.removeClass('navbar__list-item-link--active');
      }
    });
  };

  onWindowResize();
  $(window).on('resize', onWindowResize);

  onWindowScroll();
  $(window).on('scroll', onWindowScroll);
});