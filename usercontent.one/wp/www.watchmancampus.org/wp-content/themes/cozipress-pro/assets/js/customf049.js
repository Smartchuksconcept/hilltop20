(function($) {
  'use strict';

    $( document ).ready(function() {
        // Preloader
        if ($(".preloader").length > 0) {
          $(window).load(function() {
            $('.preloader').fadeOut('1000', function () {
              $(this).remove();
            });
          });
        }

        // ScrollUp
        $(window).on('scroll', function () {
          if ($(this).scrollTop() > 200) {
            $('.scrollingUp').addClass('is-active');
          } else {
            $('.scrollingUp').removeClass('is-active');
          }
        });
        $('.scrollingUp').on('click', function () {
          $("html, body").animate({
            scrollTop: 0
          }, 600);
          return false;
        });

        // Sticky Header
        $(window).on('scroll', function() {
          if ($(window).scrollTop() >= 250) {
              $('.is-sticky-on').addClass('is-sticky-menu');
          }
          else {
              $('.is-sticky-on').removeClass('is-sticky-menu');
          }
        });

        // Breadcrumb Sticky Menu
        $(window).on('scroll', function() {
          if ($(window).scrollTop() >= 420) {
              $('.breadcrumb-sticky-on').addClass('breadcrumb-sticky-menu');
          }
          else {
              $('.breadcrumb-sticky-on').removeClass('breadcrumb-sticky-menu');
          }
        });

        // Service Section Load Button Filter
        $(".service-home .st-load-item").slice(0, 3).show();
        $(".service-home .st-load-btn").on('click', function (e) {
            e.preventDefault();
            $(".service-home .st-load-btn").addClass("loadspinner");
            $(".service-home .st-load-btn").animate({
                    display: "block"
                }, 2500,
                function () {
                    // Animation complete.                
                    // $(".load-2:hidden").slice(0, 2).slideDown()
                    // .each(function() {
                    //   $('#grid').shuffle('appended', $(this));
                    // });
                    $(".service-home .st-load-item:hidden").slice(0, 3).slideDown();
                    if ($(".service-home .st-load-item:hidden").length === 0) {
                        $(".service-home .st-load-btn").text("No more");
                    }
                    $(".service-home .st-load-btn").removeClass("loadspinner");
                }
            );
        });
        $(".service-page .st-load-item").slice(0, 6).show();
        $(".service-page .st-load-btn").on('click', function (e) {
            e.preventDefault();
            $(".service-page .st-load-btn").addClass("loadspinner");
            $(".service-page .st-load-btn").animate({
                    display: "block"
                }, 2500,
                function () {
                    // Animation complete.                
                    // $(".load-2:hidden").slice(0, 2).slideDown()
                    // .each(function() {
                    //   $('#grid').shuffle('appended', $(this));
                    // });
                    $(".service-page .st-load-item:hidden").slice(0, 3).slideDown();
                    if ($(".service-page .st-load-item:hidden").length === 0) {
                        $(".service-page .st-load-btn").text("No more");
                    }
                    $(".service-page .st-load-btn").removeClass("loadspinner");
                }
            );
        });

        //Projects Section Load Button Filter
        $("#projects-section .st-load-item").slice(0, 6).show();
        $("#projects-section .st-load-btn").on('click', function (e) {
            e.preventDefault();
            $("#projects-section .st-load-btn").addClass("loadspinner");
            $("#projects-section .st-load-btn").animate({
                    display: "block"
                }, 2500,
                function () {
                    $("#projects-section .st-load-item:hidden").slice(0, 3).slideDown();
                    if ($("#projects-section .st-load-item:hidden").length === 0) {
                        $("#projects-section .st-load-btn").text("No more");
                    }
                    $("#projects-section .st-load-btn").removeClass("loadspinner");
                }
            );
        });

        // MagnificPopup
        $('.mgf-popup').magnificPopup({
          delegate: 'a',
          type: 'image',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          callbacks: {
            elementParse: function(item) {
              //console.log(item.el[0].className);
              if(item.el[0].className == 'video') {
                item.type = 'iframe',
                item.iframe = {
                   patterns: {
                     youtube: {
                       index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                       id: 'v=', // String that splits URL in a two parts, second part should be %id%
                        // Or null - full URL will be returned
                        // Or a function that should return %id%, for example:
                        // id: function(url) { return 'parsed id'; } 

                       src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
                     },
                     vimeo: {
                       index: 'vimeo.com/',
                       id: '/',
                       src: '//player.vimeo.com/video/%id%?autoplay=1'
                     },
                     gmaps: {
                       index: '//maps.google.',
                       src: '%id%&output=embed'
                     }
                   }
                }
              } else {
                 item.type = 'image',
                 item.tLoading = 'Loading image #%curr%...',
                 item.mainClass = 'mfp-img-mobile',
                 item.image = {
                   tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                 }
              }

            }
          }
        });

        // Single Magnific Popup Video
        $('.btn-play').magnificPopup({
            type: 'iframe'
        });

        // Counter Up
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        // Skill Counter
        $('.skillbar').each(function(){
          $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
          },6000);
        });
        $('.count-bar').each(function () {
          var $this = $(this);
          $({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 6000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });

        // Animated Typing Text
        var typingText = function (el, toRotate, period) {
          this.toRotate = toRotate;
          this.el = el;
          this.loopNum = 0;
          this.period = parseInt(period, 10) || 2000;
          this.txt = "";
          this.tick();
          this.isDeleting = false;
        };
        typingText.prototype.tick = function () {
          var i = this.loopNum % this.toRotate.length;
          var fullTxt = this.toRotate[i];

          if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }

          this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

          var that = this;
          var delta = 200 - Math.random() * 100;

          if (this.isDeleting) {
            delta /= 2;
          }

          if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
          } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
          }

          setTimeout(function () {
            that.tick();
          }, delta);
        };
        window.onload = function () {
          var elements = document.getElementsByClassName("typewrite");
          for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute("data-type");
            var period = elements[i].getAttribute("data-period");
            if (toRotate) {
              new typingText(elements[i], JSON.parse(toRotate), period);
            }
          }
          // INJECT CSS
          var css = document.createElement("style");
          css.type = "text/css";
          css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #111111}";
          document.body.appendChild(css);
        };

        // Perspective Hover Effect
        var perspectiveSettings = [
        {},
        {
          movement: {
            imgWrapper : {
              translation : {x: 10, y: 10, z: 30},
              rotation : {x: 0, y: -10, z: 0},
              reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
            },
            lines : {
              translation : {x: 10, y: 10, z: [0,70]},
              rotation : {x: 0, y: 0, z: -2},
              reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
            },
            caption : {
              rotation : {x: 0, y: 0, z: 2},
              reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
            },
            overlay : {
              translation : {x: 10, y: -10, z: 0},
              rotation : {x: 0, y: 0, z: 2},
              reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
            },
            shine : {
              translation : {x: 100, y: 100, z: 0},
              reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
            }
          }
        },
        {
          movement: {
            imgWrapper : {
              rotation : {x: -5, y: 10, z: 0},
              reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
            },
            caption : {
              translation : {x: 30, y: 30, z: [0,40]},
              rotation : {x: [0,15], y: 0, z: 0},
              reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
            },
            overlay : {
              translation : {x: 10, y: 10, z: [0,20]},
              reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
            },
            shine : {
              translation : {x: 100, y: 100, z: 0},
              reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
            }
          }
        },
        {
          movement: {
            imgWrapper : {
              rotation : {x: -5, y: 10, z: 0},
              reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
            },
            caption : {
              translation : {x: 20, y: 20, z: 0},
              reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
            },
            overlay : {
              translation : {x: 5, y: -5, z: 0},
              rotation : {x: 0, y: 0, z: 6},
              reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
            },
            shine : {
              translation : {x: 50, y: 50, z: 0},
              reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
            }
          }
        },
        {
          movement: {
            imgWrapper : {
              translation : {x: 0, y: -8, z: 0},
              rotation : {x: 3, y: 3, z: 0},
              reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
            },
            lines : {
              translation : {x: 15, y: 15, z: [0,15]},
              reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
            },
            overlay : {
              translation : {x: 0, y: 8, z: 0},
              reverseAnimation : {duration : 600, easing : 'easeOutExpo'}
            },
            caption : {
              translation : {x: 10, y: -15, z: 0},
              reverseAnimation : {duration : 900, easing : 'easeOutExpo'}
            },
            shine : {
              translation : {x: 50, y: 50, z: 0},
              reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
            }
          }
        },
        {
          movement: {
            lines : {
              translation : {x: -5, y: 5, z: 0},
              reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
            },
            caption : {
              translation : {x: 15, y: 15, z: 0},
              rotation : {x: 0, y: 0, z: 3},
              reverseAnimation : {duration : 1500, easing : 'easeOutElastic', elasticity : 700}
            },
            overlay : {
              translation : {x: 15, y: -15, z: 0},
              reverseAnimation : {duration : 500,easing : 'easeOutExpo'}
            },
            shine : {
              translation : {x: 50, y: 50, z: 0},
              reverseAnimation : {duration : 500, easing : 'easeOutExpo'}
            }
          }
        },
        {
          movement: {
            imgWrapper : {
              translation : {x: 5, y: 5, z: 0},
              reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
            },
            caption : {
              translation : {x: 10, y: 10, z: [0,50]},
              reverseAnimation : {duration : 1000, easing : 'easeOutQuart'}
            },
            shine : {
              translation : {x: 50, y: 50, z: 0},
              reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
            }
          }
        },
        {
          movement: {
            lines : {
              translation : {x: 40, y: 40, z: 0},
              reverseAnimation : {duration : 1500, easing : 'easeOutElastic'}
            },
            caption : {
              translation : {x: 20, y: 20, z: 0},
              rotation : {x: 0, y: 0, z: -5},
              reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
            },
            overlay : {
              translation : {x: -30, y: -30, z: 0},
              rotation : {x: 0, y: 0, z: 3},
              reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
            },
            shine : {
              translation : {x: 100, y: 100, z: 0},
              reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
            }
          }
        }];

        function init() {
          var idx = 0;
          [].slice.call(document.querySelectorAll('.tilter')).forEach(function(el, pos) { 
            idx = pos%2 === 0 ? idx+1 : idx;
            new TiltFx(el, perspectiveSettings[idx-1]);
          });
        }
        init();
    });
    // Tab Filter
    $(window).on('load', function () {
      var postFilter = $('.st-filter-init');
      $.each(postFilter,function (index,value) {
          var el = $(this);
          var parentClass = $(this).parent().attr('class');
          var $selector = $('#'+el.attr('id'));
          if ($selector.hasClass('pricing-init')) {
            $($selector).imagesLoaded(function () {
                var festivarMasonry = $($selector).isotope({
                    itemSelector: '.st-filter-item',
                    percentPosition: true,
                    transformsEnabled: false,
                    filter: '.monthly',
                    masonry: {
                        columnWidth: 0,
                        gutter:0
                    }
                });
                $(document).on('click', '.'+parentClass+' .st-tab-filter a', function () {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue,
                        animationOptions: {
                            duration: 450,
                            easing: "linear",
                            queue: false,
                        }
                    });
                    return false;
                });
            });
          } else {
            $($selector).imagesLoaded(function () {
              var festivarMasonry = $($selector).isotope({
                  itemSelector: '.st-filter-item',
                  percentPosition: true,
                  masonry: {
                      columnWidth: 0,
                      gutter:0
                  }
              });
              $(document).on('click', '.'+parentClass+' .st-tab-filter a', function () {
                  var filterValue = $(this).attr('data-filter');
                  festivarMasonry.isotope({
                      filter: filterValue,
                      animationOptions: {
                          duration: 450,
                          easing: "linear",
                          queue: false,
                      }
                  });
                  return false;
              });
            });
          }
      });
      $(document).on('click', '.st-tab-filter a', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
      });

      // Tab Swipe Indicator
      $('.tab-swipe-filter').append('<span class="indicator"></span>');
      if ($('.tab-swipe-filter a').hasClass('active')) {
          let cLeft = $('.tab-swipe-filter a.active').position().left + 'px',
              cWidth = $('.tab-swipe-filter a.active').css('width');
          $('.indicator').css({
              left: cLeft,
              width: cWidth
          })
      }
      $('.tab-swipe-filter a').on('click', function () {
          $('.tab-swipe-filter a').removeClass('is-active');
          $(this).addClass('is-active');
          let cLeft = $('.tab-swipe-filter a.is-active').position().left + 'px',
              cWidth = $('.tab-swipe-filter a.is-active').css('width');
          $('.indicator').css({
              left: cLeft,
              width: cWidth
          })
      });
    });
}(jQuery));
