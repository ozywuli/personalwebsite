// Copyright Year

$(function() {
  var copyrightDate = new Date();
  var copyrightYear = copyrightDate.getFullYear();
  var copyrightContainer = $( '.copyright-years' );


  if ( copyrightYear === 2014 ) {
    copyrightContainer.append(copyrightYear + ' ');
  } else {
    copyrightContainer.append('2014' + ' &#8722; ' + copyrightYear + ' ');
  }

});


// Apply sticky to menus when scrolling down
$(function() {

  var $stickySideMenu = $('.js-stickySideMenu');
  var $primaryContainer = $('.primary-container');


  if ($stickySideMenu.length) {
    var offsetSideMenu = $stickySideMenu.offset().top;


    var applySticky = function() {
      var scrollTop = $(window).scrollTop();

      if (scrollTop > offsetSideMenu) {
        $stickySideMenu.addClass('sticky');
        $primaryContainer.addClass('offset-sidebar');
      } else {
        $stickySideMenu.removeClass('sticky');
        $primaryContainer.removeClass('offset-sidebar');
      }

    }

    $(window).scroll(function() {
      applySticky();
    });

  }

});

// Portfolio Isotope

var $container = $('.js-isotope-list').imagesLoaded( function() {
  $container.isotope({

  });

});



$('.js-isotope-menu').click(function() {
  var selector = $(this).attr('data-filter');
  $container.isotope({
    filter: selector
  });
  return false;
});
