(function($) {
	if ($("body").hasClass("front_pallate_enable")) {
		// $(document).on('click','.header_type:radio',function(){
			// //resetButtonShow();
		    // var value = $(this).attr('data-myval');
		    // localStorage.setItem("header_value", value);
	        // //alert('is add - ' + value);
	        // if (value == "header-default header-nav-white") {
		        // $("body").removeClass("above-header-bg header-transparent");
		        // $("body").removeClass("header-transparent");
		        // $("body").removeClass("above-header-bg");
	        	// $("#page").parent('body').addClass("header-default header-nav-white");
		    // } else if (value == "header-default") {
		        // $("body").removeClass("above-header-bg header-transparent");
		        // $("body").removeClass("header-transparent");
		        // $("body").removeClass("above-header-bg");
		        // $("body").removeClass("header-default header-nav-white");
		        // $("body").removeClass("header-nav-white");
	        	// $("#page").parent('body').addClass("header-default");
		    // } else if (value == "header-default above-header-bg") {
		        // $("body").removeClass("above-header-bg header-transparent");
		        // $("body").removeClass("header-transparent");
		        // $("body").removeClass("header-default header-nav-white");
		        // $("body").removeClass("header-nav-white");
		        // $("body").removeClass("header-default");
	        	// $("#page").parent('body').addClass("header-default above-header-bg");
		    // } else if (value == "header-transparent") {
		        // $("body").removeClass("above-header-bg header-transparent");
		        // $("body").removeClass("above-header-bg");
		        // $("body").removeClass("header-default header-nav-white");
		        // $("body").removeClass("header-nav-white");
		        // $("body").removeClass("header-default");;
	        	// $("#page").parent('body').addClass("header-transparent");
		    // } else if (value == "above-header-bg header-transparent") {
		        // $("body").removeClass("header-transparent");
		        // $("body").removeClass("above-header-bg");
		        // $("body").removeClass("header-default header-nav-white");
		        // $("body").removeClass("header-nav-white");
		        // $("body").removeClass("header-default");
	        	// $("#page").parent('body').addClass("above-header-bg header-transparent");
		    // }
		// });
		$(document).on('click', '.color-changer', function(e){
			//console.log(localStorage.getItem('customstyle'));
			if(localStorage.getItem('customstyle') == null){
				//resetButtonShow();
				var id 	=	$(this).attr('id');
				var color 	=	$(this).attr('data-myval');
				$('.style-palette li a').removeClass('active');
				$('#'+id).addClass('active');
				localStorage.setItem('stylesheet', color);
				var cssClass = ':root {--bs-primary:' + color + ';}';

		    	$('#cozipressCustomCss').html(cssClass);
			}
			else{
				// $('.error_msg').html('Please Reset Custom Color');
				alertify.error('Please Reset Custom Color');
			}
		});
		//Colors & Background
		$(document).on('click', '.web-btn', function(e){
			$(".web-btn").removeClass('active');
			//resetButtonShow();
			$(this).addClass('active');
			localStorage.setItem("layout", $(this).attr('id'));
			if( $(this).attr('id') == 'wide'){
				$("body").removeClass("boxed");
				$("#bg").hide();
			} else{
				localStorage.setItem("layout", $(this).attr('id'));				
				$("body").addClass("boxed");
				$("#bg").show();
			}
		});
		$(document).on('click', '.bg li a span', function(e){
			layout = localStorage.getItem('layout');
			if(layout == 'boxed') {
				//resetButtonShow();
				var bg = $(this).css("backgroundImage");
				$("body").css("backgroundImage",bg);
				localStorage.setItem("backgroundImage", bg);
			}
			// else {
				// $('.error_bg').html('Background Patterns will work with Boxed Layout');
			// }
		});
		
		var front_pallate_enable = $( ".front_pallate_enable" ).each(function() {
			//console.log(localStorage);
			// var header_layout = localStorage.getItem('header_value');
			// //var header_layout_body = localStorage.getItem('header_value', checked);

			// if (header_layout == "header-default header-nav-white") {
		        // $("body").removeClass("above-header-bg header-transparent");
		        // $("body").removeClass("header-transparent");
		        // $("body").removeClass("above-header-bg");
	        	// $("#page").parent('body').addClass("header-default header-nav-white");
		    // } else if (header_layout == "header-default") {
		        // $("body").removeClass("above-header-bg header-transparent");
		        // $("body").removeClass("header-transparent");
		        // $("body").removeClass("above-header-bg");
		        // $("body").removeClass("header-default header-nav-white");
		        // $("body").removeClass("header-nav-white");
	        	// $("#page").parent('body').addClass("header-default");
		    // } else if (header_layout == "header-default above-header-bg") {
		        // $("body").removeClass("above-header-bg header-transparent");
		        // $("body").removeClass("header-transparent");
		        // $("body").removeClass("header-default header-nav-white");
		        // $("body").removeClass("header-nav-white");
		        // $("body").removeClass("header-default");
	        	// $("#page").parent('body').addClass("header-default above-header-bg");
		    // } else if (header_layout == "header-transparent") {
		        // $("body").removeClass("above-header-bg header-transparent");
		        // $("body").removeClass("above-header-bg");
		        // $("body").removeClass("header-default header-nav-white");
		        // $("body").removeClass("header-nav-white");
		        // $("body").removeClass("header-default");;
	        	// $("#page").parent('body').addClass("header-transparent");
		    // } else if (header_layout == "above-header-bg header-transparent") {
		        // $("body").removeClass("header-transparent");
		        // $("body").removeClass("above-header-bg");
		        // $("body").removeClass("header-default header-nav-white");
		        // $("body").removeClass("header-nav-white");
		        // $("body").removeClass("header-default");
	        	// $("#page").parent('body').addClass("above-header-bg header-transparent");
		    // }

			//localStorage.removeItem('layout')
			//boxed
			var layout = localStorage.getItem('layout');
			if( layout ==null){
				$('.style-palette-bx li a').removeClass('active');
				$('#wide').addClass('active');
				$("body").removeClass("boxed");
				localStorage.setItem('layout','wide');
				$("#bg").hide();
			}
			$('#'+layout).addClass('active');
			if( layout == 'wide'){
				//resetButtonShow();
				$("body").removeClass("boxed");
				$("#bg").hide();
			}
			else if( layout == 'boxed'){
				//resetButtonShow();
				$("body").addClass("boxed");
				$("#bg").show();
			}
			
			var layout_p = localStorage.getItem('layout');	
			if(layout_p == 'boxed') {
				//resetButtonShow();
				//console.log(localStorage);
				var bg = localStorage.getItem('backgroundImage');
				$("body").css("backgroundImage",bg);
			}
			if(localStorage.getItem('stylesheet') !='' && localStorage.getItem('stylesheet')!='undefined' && localStorage.getItem('stylesheet') !=null){
					//resetButtonShow();
					var id 	=	$(this).attr('id');
					color = localStorage.getItem('stylesheet');			
					$('#'+id).addClass('active');
					var cssClass = ':root {--bs-primary:' + color + ';}';
		    	$('#cozipressCustomCss').html(cssClass);
			} else {
				$('.style-palette li a').removeClass('active');
				$(this).attr('data-myval','colors_settings.defaultColor');
			}
			if(localStorage.getItem('customstyle')!='' && localStorage.getItem('customstyle')!='undefined' && localStorage.getItem('customstyle') !=null){
				//resetButtonShow();
				jscolor = localStorage.getItem('customstyle');
				var css = ':root {--bs-primary:' + jscolor + ';}';
		    	$('#cozipressCustomCss').html(css);	
			}
		});

		document.getElementById('pickColor').addEventListener('change', function(e){
		    pickColor(this.jscolor);
		});

		function pickColor(jscolor) {
			//resetButtonShow();
		    localStorage.setItem('customstyle', jscolor);
		    jscolor = jscolor.toRGBAString();
			localStorage.removeItem('stylesheet');
			$('.style-palette li a').removeClass('active');
		    var css = ':root {--bs-primary:' + jscolor + ';}';
		    $('#cozipressCustomCss').html(css);
		}

		document.getElementById('resetColor').addEventListener('click', function(){
		    resetColor(this);
		});
		function resetColor(e) {
		    $(e).prev().css('background-color', 'colors_settings.defaultColor');
		    $('#cozipressCustomCss').html('');
		    localStorage.removeItem('customstyle');
			//$('.error_msg').html('');
			alertify.error('Custom Color Reset Successfully !!');
			//console.log(localStorage);
		}

		// LocalStorage Clear
		$(document).on('click', '.clr_localStorage', function(e){
			localStorage.clear();
			front_pallate_enable;
			$('#cozipressClassCss').html('');
			$('#cozipressCustomCss').html('');
			//resetButtonHide();
		});
		function resetButtonShow(){
			$('.bbtn').show();
			//console.log('hello');
		}
		function resetButtonHide(){
			$('.bbtn').hide();
			//console.log('Byy');
		}
	}
}(jQuery));