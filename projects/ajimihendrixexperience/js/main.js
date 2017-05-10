$(document).ready(function(){


     // Init ScrollMagic
	var controller = new ScrollMagic.Controller({vertical:false});

	// build a scene
	var HideArrow01 = new ScrollMagic.Scene({
		triggerElement: '#aboutSection',
		duration: '75%',
		triggerHook: 0.5
	})
	.setClassToggle('.fp-controlArrow.fp-prev', 'arrowHidden') // add class to project01
//.addIndicators({
	//name: 'Hide Arrow scene',
  //indent:100,
	//colorTrigger: 'black',
	//colorStart: '#75C695',
	//colorEnd: 'pink',
//	}) // this requires a plugin
	.addTo(controller);

	// build a scene
	var ShowIconMenu = new ScrollMagic.Scene({
		triggerElement: '#home',
    duration:'100%',
		triggerHook: 0.5
	})
	.setClassToggle('.iconNavigation', 'iconNavHide')
//.addIndicators({
	//name: 'Hide Nav scene',
	//indent:100,
	//colorTrigger: 'black',
	//colorStart: '#75C695',
	//colorEnd: 'pink',
	//}) // this requires a plugin
	.addTo(controller);

  // build a scene
	var ShowIconMenu02 = new ScrollMagic.Scene({
		triggerElement: '#guitarslide01',
		triggerHook: 'onEnter'
	})
	.setClassToggle('.iconNavigation', 'iconNavHide')
//.addIndicators({
	//name: 'Hide Nav scene',
	//indent:100,
	//colorTrigger: 'black',
	//colorStart: '#75C695',
	//colorEnd: 'pink',
	//}) // this requires a plugin
	.addTo(controller);


});
