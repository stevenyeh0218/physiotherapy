$('.counter').on('click',function(){
    $(this).closest('.reminder').toggleClass('reminder-open');
});

$(document).on('click', function(e) {
    var container = $(".reminder");
    if (!$(e.target).closest(container).length) {
        container.removeClass('reminder-open');
    }
});