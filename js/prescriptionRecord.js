$('.record-more-btn').on('click',function(){
    $(this).toggleClass('micon-close');

    if($(this).hasClass('micon-close')){
        $('.more-list').addClass('more-list-open');
    }else{
        $('.more-list').removeClass('more-list-open');
    }
});