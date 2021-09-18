jQuery(document).ready(function ($) {
    $(".p-tab").click(function(){
        var toBeActiveButton = $(this);
        $(".p-tab").removeClass("ng-active");
        $(".tab-block").removeClass("tab-active").eq(toBeActiveButton.index()).addClass("tab-active");
        toBeActiveButton.addClass("ng-active");
    });
});