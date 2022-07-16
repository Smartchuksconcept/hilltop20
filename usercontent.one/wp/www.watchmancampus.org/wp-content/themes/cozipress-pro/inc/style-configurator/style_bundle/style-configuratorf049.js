jQuery(function($) {
	$(document).ready(function() {
		$(".front-switcher-collapsed").click(function(e){
			var $styleSwitcher = $(".front-pallate");
			if ($styleSwitcher.css("left") === "-251px") {
				$styleSwitcher.animate({
					left: "0"
				});
			} else {
				$styleSwitcher.animate({
					left: "-251px"
				});
			}
		});
	});
});