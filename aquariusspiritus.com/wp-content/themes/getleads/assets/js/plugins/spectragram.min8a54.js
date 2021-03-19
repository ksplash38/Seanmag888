     jQuery.fn.instaFeed = function ( options ) {
        var settings = jQuery.extend( {
            token: '',
            jQuerythis: jQuery( this ),
            photos: 0
        }, options );

        jQuery.ajax( {
            url: 'https://api.instagram.com/v1/users/self/media/recent',
            dataType: 'jsonp',
            type: 'GET',
            data: { access_token: settings.token, count: settings.photos },
            success: function ( data ) {
                for ( let x in data.data ) {
                    settings.jQuerythis.append( '<li><a href="' + data.data[x].link + '" ><img src="' + data.data[x].images.standard_resolution.url + '"></a></li>' );
                }
            },
            error: function ( data ) {
                console.log( data );
            }
        } );
    }