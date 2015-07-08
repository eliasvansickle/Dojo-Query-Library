$Dojo = ( function() {

	return function(id) 
	{
		var element_id = document.getElementById(id);
		return {
			click : function(callback) {
				element_id.addEventListener('click', callback);
			},
			hover : function(hover_in, hover_out) {
				element_id.addEventListener('mouseover', hover_in);
				element_id.addEventListener('mouseout', hover_out);
			}
		};
	};
} () );


$Dojo("one").click(function() { console.log("The button was clicked!") });
$Dojo("two").hover(function() { console.log("The button was mousedover!")}, function() {console.log("The button was mousedout")});