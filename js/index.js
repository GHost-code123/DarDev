$
// abdelkrim part;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

$(document).ready(function () {
    $('.more-info-btn').click(function (e) {
        e.preventDefault();
        var target = $(this).data('target');
        $(target).toggle();
        $(this).text($(this).text() === 'More Info' ? 'Less Info' : 'More Info');
    });
});