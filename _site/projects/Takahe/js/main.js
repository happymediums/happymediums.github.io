$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();


// =========================================
// Image Sequence Animation
// =========================================

            // define images
	var images = [
				"/assets/img/takahe-animation/animation00.jpg",
				"/assets/img/takahe-animation/animation01.jpg",
				"/assets/img/takahe-animation/animation02.jpg",
				"/assets/img/takahe-animation/animation03.jpg",
        "/assets/img/takahe-animation/animation04.jpg",
        "/assets/img/takahe-animation/animation05.jpg",
        "/assets/img/takahe-animation/animation06.jpg",
        "/assets/img/takahe-animation/animation07.jpg",
				"/assets/img/takahe-animation/animation08.jpg",
				"/assets/img/takahe-animation/animation09.jpg",
				"/assets/img/takahe-animation/animation10.jpg",
				"/assets/img/takahe-animation/animation11.jpg",
				"/assets/img/takahe-animation/animation12.jpg",
				"/assets/img/takahe-animation/animation13.jpg",
				"/assets/img/takahe-animation/animation14.jpg",
				"/assets/img/takahe-animation/animation15.jpg",
				"/assets/img/takahe-animation/animation16.jpg",
				"/assets/img/takahe-animation/animation17.jpg",
				"/assets/img/takahe-animation/animation18.jpg",
				"/assets/img/takahe-animation/animation19.jpg",
				"/assets/img/takahe-animation/animation20.jpg",
				"/assets/img/takahe-animation/animation21.jpg",
				"/assets/img/takahe-animation/animation22.jpg",
				"/assets/img/takahe-animation/animation23.jpg",
				"/assets/img/takahe-animation/animation24.jpg",
				"/assets/img/takahe-animation/animation25.jpg",

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

    }); // End of Logo Animation Sequence

		// build a scene 1
	var ourScene01 = new ScrollMagic.Scene({
		triggerElement: '#rediscover',
		triggerHook: 0.7
	})
	.setClassToggle('#rediscover', 'fade-in') // add class to project01
	//.addIndicators({

	//}) // this requires a plugin
	.addTo(controller);

	// build a scene 2
var ourScene02 = new ScrollMagic.Scene({
	triggerElement: '#table-one',
	triggerHook: 0.5
})
.setClassToggle('#table-one', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene 3
var ourScene03 = new ScrollMagic.Scene({
triggerElement: '#futilewings',
triggerHook: 0.7
})
.setClassToggle('#futilewings', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene 4
var ourScene04 = new ScrollMagic.Scene({
triggerElement: '#takaheprofile',
triggerHook: 0.7
})
.setClassToggle('#takaheprofile', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene 4
var ourScene04 = new ScrollMagic.Scene({
triggerElement: '#block-one',
triggerHook: 0.7
})
.setClassToggle('#block-one', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene 5
var ourScene05 = new ScrollMagic.Scene({
triggerElement: '#vanished',
triggerHook: 0.7
})
.setClassToggle('#vanished', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene 6
var ourScene06 = new ScrollMagic.Scene({
triggerElement: '#parallax-one',
triggerHook: 0.3,
duration: 200
})
.setClassToggle('#parabox-one', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene 7
var ourScene07 = new ScrollMagic.Scene({
triggerElement: '#parallax-two',
triggerHook: 0.3,
duration: 200
})
.setClassToggle('#parabox-two', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene 8
var ourScene08 = new ScrollMagic.Scene({
triggerElement: '#thirtyyear',
triggerHook: 0.7
})
.setClassToggle('#thirtyyear', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene 9
var ourScene09 = new ScrollMagic.Scene({
triggerElement: '#parallax-three',
triggerHook: 0.5,
duration: 300
})
.setClassToggle('#parabox-three', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene 10
var ourScene10 = new ScrollMagic.Scene({
triggerElement: '#newzealandmap',
triggerHook: 0.7
})
.setClassToggle('#newzealandmap', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene 11
var ourScene11 = new ScrollMagic.Scene({
triggerElement: '#severewinters',
triggerHook: 0.7
})
.setClassToggle('#severewinters', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene 12
var ourScene12 = new ScrollMagic.Scene({
triggerElement: '#parallax-four',
triggerHook: 0.3,
duration: 200
})
.setClassToggle('#parabox-four', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene 13
var ourScene13 = new ScrollMagic.Scene({
triggerElement: '#newzealand',
triggerHook: 0.7
})
.setClassToggle('#newzealand', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene 14
var ourScene14 = new ScrollMagic.Scene({
triggerElement: '#table-two',
triggerHook: 1
})
.setClassToggle('#table-two', 'slide-left') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);









});
