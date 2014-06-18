$(function(){
	$.each($('.type-wrap'),function(index,el){
		setTimeout(function(){
			$(el).fadeIn(200);			
		},100 * index);
	})
})