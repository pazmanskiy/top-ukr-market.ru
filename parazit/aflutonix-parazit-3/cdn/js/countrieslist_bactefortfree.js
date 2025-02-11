﻿(function() {
    'use strict';

    window.countryList = {
        bg: {
            name: 'Болгария',
            code: 'bg',
            price: 59,
            oldPrice: 118,
            labelPrice: 'лев',
            phoneHelper: 'Например +359 123456789',
            nameHelper: 'Мария Агова',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'София',
            cityRandomHelper: ['София', 'Пловдив', 'Варна', 'Бургас', 'Русе', 'Стара-Загора', 'Плевен'],
            nameRandomMaleHelper: ['Жеко Велев', 'Станислав Даскалов', 'Галин Гочев'],
            nameRandomFemaleHelper: ['Стефка Минева', 'Александра Пенчева', 'Кристина Жекова', 'Руска Хинкова'],
            dollarEquivalent: '1,56 лев',
            isDefault: true,
        },
        hu: {
            name: 'Венгрия',
            code: 'hu',
            price: 8900,
            oldPrice: 17800,
            labelPrice: 'фор',
            phoneHelper: 'Например +36 123456789',
            nameHelper: 'Екатерина Самойлова',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Будапешт',
            cityRandomHelper: ['Будапешт', 'Дунауйварош', 'Эрд', 'Веспрем', 'Залаэгерсег', 'Эгер', 'Надьканижа'],
            nameRandomMaleHelper: ['Элек Ковач', 'Тибор Балла', 'Карой Галаш'],
            nameRandomFemaleHelper: ['Аурель Мадьяр', 'Гизелла Такач', 'Лаура Бакош', 'Лилла Немеш'],
            dollarEquivalent: '246 фор',
        },
        de: {
            name: 'Германия',
            code: 'de',
            price: 39,
            oldPrice: 78,
            labelPrice: 'евро',
            phoneHelper: 'Например +490 123456789',
            nameHelper: 'Ханна Беккер',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Берлин',
            cityRandomHelper: ['Берлин', 'Гамбург', 'Мюнхен', 'Кёльн', 'Штутгарт', 'Дюссельдорф', 'Дортмунд'],
            nameRandomMaleHelper: ['Райнер Бём', 'Йенс Ауттенберг', 'Аксель Циглер', 'Симон Тидеман'],
            nameRandomFemaleHelper: ['Сара Герстле', 'Ирма Зимен', 'Рената Кляйн'],
            dollarEquivalent: '0,8 евро',
        },
        gr: {
            name: 'Греция',
            code: 'gr',
            price: 29,
            oldPrice: 58,
            labelPrice: 'евро',
            phoneHelper: 'Например +30 0123456789',
            nameHelper: 'Екатерина Самойлова',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Афины',
            cityRandomHelper: ['Афины', 'Салоники', 'Патры', 'Ираклион', 'Лариса', 'Волос', 'Ахарнес'],
            nameRandomMaleHelper: ['Агазон Галифианаксис', 'Адрастос Аматанидис', 'Байон Ксенакис', 'Влазис Спанидис'],
            nameRandomFemaleHelper: ['Агата Заробала', 'Барбара Цавахиду', 'Дайона Сифакису'],
            dollarEquivalent: '0,8 евро',
        },
        ge: {
            name: 'Грузия',
            code: 'ge',
            price: 49,
            oldPrice: 99,
            labelPrice: 'лари',
            phoneHelper: 'Например +995 123456789',
            nameHelper: 'Екатерина Самойлова',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Тбилиси',
            cityRandomHelper: ['Тбилиси', 'Кутаиси', 'Рустави', 'Батуми', 'Гори', 'Поти', 'Зугдиди'],
            nameRandomMaleHelper: ['Георги Беридзе', 'Давити Капанадзе', 'Зураби Мамедов', 'Левани Гелашвили'],
            nameRandomFemaleHelper: ['Тамари Гогниашвили', 'Нино Гуладзе', 'Мариами Дудучава'],
            dollarEquivalent: '2,2 лари',
        },
        es: {
            name: 'Испания',
            code: 'es',
            price: 39,
            oldPrice: 78,
            labelPrice: 'евро',
            phoneHelper: 'Например +34 123456789',
            nameHelper: 'Анна Мишкина',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Мадрид',
            cityRandomHelper: ['Мадрид', 'Барселона', 'Валенсия', 'Севилья', 'Сарагоса', 'Малага', 'Мурсия'],
            nameRandomMaleHelper: ['Педро Франко', 'Энрике Ортега', 'Артуро Кампос'],
            nameRandomFemaleHelper: ['Лорена Суньига', 'Милагрос Вальдес', 'Моника Нуньес', 'Сандра Бласкес'],
            dollarEquivalent: '0,8 евро',
        },
        it: {
            name: 'Италия',
            code: 'it',
            price: 39,
            oldPrice: 78,
            labelPrice: 'евро',
            phoneHelper: 'Например +39 1234567890',
            nameHelper: 'Екатерина Самойлова',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Рим',
            cityRandomHelper: ['Рим', 'Милан', 'Неаполь', 'Турин', 'Палермо', 'Генуя', 'Болонья'],
            nameRandomMaleHelper: ['Лука Пицци', 'Изидоро Лоренци', 'Даниэле Паскуале', 'Дамиано Белли'],
            nameRandomFemaleHelper: ['Кончетта Бенедетти', 'Томмаза Коррадини', 'Карла Бернарди'],
            dollarEquivalent: '0,8 евро',
        },
        cy: {
            name: 'Кипр',
            code: 'cy',
            price: 29,
            oldPrice: 58,
            labelPrice: 'евро',
            phoneHelper: 'Например +357 123456789',
            nameHelper: 'Екатерина Самойлова',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Лимасол',
            cityRandomHelper: ['Лимасол', 'Строволос', 'Никосия', 'Ларнака', 'Лакатамия', 'Пафос', 'Като Полемидия'],
            nameRandomMaleHelper: ['Alireza Spyrou', 'Inanç Constantinou', 'Jan Adamou', 'Kemal Kyriakou', 'Stefanos Pavlou'],
            nameRandomFemaleHelper: ['Agnieszka Ioannou', 'Doris Christou', 'Eleni Antoniou', 'Georgia Demitriou', 'Hwa-Young Markou'],
            dollarEquivalent: '0,8 евро',
        },
        lv: {
            name: 'Латвия',
            code: 'lv',
            price: 24,
            oldPrice: 48,
            labelPrice: 'евро',
            phoneHelper: 'Например +371 123456789',
            nameHelper: 'Санита Берзиньш',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Рига',
            cityRandomHelper: ['Рига', 'Даугавпилс', 'Лиепая', 'Елгава', 'Юрмала', 'Вентспилс', 'Резекне'],
            nameRandomMaleHelper: ['Роберт Берзиньш', 'Маркусс Калныньш', 'Даниэль Озолиньш', 'Адриан Янсонс'],
            nameRandomFemaleHelper: ['Эвелина Лиепиньш', 'Марта Круминьш', 'Эмилия Эглитис'],
            dollarEquivalent: '0,8 евро',
        },
        lt: {
            name: 'Литва',
            code: 'lt',
            price: 24,
            oldPrice: 48,
            labelPrice: 'евро',
            phoneHelper: 'Например +370 123456789',
            nameHelper: 'Лайма Дауканте',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Вильнюс',
            cityRandomHelper: ['Вильнюс', 'Каунас', 'Клайпеда', 'Шяуляй', 'Панявежис', 'Алитус', 'Мариямполе'],
            nameRandomMaleHelper: ['Кестутис Петраускас', 'Гедеминас Станкявичюс', 'Радвила Жукаускас'],
            nameRandomFemaleHelper: ['Милда Янкаускаюс', 'Лайма Буткевичюте', 'Эгле Паулаускате', 'Алге Казлаускате'],
            dollarEquivalent: '0,8 евро',
        },
        pt: {
            name: 'Португалия',
            code: 'pt',
            price: 49,
            oldPrice: 98,
            labelPrice: 'евро',
            phoneHelper: 'Например +351 123456789',
            nameHelper: 'Екатерина Самойлова',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Авейру',
            cityRandomHelper: ['Авейру', 'Валенса', 'Гуарда', 'Лиссабон', 'Мангуалди', 'Помбал', 'Порту'],
            nameRandomMaleHelper: ['Кассиу Пейшоту Сантьягу', 'Балтазар Кандал Ленкаштри', 'Эмануэл Палья Мартинью', 'Даниэл Сампайю Авила'],
            nameRandomFemaleHelper: ['Дебора Карвалью Мальейру', 'Жулия Мендонса Мангейра', 'Мелисса Каминья Фариаш'],
            dollarEquivalent: '0,8 евро',
        },
        ro: {
            name: 'Румыния',
            code: 'ro',
            price: 149,
            oldPrice: 299,
            labelPrice: 'RON',
            phoneHelper: 'Например +40 123456789',
            nameHelper: 'Мария Ионеску',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Бухарест',
            cityRandomHelper: ['Бухарест', 'Крайова', 'Питешти', 'Ботошани', 'Тулча', 'Бряза', 'Мизил'],
            nameRandomMaleHelper: ['Василе Раду', 'Джордже Джорджеску', 'Дорел Опря'],
            nameRandomFemaleHelper: ['Наталия Маноле', 'Кэтэлина Константинеску', 'Амалия Дьякону', 'Аделина Стан'],
            dollarEquivalent: '3,7 ron',
        },
        sk: {
            name: 'Словакия',
            code: 'sk',
            price: 39,
            oldPrice: 78,
            labelPrice: 'евро',
            phoneHelper: 'Например +421 123456789',
            nameHelper: 'Анна Мишкина',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Братислава',
            cityRandomHelper: ['Братислава', 'Кошице', 'Нитра', 'Прешов', 'Жилина', 'Брезно', 'Врутки'],
            nameRandomMaleHelper: ['Роман Гавличек', 'Эмил Дворжак', 'Ондржей Прокоп'],
            nameRandomFemaleHelper: ['Ива Бенешова', 'Никола Кралова', 'Габриэла Свободова', 'Ярмила Соукупова'],
            dollarEquivalent: '0,8 евро',
        },
        si: {
            name: 'Словения',
            code: 'si',
            price: 39,
            oldPrice: 78,
            labelPrice: 'евро',
            phoneHelper: 'Например +386 123456789',
            nameHelper: 'Анна Мишкина',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Любляна',
            cityRandomHelper: ['Любляна', 'Марибор', 'Целе', 'Крань', 'Веленье', 'Копер', 'Птуй'],
            nameRandomMaleHelper: ['Марцель Галаш', 'Янош Васс', 'Оскар Тот', 'Габор Хорват'],
            nameRandomFemaleHelper: ['Жужанна Бартане', 'Юлия Ковач', 'Александра Шоош'],
            dollarEquivalent: '0,8 евро',
        },
        fr: {
            name: 'Франция',
            code: 'fr',
            price: 39,
            oldPrice: 78,
            labelPrice: 'евро',
            phoneHelper: 'Например +33 123456789',
            nameHelper: 'Анна Мишкина',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Париж',
            cityRandomHelper: ['Париж', 'Марсель', 'Лион', 'Тулуза', 'Ницца', 'Страсбург', 'Сент-Этьен'],
            nameRandomMaleHelper: ['Базиль Ривар', 'Флорантен Леруа', 'Сильвен Фурнье', 'Оскар Крото'],
            nameRandomFemaleHelper: ['Софи Лефевр', 'Франсина Давид', 'Стефани Лефевр'],
            dollarEquivalent: '0,8 евро',
        },
        hr: {
            name: 'Хорватия',
            code: 'hr',
            price: 299,
            oldPrice: 598,
            labelPrice: 'кун',
            phoneHelper: 'Например +385 123456789',
            nameHelper: 'Екатерина Самойлова',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Загреб',
            cityRandomHelper: ['Загреб', 'Сплит', 'Риека', 'Осиек', 'Задар', 'Карловац', 'Вараждин'],
            nameRandomMaleHelper: ['Драган Матич', 'Желько Видокович', 'Яков Ковасевич'],
            nameRandomFemaleHelper: ['Велерия Марич', 'Злата Джукич', 'Марияна Новак', 'Татяна Хорват'],
            dollarEquivalent: '5,9 кун',
        },
        cz: {
            name: 'Чехия',
            code: 'cz',
            price: 790,
            oldPrice: 1580,
            labelPrice: 'крон',
            phoneHelper: 'Например +420 123456789',
            nameHelper: 'Анна Мишкина',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Прага',
            cityRandomHelper: ['Прага', 'Брно', 'Теплице', 'Дарков', 'Карловы Вары', 'Гаррахов', 'Богемия'],
            nameRandomMaleHelper: ['Богуслав Витек', 'Лукаш Немец', 'Адам Ванек', 'Ростислав Нетрвал'],
            nameRandomFemaleHelper: ['Милослава Шмидова', 'Моника Бартова', 'Анета Краусова'],
            dollarEquivalent: '21 крон',
        },
        ch: {
            name: 'Швейцария',
            code: 'ch',
            price: 60,
            oldPrice: 120,
            labelPrice: 'фр.',
            phoneHelper: 'Например +41 123456789',
            nameHelper: 'Анна Мишкина',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Стокгольм',
            cityRandomHelper: ['Стокгольм', 'Гётеборг', 'Мальмё', 'Уппсала', 'Вестерос', 'Эребру', 'Норрчёпинг'],
            nameRandomMaleHelper: ['Тобиас Линдберг', 'Гёста Виклунд', 'Нильс Бенгтссон', ' Стефан Гуннарссон'],
            nameRandomFemaleHelper: ['Анна Матссон', 'Карина Лунд', 'Линнея Сандстрём'],
            dollarEquivalent: '0,87 фр',
        },
        ee: {
            name: 'Эстония',
            code: 'ee',
            price: 24,
            oldPrice: 48,
            labelPrice: 'евро',
            phoneHelper: 'Например +372 123456789',
            nameHelper: 'София Йуримаа',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            emailError: 'E-mail incorrect',
            emailSuccess: 'Thanks, e-mail sended',
            countryError: 'Страна обязательна для заполнения',
            cityCurrentHelper: 'Таллин',
            cityRandomHelper: ['Таллин', 'Тарту', 'Нарва', 'Пярну', 'Маарду', 'Валга', 'Кейла'],
            nameRandomMaleHelper: ['Ричард Тамм', 'Саамуэль Мяги', 'Расмус Ильвес'],
            nameRandomFemaleHelper: ['Герда Каск', 'Дорис Сепп', 'Лиия Ребане', 'Миральда Коппель'],
            dollarEquivalent: '0,8 евро',
        }
    };
})();