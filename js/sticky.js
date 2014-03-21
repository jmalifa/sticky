$(function() {
      var win = $(window);
      var nav = $('nav');

      var el_offset = nav.offset().top;
      //On ready JS here...

      win.scroll( function(){
        var navoffset = $('nav').offset().top;
        var scrollvalue = $(window).scrollTop();


        console.log('Hi from the sticky function');
        console.log('navoffset: ' + navoffset);
        console.log('scrollvalue: ' + scrollvalue);

        if(el_offset < scrollvalue) {
        $('nav').addClass("sticky");

        }
        else {
        $('nav').removeClass("sticky");

        }


      });

    });

