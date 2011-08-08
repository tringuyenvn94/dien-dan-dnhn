
$(document).ready(function() {
   $(".tieude a").attr( "href", "detail.html"  ) ;
   $(".list_doc a").attr( "href", "detail.html"  ) ;
   
   $(".topmenu a").attr( "href", "cat.html") ;
   $(".topmenu .menu3").attr( "href", "cat2.html") ;
   
   
   $(".topmenu .active a").attr( "href", "index.html"  ) ;
   
 });
 
 $('marquee .chayngang').marquee('pointer').mouseover(function () {
      $(this).trigger('stop');
    }).mouseout(function () {
      $(this).trigger('start');
    }).mousemove(function (event) {
      if ($(this).data('drag') == true) {
        this.scrollLeft = $(this).data('scrollX') + ($(this).data('x') - event.clientX);
      }
    }).mousedown(function (event) {
      $(this).data('drag', true).data('x', event.clientX).data('scrollX', this.scrollLeft);
    }).mouseup(function () {
      $(this).data('drag', false);
});