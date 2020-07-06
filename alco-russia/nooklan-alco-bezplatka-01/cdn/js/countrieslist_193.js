(function() {
    'use strict';

    window.countryList = {
        ru: {
            name: 'Россия',
            code: 'ru',
            price: 193,
            oldPrice: 1980,
            labelPrice: 'руб.',
            phoneHelper: 'Например +7 9031234567',
            nameHelper: 'Екатерина Самойлова',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            countryError: 'Страна обязательна для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            isDefault: true
        },
        by: {
            name: 'Беларусь',
            code: 'by',
            price: 6,
            oldPrice: 78,
            labelPrice: 'руб.',
            phoneHelper: 'Например +375 123456789',
            nameHelper: 'Маргарыта Концява',
            nameError: 'Імя абавязковы для запаўнення',
            phoneError: 'Тэлефон абавязковы для запаўнення',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Краіна абавязковы для запаўнення',
            cityCurrentHelper: 'Минск',
            cityRandomHelper: ['Минск', 'Бобруйск', 'Витебск', 'Могилёв', 'Полоцк', 'Рогачёв', 'Гомель'],
            nameRandomMaleHelper: ['Адам Зинкевич', 'Олег Филипенко', 'Елисей Скворцов'],
            nameRandomFemaleHelper: ['Елена Полищук', 'Анна Высоцкая', 'Барбара Смолякова', 'Белла Ковальчукова'],
            dollarEquivalent: '1,68 руб',
        },
        kz: {
            name: 'Казахстан',
            code: 'kz',
            price: 1100,
            oldPrice: 11000,
            labelPrice: 'тг.',
            phoneHelper: 'Например +77 123456789',
            nameHelper: 'Айжаксым Омарова',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Алма-Ата',
            cityRandomHelper: ['Алма-Ата', 'Шымкент', 'Астана', 'Караганда', 'Актобе', 'Тараз', 'Павлодар'],
            nameRandomMaleHelper: ['Абай Абдильдин', 'Абылай Валиханов', 'Гавит Габдуллин', 'Кадыр Джандосов'],
            nameRandomFemaleHelper: ['Агипа Ертаева', 'Данеля Жубанова', 'Табия Ибрагимова'],
            dollarEquivalent: '279 тг',
        }
    };
})();