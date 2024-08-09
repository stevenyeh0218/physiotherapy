/* PT 選單 */
$('.pt-nav-btn').click(function() {
    if($(this).hasClass('close')){
        $('.pt-item').show();
        $(this).removeClass('close');
        $(this).find('.icon').removeClass('micon-scale-up').addClass('micon-scale-down');
    }else{
        $('.pt-item').hide();
        $(this).addClass('close');
        $(this).find('.icon').removeClass('micon-scale-down').addClass('micon-scale-up');
    }
});

/* 動作庫 選單 */
$('.action-nav-btn').click(function() {
    if($(this).hasClass('close')){
        $('.action-item').show();
        $(this).removeClass('close');
        $(this).find('.icon').removeClass('micon-scale-up').addClass('micon-scale-down');
    }else{
        $('.action-item').hide();
        $(this).addClass('close');
        $(this).find('.icon').removeClass('micon-scale-down').addClass('micon-scale-up');
    }
});

/* 參數管理 選單 */
$('.parameter-nav-btn').click(function() {
    if($(this).hasClass('close')){
        $('.parameter-item').show();
        $(this).removeClass('close');
        $(this).find('.icon').removeClass('micon-scale-up').addClass('micon-scale-down');
    }else{
        $('.parameter-item').hide();
        $(this).addClass('close');
        $(this).find('.icon').removeClass('micon-scale-down').addClass('micon-scale-up');
    }
});

/* 營運管理 選單 */
$('.memeber-nav-btn').click(function() {
    if($(this).hasClass('close')){
        $('.memeber-item').show();
        $(this).removeClass('close');
        $(this).find('.icon').removeClass('micon-scale-up').addClass('micon-scale-down');
    }else{
        $('.memeber-item').hide();
        $(this).addClass('close');
        $(this).find('.icon').removeClass('micon-scale-down').addClass('micon-scale-up');
    }
});

/* 問卷管理 選單 */
$('.question-nav-btn').click(function() {
    if($(this).hasClass('close')){
        $('.question-item').show();
        $(this).removeClass('close');
        $(this).find('.icon').removeClass('micon-scale-up').addClass('micon-scale-down');
    }else{
        $('.question-item').hide();
        $(this).addClass('close');
        $(this).find('.icon').removeClass('micon-scale-down').addClass('micon-scale-up');
    }
});

/* 帳號權限 選單 */
$('.account-nav-btn').click(function() {
    if($(this).hasClass('close')){
        $('.account-item').show();
        $(this).removeClass('close');
        $(this).find('.icon').removeClass('micon-scale-up').addClass('micon-scale-down');
    }else{
        $('.account-item').hide();
        $(this).addClass('close');
        $(this).find('.icon').removeClass('micon-scale-down').addClass('micon-scale-up');
    }
});