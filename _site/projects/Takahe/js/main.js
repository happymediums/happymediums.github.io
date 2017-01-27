$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();


// =========================================
// Image Sequence Animation
// =========================================

            // define images
	var images = [
				"/projects/takahe/img/takahe-animation/animation00.jpg",
				"/projects/takahe/img/takahe-animation/animation01.jpg",
				"/projects/takahe/img/takahe-animation/animation02.jpg",
				"/projects/takahe/img/takahe-animation/animation03.jpg",
        "/projects/takahe/img/takahe-animation/animation04.jpg",
        "/projects/takahe/img/takahe-animation/animation05.jpg",
        "/projects/takahe/img/takahe-animation/animation06.jpg",
        "/projects/takahe/img/takahe-animation/animation07.jpg",
				"/projects/takahe/img/takahe-animation/animation08.jpg",
				"/projects/takahe/img/takahe-animation/animation09.jpg",
				"/projects/takahe/img/takahe-animation/animation10.jpg",
				"/projects/takahe/img/takahe-animation/animation11.jpg",
				"/projects/takahe/img/takahe-animation/animation12.jpg",
				"/projects/takahe/img/takahe-animation/animation13.jpg",
				"/projects/takahe/img/takahe-animation/animation14.jpg",
				"/projects/takahe/img/takahe-animation/animation15.jpg",
				"/projects/takahe/img/takahe-animation/animation16.jpg",
				"/projects/takahe/img/takahe-animation/animation17.jpg",
				"/projects/takahe/img/takahe-animation/animation18.jpg",
				"/projects/takahe/img/takahe-animation/animation19.jpg",
				"/projects/takahe/img/takahe-animation/animation20.jpg",
				"/projects/takahe/img/takahe-animation/animation21.jpg",
				"/projects/takahe/img/takahe-animation/animation22.jpg",
				"/projects/takahe/img/takahe-animation/animation23.jpg",
				"/projects/takahe/img/takahe-animation/animation24.jpg",
				"/projects/takahe/img/takahe-animation/animation25.jpg",

	];

	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = {curImg: 0};

	// create tween
	var tween = TweenMax.to(obj, 1,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 3,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#myimg").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build scene
	var LogoAnimationScene = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: 1,
		duration: '200%'
	})
			.setTween(tween)
		//	.addIndicators({

		//	})
			.addTo(controller);

	// handle form change
	$("form.move input[name=duration]:radio").change(function () {
		scene.duration($(this).val());

    });

// End of Logo Animation Sequence
});
