// 選擇領健預約按鈕 點擊事件
$('.app-appointment-detail-data-popupwindow').on('click','.select-btn',function(){
    $(this).addClass('disable-btn-bg');
    $('.app-appointment-detail-data-popupwindow').find('.table').addClass('expand');
    $('.app-appointment-detail-data-popupwindow').find('.line').removeClass('disapear');
    $('.app-appointment-detail-data-popupwindow').find('.sync-list').removeClass('disapear');
});

// 預約確認按鈕 點擊事件
$('.app-appointment-detail-data-popupwindow').on('click','.confirm-btn',function(){
    $('.app-appointment-detail-data-popupwindow').find('.select-btn').removeClass('disable-btn-bg');
    $('.app-appointment-detail-data-popupwindow').find('.table').removeClass('expand');
    $('.app-appointment-detail-data-popupwindow').find('.line').addClass('disapear');
    $('.app-appointment-detail-data-popupwindow').find('.sync-list').addClass('disapear');
});