/*
 *
CUSTOM JS FOR LANDING PAGE
 *
 */


$('body').mouseleave(function () {
    $('#rhino-song').prop('volume', 0.5).trigger('play');
}).mouseenter(function () {
    $('#rhino-song').trigger('pause');
});


