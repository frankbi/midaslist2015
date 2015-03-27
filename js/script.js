$(".clickToTop").click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, 420);
        return false;
});


var short_url = "http://onforb.es/1byq7s7";
var text = "Interactive look at the last 10 years of the @Forbes' Midas List: ";
var width  = 575,
    height = 400,
    left   = ($(window).width()  - width)  / 2,
    top    = ($(window).height() - height) / 2,
    opts   = 'status=1' +
         ',width='  + width  +
         ',height=' + height +
         ',top='    + top    +
         ',left='   + left;


$("i.fa-twitter").bind('click', function() {
    window.open("https://www.twitter.com/share?text=" + text + "&url=" + short_url, '_blank', opts);
})
$("i.fa-facebook").bind('click', function() {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + short_url, '_blank', opts);
})