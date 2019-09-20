(function ($) {

    "use strict";

    window.themeFront = {

        /**
         Constructor
         **/
        initialize: function () {

            var self = this;

            $(document).ready(function () {
                self.build();
                self.events();
            });

        },
        /**
         Build page elements, plugins init
         **/
        build: function () {

            this.loadGoogleFonts();
            this.disableClickMenu();
            this.loadMore();

            if (window.loadCoinsStats !== undefined) {
                loadCoinsStats();
            }

        },
        /**
         Set page events
         **/
        events: function () {

            /**
             * Make parent menu items clickable
             */
            $('#header_menu .dropdown-toggle').click(function (e) {

                if ($(e.target).hasClass('nav-link')) {

                    var location = $(this).attr('href');

                    if (location !== '#') {
                        console.log(location);
                        $(this).siblings('.dropdown-menu').css('display', 'none');
                        window.location.href = location;
                        return false;
                    }
                }
            });

        },


        /**
         * Load More News - AJAX
         */
        loadMore: function () {
            var canBeLoaded = true,
                bottomOffset = 1700;

            $(window).scroll(function () {

                var data = {
                    'action': 'load_more',
                    'query': themeJsVars.posts,
                    'page': themeJsVars.current_page,
                    'post_type': themeJsVars.posttype
                };

                if ($(document).scrollTop() > ($(document).height() - bottomOffset) && canBeLoaded) {

                    $.ajax({
                        url: themeJsVars.ajaxurl,
                        data: data,
                        type: 'POST',
                        beforeSend: function (xhr) {
                            if (canBeLoaded) {
                                $('.load-more-container').parent().append('<div style="text-align: center"><i id="load_more_spinner" class="fa fa-spinner fa-spin" style="font-size:36px; margin-bottom: 30px"></i></div>\n');
                            }
                            canBeLoaded = false;
                            //$('.loadmorenews').addClass('active');
                        },
                        success: function (data) {
                            if (data) {
                                //$('.loadmorenews').removeClass('active');
                                $('.load-more-container').append(data);
                                if (window.loadCoinsStats !== undefined) {
                                    loadCoinsStats();
                                }
                                canBeLoaded = true;
                                themeJsVars.current_page++;
                            } else {
                                canBeLoaded = false;
                                $('.load-more-container').parent().append('<div class="alert alert-warning alert-dismissible fade show" role="alert">\n' +
                                    '  No more content to load\n' +
                                    '  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
                                    '    <span aria-hidden="true">&times;</span>\n' +
                                    '  </button>\n' +
                                    '</div>');
                            }
                            $('#load_more_spinner').remove();
                        },
                    });
                }
            });
        },

        /**
         * Load Google Fonts
         **/
        loadGoogleFonts: function () {

            WebFont.load({google: {families: ["Open+Sans:300,400,600,700,800"]}});

        },

        /** Check for mobile device **/
        isMobile: function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },
        stringToBoolean: function (string) {

            switch (string) {
                case "true":
                case "yes":
                case "1":
                    return true;
                case "false":
                case "no":
                case "0":
                case null:
                case '':
                    return false;
                default:
                    return Boolean(string);
            }
        },
        /** Check email address **/
        isValidEmailAddress: function (emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        },

        disableClickMenu: function () {
            $('.navbar .dropdown-toggle').on('click', function () {
                if ($(window).width() >= 1200) {
                    return false;
                }
            });
        },
    };

    window.themeFront.initialize();

})(window.jQuery);
