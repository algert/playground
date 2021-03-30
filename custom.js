
	// (function ($) {
    //     'use strict';
    //     jQuery(window).on('scroll', function () {
    //       var varHeaderFix = $(window).scrollTop() >= 60,
    //         $navbar = $('.bsnav');
    //       if (varHeaderFix) {
    //         $navbar.addClass('fixed-header');
    //       } else {
    //         $navbar.removeClass('fixed-header');

    //       }
    //       });
    //   })(jQuery);


    
	(function ($) {
        'use strict';
        jQuery(window).on('scroll', function () {
          var varHeaderFix = $(window).scrollTop() >= 60,
            $navbar = $('.bsnav');
          if (varHeaderFix) {
            $navbar.addClass('addShadow');
          } else {
            $navbar.removeClass('addShadow');
          }

          });
      })(jQuery);



      
jQuery(document).ready(function(){
	// media box
	MediaBox('.mediabox');


    // Navigation icon
    jQuery('#nav-icon1').click(function(){
            jQuery(this).toggleClass('open');
			jQuery('.button__trynow').toggleClass('d-none');
			jQuery('.navbar-brand').toggleClass('opacity-none');
      jQuery('.addShadow').toggleClass('transparent-bg');
    });

    /* Footer show hide items */

    if (document.documentElement.clientWidth < 991) {
    jQuery(".single__m__w__head__one").click(function(){
    jQuery(".single__m__w__item__one  ul").slideToggle("slow");
    jQuery(".single__m__w__head__one span").toggleClass("icon__rotate");
    
    });
    
        /* end first widget */
    
    jQuery(".single__m__w__head__two").click(function(){
    jQuery(".single__m__w__item__two ul").slideToggle("slow");
    jQuery(".single__m__w__head__two span").toggleClass("icon__rotate");
    });
    
    /* end second widget */
    
    jQuery(".single__m__w__head__three").click(function(){
    jQuery(".single__m__w__item__three ul").slideToggle("slow");
    jQuery(".single__m__w__head__three span").toggleClass("icon__rotate");
    });
    
    /* end third widget */
    
    jQuery(".single__m__w__head__four").click(function(){
    jQuery(".single__m__w__item__four ul").slideToggle("slow");
    jQuery(".single__m__w__head__four span").toggleClass("icon__rotate");
    });
    
    /* end fourth widget */
    
    jQuery(".single__m__w__head__five").click(function(){
    jQuery(".single__m__w__item__five ul").slideToggle("slow");
    jQuery(".single__m__w__head__five span").toggleClass("icon__rotate");
    });
    
    /* end fiveth widget */
    
    jQuery(".single__m__w__head__six").click(function(){
    jQuery(".single__m__w__item__six ul").slideToggle("slow");
    jQuery(".single__m__w__head__six span").toggleClass("icon__rotate");
    });
    
    /*end sixth widget */
}
    });