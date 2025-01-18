
$(document).ready(function () {
    $('.more-info-btn').click(function (e) {
        e.preventDefault();
        var target = $(this).data('target');
        $(target).toggle();
        $(this).text($(this).text() === 'More Info' ? 'Less Info' : 'More Info');
    });
});

$(document).ready(function () {
    $('.light').hover(
        function () {

            $(this).css({
                'border': '2px dashed transparent',
                'box-shadow': '0 0 222px rgb(17, 0, 255), 0 0 100px rgb(0, 4, 255)',
                'transform': 'translateY(55px) rotate(1deg)',


            });
        },
        function () {
            $(this).css({
                'border': '0px solid #ddd',
                'box-shadow': '0 0 100px rgba(21, 0, 255, 0.59), 0 0 100px rgba(0, 4, 255, 0.54)',
                'transform': 'rotate(0deg)'
            });
        }
    );
});
