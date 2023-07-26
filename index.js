

let accOpen=null

$(".container").on("click", ".question, .arrow", function() {
    if (this==accOpen){
        $(".answer").hide()
        $(".arrow").removeClass("arrow-exp")
        $(this).removeClass("bold")
        accOpen=null
    }
    else {

    $(".question").removeClass("bold")
    $(this).toggleClass("bold")
    $(".answer").hide()
    $(".arrow").removeClass("arrow-exp")

    $(this).next(".answer").show()

    $(this).find(".arrow").addClass("arrow-exp")

    accOpen=this

    }
    
   
    
});

