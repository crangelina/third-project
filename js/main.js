var $links = $("header a");
var $galleryImage = $("#gallery img");
var $lightboxBackground = $("#lightboxBackground");
var $lightbox = $("#lightbox");
var $welcomeButton2 = $("#welcome-button2");
var $portfolio = $("#portfolio");
var $portfolioButton = $("#portfolio button");




//hover in nav bar

$links.on('click', function(){
	$links.removeClass("active");
	$(this).addClass("active");
});






//hover over lightbox photos
$galleryImage.hover(
	function(){
		$(this).css("border", "1px solid #eef9fd");
	},
	function(){
		$(this).css("border", "none");
	}

);

//lightbox

$galleryImage.on('click', function(){
	var $newImg = $("<img>");
	$newImg.attr("src", $(this).attr("src"));

	$lightbox.empty();
	$lightbox.append($newImg);

	$lightboxBackground.show();
	$lightbox.show(200);
});

$lightboxBackground.on('click', function(){
	$lightboxBackground.hide();
	$lightbox.hide();
});





//hover on portfolio buttons
$("#welcome-button1, #welcome-button2, #portfolio button").hover( 
	function(){
		$(this).css("font-weight", "bolder");
	},
	function(){
		$(this).css("font-weight", "300");
	}
);

//portfolio pop-out

$welcomeButton2.on('click', function(){
	$portfolio.slideToggle(800);
});	

//hidden text in portfolio

$portfolioButton.on('click', function(){
	var $hidden = $(this).siblings(".hidden");
	if ($hidden.is(":visible")) {
			$hidden.slideUp();
			$(this).text("READ MORE");
	} else {
		$hidden.slideDown();
		$(this).text("READ LESS");
	}
});





//hover on footer icons

$(".last .fa, #input").hover(
	function(){
		$(this).css("color", "#fff");
	},
	function(){
		$(this).css("color", "#06A7E4");
	}
);

//hover on footer "submit" button

$("#submit").hover(
	function(){
		$(this).css("border-color", "#fff");
	},
	function(){
		$(this).css("border-color", "#06A7E4");
	}
);











		// TOGGLING WITH JQUERY AND JAVASCRIPT
				//when hover over img fade out
				// $galleryImage.on('click', function(){
				// 	$galleryImage.toggle();
				// 	$(this).fadeIn('slow');

				// });



				// $galleryImage.on('click', function(){
				// 	// first run: if ( !false )
				// 	// second run: if ( !true )
				// 	if (imagesVisible) {
				// 		$galleryImage.hide();
				// 		$(this).fadeIn('slow');
				// 		imagesVisible = false;
				// 	} else {
				// 		$galleryImage.show();
				// 		imagesVisible = true;		
				// 	}

				// });