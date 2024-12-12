//Changing the avatar image to emoji on mail button hover
$(document).ready(function() { 
    $(".mail-button").hover(function() { 
        $("div img")
        .fadeOut(100, function() {
            $("div img").attr("src", "images/avatar_b.png");
        })
        .fadeIn(100);
    }, function() { 
        $("div img")
        .fadeOut(100, function() {
            $("div img").attr("src", "images/avatar_a.png");
        })
        .fadeIn(100);
    }); 
});