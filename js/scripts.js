jQuery(document).ready(function($) { "use strict";

new WOW().init();
// Small Screen
if ( $(window).width() > 768) {  
    $(document).ready(function() {
        $(".wow").removeClass("wow");
    });
}

$('#my-video').backgroundVideo({
    $videoWrap: $('#video-wrap'),
    $outerWrap: $('#outer-wrap'),
    preventContextMenu: true,
    pauseVideoOnViewLoss: false,
    parallaxOptions: {
        effect: 1.7
    }
});
                        
});