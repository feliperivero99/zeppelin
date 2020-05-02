jQuery(document).ready(function($) { "use strict";

$('.stickyfollow')
.on('sticky_kit:bottom', function(e) {
    $(this).parent().css('position', 'static');
})
.on('sticky_kit:unbottom', function(e) {
    $(this).parent().css('position', 'relative');
})

$(".stickyfollow").stick_in_parent({
        parent: '#content-2'
    });

});
