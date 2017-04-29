$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();


// =========================================
// Image Sequence Animation
// =========================================

            // define images
	var images = [
				"/assets/img/hand-animation/animation00.png",
				"/assets/img/hand-animation/animation01.png",
				"/assets/img/hand-animation/animation02.png",
				"/assets/img/hand-animation/animation03.png",
        "/assets/img/hand-animation/animation04.png",
        "/assets/img/hand-animation/animation05.png",
        "/assets/img/hand-animation/animation06.png",
        "/assets/img/hand-animation/animation07.png",
				"/assets/img/hand-animation/animation08.png",
				"/assets/img/hand-animation/animation09.png",
				"/assets/img/hand-animation/animation10.png",
				"/assets/img/hand-animation/animation11.png",
				"/assets/img/hand-animation/animation12.png",
				"/assets/img/hand-animation/animation13.png",
				"/assets/img/hand-animation/animation14.png",
				"/assets/img/hand-animation/animation15.png",
				"/assets/img/hand-animation/animation16.png",
				"/assets/img/hand-animation/animation17.png",
				"/assets/img/hand-animation/animation18.png",
				"/assets/img/hand-animation/animation19.png",
				"/assets/img/hand-animation/animation20.png",
				"/assets/img/hand-animation/animation21.png",
				"/assets/img/hand-animation/animation22.png",
				"/assets/img/hand-animation/animation23.png",
				"/assets/img/hand-animation/animation24.png",
				"/assets/img/hand-animation/animation25.png",
				"/assets/img/hand-animation/animation26.png",
				"/assets/img/hand-animation/animation27.png",
				"/assets/img/hand-animation/animation28.png",
				"/assets/img/hand-animation/animation29.png",
				"/assets/img/hand-animation/animation30.png",
				"/assets/img/hand-animation/animation31.png",
				"/assets/img/hand-animation/animation32.png",
				"/assets/img/hand-animation/animation33.png",
				"/assets/img/hand-animation/animation34.png",
				"/assets/img/hand-animation/animation35.png",
				"/assets/img/hand-animation/animation36.png",
				"/assets/img/hand-animation/animation37.png",
				"/assets/img/hand-animation/animation38.png",
				"/assets/img/hand-animation/animation39.png",
				"/assets/img/hand-animation/animation40.png",
				"/assets/img/hand-animation/animation41.png",
				"/assets/img/hand-animation/animation42.png",
				"/assets/img/hand-animation/animation43.png"

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

// Scene 1 - fade in text


	// Init ScrollMagic
		var controller = new ScrollMagic.Controller();

		// loop through each .project element
		$('.homeclientlogo').each(function(){

			// build a scene
			var homeClientFadeLeft = new ScrollMagic.Scene({
				triggerElement: this.children[0],
				triggerHook: 0.5
			})
			.setClassToggle(this, 'fade-in-left') // add class to project01

			.addTo(controller);

		// build a scene
	var ourScene12 = new ScrollMagic.Scene({
		triggerElement: '#worksectionearl',
		triggerHook: 0.9
	})
	.setClassToggle('#worksectionearl', 'fade-up') // add class to project01
//	.addIndicators({
//	}) // this requires a plugin
	.addTo(controller);

	// build a scene
var ourScene13 = new ScrollMagic.Scene({
	triggerElement: '#about-text-one',
	triggerHook: 0.5,
	duration: 250
})
.setClassToggle('#about-text-one', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene
var ourScene13a = new ScrollMagic.Scene({
triggerElement: '#about-text-two',
triggerHook: 0.5,
duration: 250
})
.setClassToggle('#about-text-two', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene
var ourScene13c = new ScrollMagic.Scene({
triggerElement: '#about-text-three',
triggerHook: 0.5,
duration: 250
})
.setClassToggle('#about-text-three', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);


// build a scene
var ourScene14 = new ScrollMagic.Scene({
triggerElement: '#play',
triggerHook: 0.5
})
.setClassToggle('#play', 'background-fade') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);


// build a scene
var ourScene16 = new ScrollMagic.Scene({
triggerElement: '#play',
triggerHook: 0.3
})
.setClassToggle('.playbutton.button', 'playchange') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene
var ourScene16 = new ScrollMagic.Scene({
triggerElement: '#companies',
triggerHook: 0.2
})
.setClassToggle('#play', 'background-fade-out') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene
var ourScene17 = new ScrollMagic.Scene({
triggerElement: '#companies',
triggerHook: 0.5
})
.setClassToggle('.playbutton.button', 'fade-out') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);


// build a scene
var ourScene29 = new ScrollMagic.Scene({
triggerElement: '#work-abbey',
triggerHook: 0,
duration:'100%'
})
.setClassToggle('.menutext', 'color-change') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene
var ourScene30 = new ScrollMagic.Scene({
triggerElement: '#work-abbey',
triggerHook: 0,
duration:'100%'
})
.setClassToggle('.button_container span', 'color-change') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene
var ourScene31 = new ScrollMagic.Scene({
triggerElement: '#work-urban',
triggerHook: 0,
duration:'100%'
})
.setClassToggle('.menutext', 'color-change') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene
var ourScene32 = new ScrollMagic.Scene({
triggerElement: '#work-urban',
triggerHook: 0,
duration:'100%'
})
.setClassToggle('.button_container span', 'color-change') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene
var ourScene33 = new ScrollMagic.Scene({
triggerElement: '#work-earl',
triggerHook: 0,
duration:'100%'
})
.setClassToggle('.menutext', 'color-change-1') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene
var ourScene34 = new ScrollMagic.Scene({
triggerElement: '#work-earl',
triggerHook: 0,
duration:'100%'
})
.setClassToggle('.button_container span', 'color-change-1') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene
var ourScene35 = new ScrollMagic.Scene({
triggerElement: '#work-abbey-info',
triggerHook: 0.5,
duration:'100%'
})
.setClassToggle('.menutext', 'color-change') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene
var ourScene36 = new ScrollMagic.Scene({
triggerElement: '#work-abbey-info',
triggerHook: 0.5,
duration:'100%'
})
.setClassToggle('.button_container span', 'color-change') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

// build a scene
var ourScene37 = new ScrollMagic.Scene({
triggerElement: '#bell-rotary-img',
triggerHook: 0.5,
duration: 400
})
.setClassToggle('.para-info-box', 'fade-in') // add class to project01
//.addIndicators({

//}) // this requires a plugin
.addTo(controller);

});

	// End of $(document).ready(function()
	});



	$(window).load(function() {
	//$("#loading").delay(2000).fadeOut(500);
	$("#loading-center").click(function() {
	$("#loading").fadeOut(500);
	})
})
