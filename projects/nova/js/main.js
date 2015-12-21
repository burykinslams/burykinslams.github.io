$(document).ready(function(){
	$('.hamburger').on('click', function(e) {
		e.preventDefault();
		$('.menujs').toggleClass('slide-down');
	});
});
