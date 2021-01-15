$(document).ready(function(){

$(".fa.fa-home").click(function(){
  $(this).toggleClass('fa-times');
  $(".header-menu").toggle('active');
});

});
