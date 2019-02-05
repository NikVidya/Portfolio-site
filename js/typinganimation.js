$(document).ready(() => {
    //blinking cursor animation
    var ticking = true;
    function tick() {
        if (ticking) {
            $("#hovertext").delay(500).toggle(0, tick);
        } else {
            $("#hovertext").show();
        }
    }
    tick();
    //"type" out link on hover
    function typeLink(element) {
        var e = '<span id="typedText" width="0px" style="vertical-align:top; display:none; overflow:hidden; white-space:nowrap;">' + element.html() + '</span>';
        $("#hovertext").html(e);
        $("#typedText").animate({ width: "toggle" });
    }
    $("a").hover(function () {
        ticking = false;
        $("#hovertext").html("");
        $("#hovertext").show();
        $("#hovertext").css("display", "show");
        typeLink($(this), 0);
    },
        function () {
            ticking = true;
            tick();
            $("#hovertext").html("_");
        });
});