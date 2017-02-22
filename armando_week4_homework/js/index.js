$('#jumboButton').click(function(){
   $('#about').hide();
});

$('#jumboButton').click(function(){
   $('#secondAbout').hide();
});

$('#jumboButton').click(function(){
   $('#thirdAbout').hide();
});

$('#heading1').click(function(){
   $('#about').slideDown();	
});


$('#heading2').click(function(){
   $('#secondAbout').slideDown();	
});


$('#heading3').click(function(){
   $('#thirdAbout').slideDown();	
});

$(function(){
    console.log("page loaded");
    
    $('#heading1').click(function(){
        console.log("heading1 clicked");
    });
});
console.log("file loaded");