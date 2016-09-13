$(function() {
    if (-1 < location.host.indexOf("local") || -1 < location.host.indexOf("192.168")) {
        $("body").append('<div id="localdesuka"><span class="close">X</span><p>localhost</p></div>');
        $("#localdesuka .close").on("click", function() {
            $("#localdesuka").animate({ height: 0 }, {
                duration: 200,
                easing: "swing",
                complete: function() {
                    $("#localdesuka").remove();
                }
            })
        })
    }
});
