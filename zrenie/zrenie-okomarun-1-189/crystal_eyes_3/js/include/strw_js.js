jQuery(document).ready(function ($) {


    var country_data = {};
    country_data['UA'] = {
        currency: 'грн.',
        mask: '+38 (099) 999-99-99',
    };

    country_data['RU'] = {
        currency: 'руб.',
        mask: '7 (999) 999-99-99',
    };

    country_data['KZ'] = {
        currency: 'тенге',
        mask: '7 (999) 999-99-99',
    };
    country_data['AM'] = {
        currency: 'драм',
        mask: '+374 (99) 99-99-99',
    };


    function setCountryValues(cID) {
        $('.strw_price').text(country[cID].price);
        // $('.strw_old_price').text(country[cID].old_price);
        $('.strw_old_price').text('798');
        $('.strw_currency').text(country_data[cID].currency);
        // $("input[name='Order[phone]']").mask(country_data[cID].mask);
    }
    function setCountrySelectorValue(cID) {        
        $('select.country-selector').val(cID);    
    }    
        setCountrySelectorValue(code);

    setCountryValues(code);

    // check form submitted values
    $('form[action="getform.php"]').submit(function () {
        var name = $.trim($('input[name="Order[fio]"]', this).val());
        var phone = $.trim($('input[name="Order[phone]"]', this).val());

        if (!name) {
            alert('Укажите корректные ФИО!');
            return false;
        }

        if (!phone || phone.length < 7) {
            alert('Вам нужно указать корректный телефон!\nИначе мы не сможем связаться с Вами');
            return false;
        }
        return true;
    });

    // link fix
    $('a[href=#]').click(function (e) {
        e.preventDefault();
    });

    // animated scroll to section
    $('a[href*=#]:not([href=#])').click(function (e) {
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1200);
        e.preventDefault();
    });

    // Change currency, price and old_price if change country
    $("select.country-selector").change(function () {

        var country_code = $(this).val();

        // console.log("country_code = " + country_code);
        setCountryValues(country_code);

        // меняем страну у всхе селекторах одновременно
        $('select.country-selector').val(country_code);
    });
})