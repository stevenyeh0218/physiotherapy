    //選擇時段-盡量多做
    $('input[data-level="parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');
        if (checked) {
            $this.closest(".overflow").find('input[data-level="child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });
        } else {
            $this.closest(".overflow").find('input[data-level="child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
        }
    });

    //選擇時段-其他時段
    $('input[data-level="child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".overflow").find('input[data-level="child"]:checked').length == $this.closest(".overflow").find('input[data-level="child"]').length) {
            $(this).closest(".overflow").find('input[data-level="parent"]').prop('checked', true);
        } else {
            $(this).closest(".overflow").find('input[data-level="parent"]').prop('checked', false);
        }
    });