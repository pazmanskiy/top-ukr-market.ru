function rus_date() {
    var d = new Date();
    var month = 'январе феврале марте апреле мае июне июле августе сентябре октябре ноябре декабре'.split(' ')[d.getMonth()];
    document.write(month);
};

function rus_date2() {
    var d = new Date();
    var month = 'январь февраль март апрель май июнь июль август сентябрь октябрь ноябрь декабрь'.split(' ')[d.getMonth()];
    document.write(month);
};
