// 進階搜尋按鈕下拉清單事件舊版
$('.advanced-filter-btn').on('click',function(){
    $(this).toggleClass('open-table');
    $('.select-module-btn').removeClass('open-select-table');
});

$('.advanced-filter-table').on('click','.advanced-filter-item',function(){
    $(this).addClass('drop').siblings().removeClass('drop');
    $('.advanced-filter-table').addClass('tableH');
});

$('.advanced-filter-table').on('click','.close-btn , .advanced-search-btn',function(){
    $('.advanced-filter-btn').removeClass('open-table');
    $('.advanced-filter-item').removeClass('drop');
    $('.advanced-filter-table').removeClass('tableH');
});

//選擇結果
$('input[data-level="filter"]').click(function() {
    var $this = $(this);
    var checked = $this.is(':checked');
    if (checked) {
        var html = "<div class='filter-result-item' data-val='" + $(this).val() + "' data-level='filter_condition'>" + $(this).val() + "<i class='micon-close filter-clear'></i>" + "</div>";
        $(".filter-result-list").prepend(html);
    } else {
        $('.filter-result-item:contains(' + $(this).val() + ')').remove();
    }
});

 //篩選條件清除
 $('.filter-result-list').on('click', '.filter-clear', function() {
    var $this = $(this).parent();
    var oldValue = $this.data("val");

    $this.remove();
    $("input[type=checkbox][data-level='filter']").each(function() {
        if ($(this).val() == oldValue) {
            $(this).prop("checked", false);
        }
    });
});

//資料查詢
$('.data-search-btn').on('click',function(){
    $(this).toggleClass('open-data-table');
    $('.select-module-btn').removeClass('open-select-table');
    $('.filter-table').find('.item').removeClass('drop');
    $('.filter-list-result').removeClass('drop');

    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      }
      
      function isResponsive() {
        return $(window).width() <= 480; // 調整此處的值以符合您的 RWD 斷點
      }
      
      if (isMobileDevice()) {
        // 手機裝置
        
        if (isResponsive()) {
          // 手機裝置且符合 RWD 斷點
          $('.form-content > .panel').css("overflow-y","hidden");
          $('html,body').css("overflow-y","hidden");
        } else {
          // 手機裝置但不符合 RWD 斷點
          $('.form-content > .panel').removeAttr("style");
          $('html,body').removeAttr("style");
        }
      } else {
        // 非手機裝置
        
        if (isResponsive()) {
          // 非手機裝置但符合 RWD 斷點
          $('.form-content > .panel').css("overflow-y","hidden");
        } else {
          // 非手機裝置且不符合 RWD 斷點
          $('.form-content > .panel').removeAttr("style");
          $('html,body').removeAttr("style");
        }
      }
});

$('.data-search-table').on('click','.close-btn, .data-search-btn',function(){
    $('.data-search-btn').removeClass('open-data-table');
    $('.filter-table').find('.item').removeClass('drop');
    $('.filter-list-result').removeClass('drop');

    $('.form-content > .panel').removeAttr("style");
    $('html,body').removeAttr("style");
});

$('.filter-table').on('click','.item',function(){
    $(this).toggleClass('drop').siblings().removeClass('drop');
    $('.filter-list-result').toggleClass('drop');
});


//選擇套組
$('.select-module-btn').on('click',function(){
    $(this).toggleClass('open-select-table');
    $('.advanced-filter-btn').removeClass('open-table');
    $('.data-search-btn').removeClass('open-data-table');

    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      }
      
      function isResponsive() {
        return $(window).width() <= 480; // 調整此處的值以符合您的 RWD 斷點
      }
      
      if (isMobileDevice()) {
        // 手機裝置
        
        if (isResponsive()) {
          // 手機裝置且符合 RWD 斷點
          $('.form-content > .panel').css("overflow-y","hidden");
          $('html,body').css("overflow-y","hidden");
        } else {
          // 手機裝置但不符合 RWD 斷點
          $('.form-content > .panel').removeAttr("style");
          $('html,body').removeAttr("style");
        }
      } else {
        // 非手機裝置
        
        if (isResponsive()) {
          // 非手機裝置但符合 RWD 斷點
          $('.form-content > .panel').css("overflow-y","hidden");
        } else {
          // 非手機裝置且不符合 RWD 斷點
          $('.form-content > .panel').removeAttr("style");
          $('html,body').removeAttr("style");
        }
      }
    
});

$('.select-module-table').on('click','.close-btn, .select-module-btn',function(){
    $('.select-module-btn').removeClass('open-select-table');

    $('.form-content > .panel').removeAttr("style");
    $('html,body').removeAttr("style");
});


$('.select-module-table').on('click','.info-btn2',function(){

    $(this).addClass('open-info-table');

    var container = $('.select-module-table').find('.overflow');
    var scrollTo = $('#point_public_id');
    var position = scrollTo.offset().top  - container.offset().top + container.scrollTop();
    
    container.animate({
	 	scrollTop: position
	 });

});

$('.module-popup-table').on('click','.close-module-info-btn',function(){
    $('.info-btn2').removeClass('open-info-table');

});

//操作日誌-資料篩選
$('.data-filter-bar').on('click','.data-filter-btn',function(){
    $(this).closest('.data-filter-bar').addClass('open-data-filter-table');
});
$('.data-filter-bar').on('click','.close-btn',function(){
    $(this).closest('.data-filter-bar').removeClass('open-data-filter-table');
});