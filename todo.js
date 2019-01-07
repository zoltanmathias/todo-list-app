$("#add").click(function(){
	$("input").fadeToggle();
})


$("ul").on("click", "li", function(){
	$(this).toggleClass("strike");
})

$("ul").on("click", "li span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newLi = $(this).val();
		$("ul").append("<li><span><i class='fas fa-ban'></i></span> "+newLi+"</li>");
		$(this).val("");
	}
})