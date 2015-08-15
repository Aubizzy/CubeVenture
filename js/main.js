$(function() {
    'use strict';
    var $artistSlider = $('#artistSlider');
    var $artistContent = $('#artistContent');
    var $artistSliderItem = $('.artist-slider-item');
        
    function loadArtistDetails(event) {
        // We will be in the context of the currently click item so we can
        // extract the data-url
        var dataUrl = $(this).attr('data-url');
        var url = ["artists", dataUrl + ".html"].join("/");
        return  $.get(url)
         .success(function(data) {
            $artistContent.html(data);
         })
         .fail(function() {
            $artistContent.html('Failed to load artist page');
         });
    }
    
    $artistSliderItem.on('click', loadArtistDetails);
});