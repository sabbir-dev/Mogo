$(function(){
  //-----sticky navbar start-----
    $(window).scroll(function(){
      var top=$(this).scrollTop()
      if(top>250){
        $(".navbar").addClass("sticky-menu")
      }
      else{
        $(".navbar").removeClass("sticky-menu")
      }
      if(top>300){
        $(".back-to-top").fadeIn("300")
      }
      else{
        $(".back-to-top").fadeOut("300")
      }
    })
    $(".back-to-top").click(function(){
      $("html,body").animate({scrollTop:0},500)
    })
  
  //-----sticky navbar End-----
  //scroll-spy & Smooth-scrolling
  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 40
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 40;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });

  //-----banner slider start-----
    $('.banner-slide-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:false
      });
        //-----banner slider end-----
        //-----project counter start-----

      $('.project-counter').counterUp({
        delay: 1,
        time: 1000
    });
      //-----project counter end-----
      //-----about slider start-----

    $('.about-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
         
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
         
          },
        ]
      });
        //-----about slider end-----
        //-----comment slider start-----

      $('.comment-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:true,
        prevArrow:".comment-left",
        nextArrow:".comment-right",
        
      });
        //-----comment slider end-----
        //-----team slider start-----

    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2500,
        arrows:false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
         
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
         
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
         
          }
        ]
      });
        //-----team slider end-----

        //-----work part js-----
       new VenoBox({
          selector: '.my-image-links',
          numeration: true,
          infinigall: true,
          share: true,
          spinner: 'rotating-plane'
      });
        new VenoBox({
          selector: '.my-video-links',
          numeration: true,
          infinigall: true,
          share: true,
          spinner: 'rotating-plane'
      });
        //-----work part js-----
       
    
})