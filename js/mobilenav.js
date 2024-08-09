$('#sidebar').find('.open-mobile-nav-btn').click(function(){
    if($(this).find('.icon').hasClass('micon-nav')){
        $(this).find('.icon').removeClass('micon-nav').addClass('micon-close');
        $(this).css({ background:"transparent",top: "16px", left:"auto" , right:"16px" })
        $('#sidebar').css({left:"0",right:"0"});
    }else{
        $(this).find('.icon').removeClass('micon-close').addClass('micon-nav');
        $(this).removeAttr('style');
        $('#sidebar').removeAttr('style');
    }
});