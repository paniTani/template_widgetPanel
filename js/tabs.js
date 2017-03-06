$(function()  {
  
    $(".tab-panels .tabs li").on("click", function(){
        var panel = $(this).closest(".tab-panels");

        //figure out which panel ti show
        panel.find(".tabs li").removeClass("active");
        $(this).addClass("active");
        var panelToShow = $(this).attr("rel");

        //hide current panel
        panel.find(".panel.active").slideUp(300, showNextPanel);

        //show next panel
        function showNextPanel(){
            $(this).removeClass("active");
            $("#"+panelToShow).slideDown(300, function(){
                $(this).addClass("active");
            });
        }
        //show new panel
    });
});