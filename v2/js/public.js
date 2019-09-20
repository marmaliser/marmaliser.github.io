var eafl_public = eafl_public || {};

jQuery(document).ready(function($) {
    jQuery('a.eafl-link-direct').on('click', function() {
        var data = {
            action: 'eafl_register_click',
            security: eafl_public.nonce,
            link: jQuery(this).data('eafl-id')
        };

        jQuery.post(eafl_public.ajax_url, data);
    });
});