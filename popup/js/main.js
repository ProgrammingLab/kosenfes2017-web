$(function(){
	$('.preview').click(function(){
		let imgUrl = $(this).attr('src');
		$('#popupImg').attr('src', imgUrl);
		$('#popupBG').css({'display': 'flex'}).animate({opacity: 1}, 300);

	});
	$('#popupImg').click(function(e){
		e.stopPropagation();
	});

	$('#popupBG').click(function(){
		$(this).css({
			'display': 'none',
			'opacity': 0
		});
	});
});