$(document).ready(function(){
    $(".top_links").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    jQuery('.toggle-nav').click(function(e) {
        jQuery('ul.top_links').toggle("slow");
        e.preventDefault();
    });


});
$(function() {
    $(document.body).on('appear', '.scrl', function(e, $affected) {
        $(this).addClass("appeared");
    });
    $('.scrl').appear({force_process: true});
});
