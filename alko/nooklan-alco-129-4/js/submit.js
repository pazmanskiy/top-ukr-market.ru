$(function() {
    $("form").submit(function() {
        $("form button").attr("disabled", 'disabled');
        $("form button").text("Отправка данных...");
    });
});
