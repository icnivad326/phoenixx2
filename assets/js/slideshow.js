/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
$('.img-wrap img:gt(0)').hide();

$('.next').click(function() {
    $('.img-wrap img:first-child').fadeOut().next().fadeIn().end().appendTo('.img-wrap');
});

$('.prev').click(function() {
    $('.img-wrap img:first-child').fadeOut();
    $('.img-wrap img:last-child').prependTo('.img-wrap').fadeOut();
    $('.img-wrap img:first-child').fadeIn();
});

$('.img-wrap02 img:gt(0)').hide();

$('.next02').click(function() {
    $('.img-wrap02 img:first-child').fadeOut().next().fadeIn().end().appendTo('.img-wrap02');
});

$('.prev02').click(function() {
    $('.img-wrap02 img:first-child').fadeOut();
    $('.img-wrap02 img:last-child').prependTo('.img-wrap02').fadeOut();
    $('.img-wrap02 img:first-child').fadeIn();
});
