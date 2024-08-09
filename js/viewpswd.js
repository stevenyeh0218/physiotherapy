$('.login-form').find('#icon-pswd').click(function(){
    if($(this).hasClass('micon-eye-open')){
        $(this).removeClass('micon-eye-open').addClass('micon-eye-close');
        $(".pswd-input").attr("type", "password");
    }else{
        $(this).removeClass('micon-eye-close').addClass('micon-eye-open');
        $(".pswd-input").attr("type", "text");
    }
});

$('.login-form').find('#icon-again-pswd').click(function () {
    if ($(this).hasClass('micon-eye-open')) {
        $(this).removeClass('micon-eye-open').addClass('micon-eye-close');
        $(".again-pswd-input").attr("type", "password");
    } else {
        $(this).removeClass('micon-eye-close').addClass('micon-eye-open');
        $(".again-pswd-input").attr("type", "text");
    }
});

