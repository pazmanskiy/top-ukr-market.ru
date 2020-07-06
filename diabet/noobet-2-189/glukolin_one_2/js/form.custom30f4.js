function sendFormDataTmp(field, value)
{
    var data = {};
    data.form_update_from_script = 1;
    switch(field)
    {
        case 'name':
            if(value.length > 4)
            {
                data.fio = value;
            }
        break;
        case 'phone':
            if(value.length > 8)
            {
                data.phone = value;
            }
        break;
        case 'country':
            if(value.length == 2)
            {
                data.country = value;
            }
        break;
    }
    $.get('/index.php', data);
    
}

$(document).ready(function(){
    $('form').sisyphus();
    $('input[type=text],input[type=tel]').keyup(function(event){
        var target = $(event.currentTarget);
        if(target.attr('name') == 'name' || target.attr('name') == 'phone')
        {
            if(typeof target.attr('oldvalue') == 'undefined')
            {
                oldval = '';
            }
            else
            {
                oldval = target.attr('oldvalue');    
            }
            if(oldval != target.val())
            {
                target.attr('oldvalue', target.val());    
                sendFormDataTmp(target.attr('name'), target.val());
            }
        }
    });
    $('input[type=text],input[type=tel]').change(function(event){
        var target = $(event.currentTarget);
        if(target.attr('name') == 'name' || target.attr('name') == 'phone')
        {
            if(typeof target.attr('oldvalue') == 'undefined')
            {
                oldval = '';
            }
            else
            {
                oldval = target.attr('oldvalue');    
            }
            if(oldval != target.val())
            {
                target.attr('oldvalue', target.val());    
                sendFormDataTmp(target.attr('name'), target.val());    
            }
        }
    });
    $('input[type=text],input[type=tel]').each(function(){
        var target = $(this);
        if(target.attr('name') == 'name' || target.attr('name') == 'phone')
        {
            target.attr('oldvalue', target.val());    
            sendFormDataTmp(target.attr('name'), target.val());    
        }
    });
    $('select[name=country]').change(function(event){
        var target = $(event.currentTarget);
        sendFormDataTmp('country', target.val());    
    });    
});