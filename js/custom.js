jQuery(document).ready(function($){
	// alert('sarasij');
	$('.gal-mg').on('click', function(e){
		var url = $(this).children('img').attr('src');
		var append = `<img src="${url}">`;
		$('.god').hide();
		$('.pop-frame').show();
		$('.pop-frame-img').find('img').remove().end().append(append);
	});
});


jQuery(document).ready(function($){
	$('.cross').on('click', function(e){
		$('.god').show();
		$('.pop-frame').hide();
	});
});