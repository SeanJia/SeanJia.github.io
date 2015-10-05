
/* for scroll spying of navbar */
$(document).ready(function(){
    $("body").scrollspy({target: "#navbar", offset: 100});
});

/* for sticky navbar on the top */
$(document).ready(function() {
    var navbar = $("#navbar");
    var theTop = navbar.offset().top;
    function scroll() {
        if ($(window).scrollTop() >= theTop) {
            $("#navbar").addClass("navbar-fixed-top");
            $("#fixed-top").addClass("navbar-padding");
            $("#nav-right").addClass("navbar-right-margin");
        } else {
            $("#navbar").removeClass("navbar-fixed-top");
            $("#fixed-top").removeClass("navbar-padding");
            $("#nav-right").removeClass("navbar-right-margin")
        }
    }
    document.onscroll = scroll;
});



