$(document).ready(() => {
  let navbarHeight = $('.navbar').outerHeight();

  $('.navbar__list-item-link').on('click', function(e) {
		e.preventDefault();

    $('.navbar__toggle').removeClass('navbar__toggle--open');
    $('.navbar__list').removeClass('navbar__list--open');

		let section = $(this.hash),
		    sectionPos = section.offset().top - navbarHeight;

    $('html, body').animate({
      scrollTop: sectionPos
    }, 500);
	});

  $('.navbar__toggle').on('click', function(e) {
    $(this).toggleClass('navbar__toggle--open');
    $('.navbar__list').toggleClass('navbar__list--open');
  });

  const onWindowResize = () => {
    //If desktop, close mobile nav
    if(!$('.navbar__toggle').is(':visible')) {
      $('.navbar__toggle').removeClass('navbar__toggle--open');
      $('.navbar__list').removeClass('navbar__list--open');
    }
  };
  onWindowResize();

  const onWindowScroll = () => {
    let scrollPos = $(window).scrollTop();

    $('.navbar__list-item-link').each(function() {
      let link = $(this),
          section = $(link.attr('href'));

      if(section.position().top <= scrollPos + navbarHeight && section.position().top + section.outerHeight() > scrollPos + navbarHeight) {
        $('.navbar__list-item-link').removeClass('navbar__list-item-link--active');
        link.addClass('navbar__list-item-link--active');
      }else{
        link.removeClass('navbar__list-item-link--active');
      }
    });
  };
  onWindowScroll();

  $(window).on('resize', onWindowResize).on('scroll', onWindowScroll);
});
