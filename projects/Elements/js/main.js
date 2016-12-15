$(document).ready(function(){

  // hide our element on page load
  $('#element-info').css('opacity', 0);

  $('#element-info').waypoint(function() {
      $('#element-info').addClass('fadeInUp');
  }, { offset: '50%' });
 
});
