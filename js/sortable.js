var sortable = new Sortable(document.querySelector('.sortable'), {
    draggable: '.item',
    handle: '.drag-handle',
    onChoose: function (event) {
        var target = event.item.querySelector('input');
        if (target) {
            target.disabled = true; // 禁用输入框的拖动
        }
    },
    onUnchoose: function (event) {
        var target = event.item.querySelector('input');
        if (target) {
            target.disabled = false; // 启用输入框的拖动
        }
    }
});