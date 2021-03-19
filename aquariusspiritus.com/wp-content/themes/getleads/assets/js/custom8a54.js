jQuery( document ).ready( function () {

    "use strict";


    /* =================================
     LOADER                     
     =================================== */
// makes sure the whole site is loaded
    jQuery( window ).on( 'load', function () {

        // will first fade out the loading animation
        jQuery( ".theme-loader-inner" ).fadeOut();
        // will fade out the whole DIV that covers the website.
        jQuery( ".theme-loader" ).fadeOut( "slow" );

    } );


    /* =================================
     NAVBAR COLLAPSE ON SCROLL
     =================================== */
    jQuery( window ).on( 'scroll', function () {
        var b = jQuery( window ).scrollTop();
        if ( b > 60 ) {
            jQuery( ".navbar" ).addClass( "top-nav-collapse" );
        } else {
            jQuery( ".navbar" ).removeClass( "top-nav-collapse" );
        }
    } );


    /* =================================
     NAVBAR WITH TOP BAR
     =================================== */
    jQuery( '.nav-2' ).affix( {
        offset: {
            top: jQuery( '.top-bar' ).height()
        }
    } );


    /* ===========================================================
     PAGE SCROLLING FEATURE
     ============================================================== */
    jQuery( '.nav li a' ).not( '.nav li a.dropdown-toggle, .mega-menu-activated .navbar-nav>.menu-item-has-children>a' ).on( 'click', function ( event ) {
        var jQueryanchor = jQuery( this );
        jQuery( 'html, body' ).stop().animate( {
            scrollTop: jQuery( jQueryanchor.attr( 'href' ) ).offset().top
        }, 1500, 'easeInOutExpo' );
        event.preventDefault();
    } );


    /* ===========================================================
     DYNAMIC PRICING TABLE
     ============================================================== */
    jQuery( '.package-toggle' ).each( function () {
        jQuery( this ).change( function () {
            var curr_class = '.' + jQuery( this ).attr( 'id' );
            var price = jQuery( this ).attr( 'data-price' );
            var price_box = jQuery( '.pricing-table li.price span' );

            jQuery( curr_class ).toggleClass( 'active' );

            if ( price ) {
                if ( jQuery( curr_class ).hasClass( 'active' ) ) {
                    price_box.html( parseInt( price_box.html(), 10 ) + parseInt( price, 10 ) );
                } else {
                    price_box.html( parseInt( price_box.html(), 10 ) - parseInt( price, 10 ) );
                }
            }
        } );
    } );


    /* ===========================================================
     BACK TO TOP BUTTON
     ============================================================== */
    var offset = 300,
//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
//duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
//grab the "back to top" link
        jQueryback_to_top = jQuery( '.top' );

//hide or show the "back to top" link
    jQuery( window ).on( 'scroll', function () {
        ( jQuery( this ).scrollTop() > offset ) ? jQueryback_to_top.addClass( 'is-visible' ) : jQueryback_to_top.removeClass( 'is-visible fade-out' );
        if ( jQuery( this ).scrollTop() > offset_opacity ) {
            jQueryback_to_top.addClass( 'fade-out' );
        }
    } );

//smooth scroll to top
    jQueryback_to_top.on( 'click', function ( event ) {
        event.preventDefault();
        jQuery( 'body,html' ).animate( {
            scrollTop: 0
        }, scroll_top_duration
            );
    } );


    /* ===========================================================
     WOW ANIMATIONS                   
     ============================================================== */
    new WOW().init();


    /* ===========================================================
     MAGNIFIC POPUP
     ============================================================== */
    jQuery( '.mp-singleimg' ).magnificPopup( {
        type: 'image'
    } );

    jQuery( '.mp-gallery' ).magnificPopup( {
        type: 'image',
        gallery: { enabled: true },
    } );

    jQuery( '.mp-iframe' ).magnificPopup( {
        type: 'iframe'
    } );


    /* ===========================================================
     FUNFACTS COUNTER
     ============================================================== */
    if ( jQuery( '.counter' ).length ) {
        var o = jQuery( '.counter' ),
            cc = 1;

        jQuery( window ).on( 'scroll', function () {
            var elemPos = o.offset().top,
                elemPosBottom = o.offset().top + o.height(),
                winHeight = jQuery( window ).height(),
                scrollToElem = elemPos - winHeight,
                winScrollTop = jQuery( this ).scrollTop();

            if ( winScrollTop > scrollToElem ) {
                if ( elemPosBottom > winScrollTop ) {
                    if ( cc < 2 ) {
                        cc = cc + 2;
                        o.countTo();
                    }
                }
            }
        } );
    }


    /* ===========================================================
     OWL CAROUSEL
     ============================================================== */
    if ( jQuery( ".owl-carousel-screenshots" ).length ) {
        jQuery( ".owl-carousel-screenshots" ).owlCarousel( {
            autoPlay: 5000,
            loop: true,
            items: 6,
            itemsDesktop: [ 1200, 6 ],
            itemsDesktopSmall: [ 900, 6 ],
            itemsTablet: [ 600, 4 ],
            itemsMobile: [ 400, 2 ]
        } );
    }

    if ( jQuery( "#owl-carousel-dashboard" ).length ) {
        jQuery( "#owl-carousel-dashboard" ).owlCarousel( {
            autoPlay: 5000,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            transitionStyle: "fade"
        } );
    }

    if ( jQuery( "#owl-testimonial-single" ).length ) {
        jQuery( "#owl-testimonial-single" ).owlCarousel( {
            autoPlay: 5000,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            transitionStyle: "fade"
        } );
    }
    if ( jQuery( "#owl-testimonial-single2" ).length ) {
        jQuery( "#owl-testimonial-single2" ).owlCarousel( {
            autoPlay: 5000,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            transitionStyle: "fade"
        } );
    }

    if ( jQuery( "#owl-testimonial-single3" ).length ) {
        jQuery( "#owl-testimonial-single3" ).owlCarousel( {
            autoPlay: 5000,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            transitionStyle: "fade"
        } );
    }

    if ( jQuery( "#owl-team" ).length ) {
        jQuery( "#owl-team" ).owlCarousel( {
            autoPlay: 5000, //Set AutoPlay to 5 seconds
            items: 3,
            itemsDesktop: [ 1199, 3 ],
            itemsDesktopSmall: [ 979, 3 ]
        } );
    }

    if ( jQuery( "#owl-partners-3" ).length ) {
        jQuery( "#owl-partners-3" ).owlCarousel( {
            autoPlay: 5000, //Set AutoPlay to 5 seconds
            items: 3,
            itemsDesktop: [ 1199, 3 ],
            itemsDesktopSmall: [ 979, 3 ]
        } );
    }

    if ( jQuery( "#owl-partners-4" ).length ) {
        jQuery( "#owl-partners-4" ).owlCarousel( {
            autoPlay: 5000, //Set AutoPlay to 5 seconds
            items: 4,
            itemsDesktop: [ 1199, 4 ],
            itemsDesktopSmall: [ 979, 3 ]
        } );
    }



    /* ===========================================================
     FEATURES TAB
     ============================================================== */
    jQuery( '.features-tab .tab-title' ).on( 'click', function ( e ) {
        if ( !jQuery( this ).hasClass( 'current' ) ) {
            jQuery( '.tab-title' ).removeClass( 'out' );
            jQuery( '.tab-title.current' ).addClass( 'out' );
            jQuery( '.features-tab .tab-title' ).removeClass( 'current' );
            jQuery( this ).addClass( 'current' );
        }
        e.preventDefault();
    } );


    /* ===========================================================
     TWITTER FEED
     ============================================================== */
    function handleTweets( tweets ) {
        var x = tweets.length,
            n = 0,
            element = document.getElementById( 'twitter-feed' ),
            html = '<div class="slides">';
        while ( n < x ) {
            html += '<div>' + tweets[n] + '</div>';
            n++;
        }
        html += '</div>';
        element.innerHTML = html;

        /* Twits attached to owl-carousel */
        jQuery( "#twitter-feed .slides" ).owlCarousel( {
            slideSpeed: 300,
            paginationSpeed: 400,
            autoPlay: true,
            pagination: false,
            transitionStyle: "fade",
            singleItem: true
        } );
    }

    if ( jQuery( '#twitter-feed' ).length ) {
        var widgetId = jQuery( '#twitter-feed' ).attr( 'data-widget-id' );

        var config_feed = {
            "profile": widgetId,
            "enableLinks": true,
            "showUser": true,
            "showTime": true,
            "dateFunction": '',
            "showRetweet": false,
            "showImages": false,
            "customCallback": handleTweets,
            "showInteraction": false
        };

        twitterFetcher.fetch( config_feed );
    }


    /* ===========================================================
     TWITTER WIDGET FOR TESTIMONIALS
     ============================================================== */
    window.twttr = ( function ( d, s, id ) {
        var js, fjs = d.getElementsByTagName( s )[0],
            t = window.twttr || { };
        if ( d.getElementById( id ) )
            return t;
        js = d.createElement( s );
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore( js, fjs );
        t._e = [ ];
        t.ready = function ( f ) {
            t._e.push( f );
        };
        return t;
    }( document, "script", "twitter-wjs" ) );


    /* ===========================================================
     INSTAGRAM FEED
     ============================================================== */

   

    if ( jQuery( '.insta-feed' ).length > 0 ) {
        jQuery( '.insta-feed' ).instaFeed( {
            token: jQuery( '.instagram-feed' ).attr( 'data-access-token' ),
            photos: 5
        } )
    }
    
   console.log(jQuery( '.instagram-feed' ).attr( 'data-access-token' ));




    /* ===========================================================
     COUNTDOWN TIMER
     ============================================================== */



    /* ===========================================================
     MAILCHIMP
     ============================================================== */
    if ( jQuery( '#mailchimpForm' ).length ) {
        jQuery( "#mailchimpForm" ).formchimp();
    }


    /* ===========================================================
     GOOGLE MAPS
     ============================================================== */
    /* active mouse scroll when the user clicks into the map*/
    if ( jQuery( '.map-container' ).length ) {
        jQuery( '.map-container' ).on( 'click', function () {
            jQuery( '.map-iframe' ).css( "pointer-events", "auto" );
        } );

        jQuery( ".map-container" ).on( 'mouseleave', function () {
            jQuery( '.map-iframe' ).css( "pointer-events", "none" );
        } );
    }


    /* ==========================================
     FUNCTION FOR EMAIL ADDRESS VALIDATION
     ============================================= */
    function isValidEmail( emailAddress ) {
        var pattern = new RegExp( /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)jQuery)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?jQuery)/i );
        return pattern.test( emailAddress );
    }


    /* ==========================================
     FUNCTION FOR PHONE NUMBER VALIDATION
     ============================================= */
    function isValidPhoneNumber( phoneNumber ) {
        return phoneNumber.match( /[0-9-()+]{3,20}/ );
    }






    /* ==========================================
     TICKET SELECTION
     ============================================= */
    var jQueryticketSelected = jQuery( '.ticket-prices .item-price' );

    jQueryticketSelected.on( 'click', function ( event ) {
        jQueryticketSelected.removeClass( 'active' );
        jQuery( this ).addClass( 'active' );

        jQuery( '#ticketForm input[name="ticket"]' ).val( jQuery( this ).find( 'h4' ).text() + ' Ticket - Cost: ' + jQuery( this ).find( '.amount' ).text() );
    } );


    /* ==========================================
     DATEPICKER
     ============================================= */
    if ( jQuery( "#dfDate" ).length ) {
        jQuery( '#dfDate' ).pickadate( {
            min: new Date()
        } );
    }



    /* ==========================================
     SUBSCRIBE FORM / ONLY EMAIL
     ============================================= */
    jQuery( "#subscribeForm" ).on( 'submit', function ( e ) {
        e.preventDefault();
        var data = {
            email: jQuery( "#sfEmail" ).val()
        };

        if ( isValidEmail( data['email'] ) ) {
            jQuery.ajax( {
                type: "POST",
                url: "php/subscribe.php",
                data: data,
                success: function () {
                    jQuery( '.success.sf' ).delay( 500 ).fadeIn( 1000 );
                    jQuery( '.failed.sf' ).fadeOut( 500 );
                }
            } );
        } else {
            jQuery( '.failed.sf' ).delay( 500 ).fadeIn( 1000 );
            jQuery( '.success.sf' ).fadeOut( 500 );
        }

        return false;
    } );


    /* ==========================================
     SUBSCRIBE FORM 2 / EMAIL + NAME
     ============================================= */
    jQuery( "#subscribeForm2" ).on( 'submit', function ( e ) {
        e.preventDefault();
        var data = {
            name: jQuery( "#sf2Name" ).val(),
            email: jQuery( "#sf2Email" ).val()
        };

        if ( isValidEmail( data['email'] ) && ( data['name'].length > 1 ) ) {
            jQuery.ajax( {
                type: "POST",
                url: "php/subscribe2.php",
                data: data,
                success: function () {
                    jQuery( '.success.sf2' ).delay( 500 ).fadeIn( 1000 );
                    jQuery( '.failed.sf2' ).fadeOut( 500 );
                }
            } );
        } else {
            jQuery( '.failed.sf2' ).delay( 500 ).fadeIn( 1000 );
            jQuery( '.success.sf2' ).fadeOut( 500 );
        }

        return false;
    } );


    /* ===========================================================
     BOOTSTRAP FIX FOR IE10 in Windows 8 and Windows Phone 8  
     ============================================================== */
    if ( navigator.userAgent.match( /IEMobile\/10\.0/ ) ) {
        var msViewportStyle = document.createElement( 'style' );
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
                )
            );
        document.querySelector( 'head' ).appendChild( msViewportStyle );
    }

    //var formSelector = ;

    fwForm.initAjaxSubmit( {
        selector: 'form[data-fw-form-id="fw_form"]',
        ajaxUrl: adminAjax
    } );

// Mega Menu
    //-------------------------------------------------------------
    function megaMenuXs() {
        var winW = jQuery( window ).width();
        jQuery( '.mega-menu-activated .mega-menu' ).each( function ( a, b ) {
            var o = jQuery( this ).offset(),
                r = jQuery( this ).css( 'right' );

            if ( o.left < 0 ) {
                r = parseInt( r ) + o.left - 15;
                jQuery( this ).css( { right: r } );
            }
        } );

        if ( winW < 992 ) {

            jQuery( '.mega-menu-activated .navbar-nav>.menu-item-has-children>a' ).on('click', function ( e ) {
                jQuery( this ).parent().find( '.sub-menu, .mega-menu' ).toggleClass( 'open' );
                return false;
            } );

            jQuery( 'body:not(.mega-menu-activated .navbar-nav a)' ).click( function ( e ) {
                jQuery( '.mega-menu-activated .navbar-nav .open' ).removeClass( 'open' );
            } );

        }
    }

    var resizeId;
    jQuery( window ).resize( function () {
        clearTimeout( resizeId );
        resizeId = setTimeout( megaMenuXs, 500 );
    } );
    megaMenuXs();


    jQuery( '.hidden.cross-fire' ).remove();
    jQuery( '#menu-main-menu' ).find( '.menu-item' ).removeClass( 'current-menu-item' );




    var swiper = new Swiper( '.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 10000,
        autoplayDisableOnInteraction: false,
        effect: 'fade',
        loop: 'true'


    } );

    var checkXsIsMobile = {
        iOS: function () {
            return navigator.userAgent.match( /iPhone|iPad|iPod/i );
        }
    };
    if ( checkXsIsMobile.iOS() ) {
        jQuery( '.parallax-section' ).css( 'background-attachment', 'scroll' );
    }
    ;



} ); // End jQuery(document).ready Function

 