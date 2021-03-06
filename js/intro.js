$(document).ready(function() {
    //initial conditions
    $("header").hide();
    $("header").css("height", "0px");
    $("header > *").hide();

    $(".content").css("width", "0px");
    $(".content").css("overflow", "hidden");
    $(".content > *").hide();

    $("footer").hide();
    $("footer").css("height", "0px");
    $("footer > *").hide();

    //animate
    $("header").delay(300).fadeToggle(100).delay(200).animate({ height: "95px" }, "swing", function() {
        $("header > *").fadeToggle(400);
    });
    $("footer").delay(300).fadeToggle(100).delay(200).animate({ height: "85px" }, "swing", function() {
        $("footer > *").fadeToggle(400);
        $(".content").animate({ width: "60%" }, function() {
            $(".content > .section-header").slideToggle(200, function() {
                $(".content > .content-row").delay(300).slideToggle(600, "swing");
            });
        });
    });
});