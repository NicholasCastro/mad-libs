$(document).ready(function() {

	function removeinputs(){
		$("#inputs").hide();
		$("#inputs").detach();
	}

	function showstory(){
		$("#story").show().addClass("animated flipInX");
	}

	$("#story").hide();

	$("#start").on("click", function() {
		$("#inputs").addClass("animated flipOutX");
		setTimeout(removeinputs, 1000);
		setTimeout(showstory, 1500);
	});

	$("#reset").on("click", function() {
		location.reload();
	});
})