// JavaScript Document

//How to Push Parent element to the height of absolute positioned div

$(function() {
    $('#sameheight li').hover(function() {
       $('div.child', this).show();
        var biggestHeight = $('div.child', this).height();
        if($(this).height() < biggestHeight) {
             $(this).parent().height(biggestHeight+$('div.child', this).offset().top);
         } else {
             $(this).parent().css('height', 'auto');   
         }
    }, function() {
       $('div.child', this).hide();  
        $(this).parent().css('height', 'auto');
    }); 
    
});