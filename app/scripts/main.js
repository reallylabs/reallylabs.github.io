'use strict';

$(function() {
	$('#mailchimp-form').ajaxChimp({
		url: '//really.us9.list-manage.com/subscribe/post?u=ed6e31901f6c240b64caf59ad&amp;id=c490d57a03',
		language: 'enCustom'
	});

	$.ajaxChimp.translations.enCustom = {
        1: 'Please enter your email'
    };
});
