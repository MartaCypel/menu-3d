$(".btn-see-menu").bind('click', function(){

    $(".left-page").addClass("left-page2");
    
    setTimeout(function(){
        
        $(".right-page").addClass("right-page2");
    
    },800);
});

$(".btn-close-menu").bind('click', function(){

    $(".right-page").removeClass("right-page2");
    
    setTimeout(function(){
        
        $(".left-page").removeClass("left-page2");
    
    },800);
});




