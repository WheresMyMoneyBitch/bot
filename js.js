$(document).ready(function () {

    $('#form').submit(function () {
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: 'tg.php',
            data: $form.serialize(),
            cache: false,
            success: function (data) {
                if (data = 'sent') {
                    alert('Спасибо, Ваша заявка отправлена!')
                } else {
                    alert('Ошибка: ' + data);
                }
            },
            error: function (xhr) {
                console.log('error!', xhr);
            }
        });
        return false;
    });

});