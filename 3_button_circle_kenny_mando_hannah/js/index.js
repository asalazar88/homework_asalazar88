$('#showCircle').click(function(){
   $('#puppy').show();
});

$('#hideCircle').click(function(){
   $('#puppy').hide();
});

$('#slideUpCircle').click(function(){
   $('#puppy').slideUp();
});

$('#slideDownCircle').click(function(){
   $('#puppy').slideDown();
});

$('#fadePuppy').click(function(){
   $('#puppy').fadeOut();
});

$('#animateRight').click(function(){
	$('#puppy').animate({
    marginLeft: "10%"
}, 500);
});

$('#animateLeft').click(function(){
$('#puppy').animate({
    marginLeft: "90%"
}, 500);
});


/*
$('#circle').animate({
    marginLeft: "10%"
}, 500);
*/

/*
 if(show) {
        $('#circle').hide();
        show = false;
    } else {
        $('#circle').show();
        show = true;
    }
*/