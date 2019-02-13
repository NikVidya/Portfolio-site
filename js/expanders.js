$(document).ready(() => {
    //initial conditions
    $(".expandable").hide();
    $(".content-row").find("img").css({"width": "50%", "max-height": "180", "margin": "1.1rem 25% 1.1rem 25%"});
    $(".content-row").find(".video-container").css({"height": "230px", "padding": "1.1rem 25% 1.1rem 25%"});
    $(".content > .content-row").append('<button class="expand-button"><i class="fas fa-angle-down"></i></button>');
    function expand() {
        console.log("expanded");
        $(this).parent().find("img").animate({"width": "90%", "max-height": "360px", "margin": "1.1rem 5% 1.1rem 5%"});
        $(this).parent().find(".video-container").animate({"height": "347px", "padding": "1.1rem 5% 1.1rem 5%"});
        $(this).html('<i class="fas fa-angle-up"></i>');
        $(this).parent().find(".expandable").slideToggle();
        $(this).off("click").on("click", contract);
    }
    function contract() {
        console.log("contracted");
        $(this).parent().find("img").animate({"width": "50%", "max-height": "180", "margin": "1.1rem 25% 1.1rem 25%"});
        $(this).parent().find(".video-container").animate({"height": "230px", "padding": "1.1rem 25% 1.1rem 25%"});
        $(this).html('<i class="fas fa-angle-down"></i>');
        $(this).parent().find(".expandable").slideToggle();
        $(this).off("click").on("click", expand);
    }
    $(".expand-button").click(expand);
});