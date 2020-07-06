<?php
$ProductName = 'Борвил';
$ProductPrice = 189;
$ProductOldPrice = 499;
$Offerid = 4661;
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Получить <?php echo $ProductName;?> ! Реальные отзывы. Закажите <?php echo $ProductName;?> сейчас!</title>
<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">

<link rel="stylesheet" type="text/css" href="landing_file\micolock\Landing_10\rocket-landings-production\690\css\slick.css">
<link rel="stylesheet" type="text/css" href="landing_file\micolock\Landing_10\rocket-landings-production\690\css\slick-theme.css">
<link href="landing_file\micolock\Landing_10\rocket-landings-production\690\css\index.css" rel="stylesheet" type="text/css">
<link href="landing_file\micolock\Landing_10\rocket-landings-production\690\css\youtube.css" rel="stylesheet">
<link href="landing_file\micolock\Landing_10\rocket-landings-production\690\css\css-bundle.css" rel="stylesheet" type="text/css">
<link rel="icon" type="image/png" sizes="32x32" href="landing_file\micolock\Landing_10\img\favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="landing_file\micolock\Landing_10\img\favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="landing_file\micolock\Landing_10\img\favicon-16x16.png">
	<!-- Favicon
	<link rel="icon" type="image/png" sizes="32x32" href= "/landing_file/micolock/Landing_10/favicon-32x32.png"/>
	<link rel="icon" type="image/png" sizes="96x96" href= "/landing_file/micolock/Landing_10/favicon-96x96.png"/>
	<link rel="icon" type="image/png" sizes="16x16" href= "/landing_file/micolock/Landing_10/favicon-16x16.png"/> -->

	<!-- JS -->		
	<script type="text/javascript" src="js\jquery-1.10.2.js"></script>
	<script type="text/javascript" src="js\date_random.js"></script>
	<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");

   ym(58810207, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/58810207" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter --> 
</head>
<body>
<link type="text/css" rel="stylesheet" href="css\l_all.css">
<script type="text/javascript" src="js\jquery-ui-1.11.4.min.js"></script>
<script type="text/javascript" src="js\jquery.fancybox.latest.js"></script>
<script type="text/javascript" src="js\l_widgets.js"></script>
<script type="text/javascript" src="js\l_functions.js"></script>

<script src="inputmask_4_x\jquery.inputmask.bundle.min.js"></script>


    <script src="inputmask_4_x\inputmask\phone-codes\phone.simple.js"></script>




    <script type="text/javascript" src="js\localization\rus.js"></script>


<style>
    .pl_next_order_page{ display: none; }
</style>




<div class="vw">
<section class="block-1">
<header class="container clearfix">

<div class="callback ever-popup-btn">
<span class="">Заказать обратный звонок</span>
</div>
<div class="menu">
<ul>
<li><a href="#expert">Мнение специалиста</a></li>
<li><a href="#comments">Отзывы клиентов</a></li>
</ul>
</div>
</header>
<div class="block1-content container clearfix">
<div class="left-block">
<h1><span class="product-name red">Препарат <?php echo $ProductName;?></span>
избавит от грибка всего
за полный курс и не допустит
повторного заражения</h1>
<h2>благодаря комплексу из натуральных масел
и лекарственных растений</h2>
<ul class="about-product">
<li>уничтожает грибковые бактерии
</li>
<li>избавляет от зуда и сухости</li>
<li>устраняет неприятный запах</li>
<li>не допускает повторного
заражения
</li>
</ul>
</div>
<div class="girl">
</div>
<div class="right-block">
<div class="timer flex-wrapper">
<div class="to-end-left">По акции осталось:</div>
<div class="left left-hours">
<span class="hours"><font class="p_limit_left_text">27</font> уп.</span>
</div>
</div>
<div class="form" id="cloneMobileThis">
<form method="post" action="/success.php" class="x_order_form"><input type="hidden" name="price" value="<?php echo $ProductPrice;?>">
                            <input type="hidden" name="offerId" value="<?php echo $Offerid;?>">
<div class="prices flex-wrapper">
<div class="old-price">
<span>Только сегодня</span>
<span class="price"><span style="font-size: 22px"><span class="money x_price_previous endStockDate nowdate" daysint="">13 августа</span></span></span>
</div>
<div class="current-price">
<span>Получите</span>
<span class="price"><font class="freeprice"><strike><?php echo $ProductOldPrice;?></strike> <?php echo $ProductPrice;?> грн*</font></span>
</div>
</div>
<input type="text" name="name" placeholder="Имя">
<input type="tel" name="phone" placeholder="Телефон">
<div class="btn-ord"><button type="submit" class="order" onclick="$(this).closest('form').submit();return false;">Получить </button></div>
<span class="primrub" style="width:100%;text-align:center;display:block">*при оформлении заказа</span>
							<input type="hidden" name="order[specifications]" value="">
							<input type="hidden" name="order[discount]" value="">
							<style>
	.pl_field_address_info{
		opacity: 0;
	}
</style>

<input type="checkbox" name="order[address_info]" class="pl_field_address_info">
<input type="hidden" name="order[advHash]" class="advHash">
	
</form>
</div>
<p><img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\protection.png" alt="guard"> Ваши данные защищены!</p>
</div>
</div>
</section>
<section class="block-2 statistic container">
<h1>Статистика МОЗ: <span class="br"></span>
Грибком заражено <span class="red">85%</span> населения</h1>
<span>Вам знакомы эти симптомы?</span>
<ul class="symptom-photos flex-wrapper">
<li class="symptom">
<div class="photo">
<div class="top-triangle"><span>1</span></div>
<img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\symptom-1.png" alt="">
<div class="bottom-triangle"></div>
</div>
<p>Подошва стопы
чешется</p>
</li>
<li class="symptom">
<div class="photo">
<div class="top-triangle"><span>2</span></div>
<img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\symptom-2.png" alt="">
<div class="bottom-triangle"></div>
</div>
<p>Стопы неприятно
пахнут</p>
</li>
<li class="symptom">
<div class="photo">
<div class="top-triangle"><span>3</span></div>
<img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\symptom-3.png" alt="">
<div class="bottom-triangle"></div>
</div>
<p>Кожа шелушится</p>
</li>
<li class="symptom">
<div class="photo">
<div class="top-triangle"><span>4</span></div>
<img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\symptom-4.png" alt="">
<div class="bottom-triangle"></div>
</div>
<p>На пятках
появились трещины</p>
</li>
<li class="symptom">
<div class="photo">
<div class="top-triangle"><span>5</span></div>
<img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\symptom-5.png" alt="">
<div class="bottom-triangle"></div>
</div>
<p>Ногти стали
ломкими</p>
</li>
<li class="symptom">
<div class="photo">
<div class="top-triangle"><span>6</span></div>
<img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\symptom-6.png" alt="">
<div class="bottom-triangle"></div>
</div>
<p>Тяжесть в ногах</p>
</li>
</ul>
<div class="separate"><img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\separate.png"></div>
<span>Даже незначительный зуд или шелушение говорит о грибковом заражении.</span>
<p>Если у вас совпало хотя бы 2 симптома — следует немедленно начать лечение грибка,
чтобы не допустить его распространения!</p>
</section>



<section class="block-3 repercussion">
<div class="container">
<h1><span class="red">Если не начать лечение</span>, грибок будет проникать
вглубь кожи и перейдет на ногти. </h1>
<ul class="photos flex-wrapper">
<li class="photo"><img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\repercussion-1.png" alt=""></li>
<li class="photo"><img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\repercussion-2.png" alt=""></li>
<li class="photo"><img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\repercussion-3.png" alt=""></li>
</ul>
<p>Не запускайте болезнь, пока на начальных стадиях от нее можно полностью избавиться всего за курс лечения </p>
</div>
</section>


<section class="block-4 product-consist">
<div class="container">
<h1><span class="red"><?php echo $ProductName;?></span> - натуральный препарат, который за курс лечения
избавит от грибка и не даст ему вернуться
</h1>
<p>Содержит 30 активных природных компонентов, которые полностью ликвидируют споры патогенных грибков, <span class="br"></span>
а также болезнетворных микроорганизмов и вирусов
</p>
<div class="consist flex-wrapper">
<div class="left">
<ul>
<li>Молочная кислота <p>обезвреживает грибковые споры, останавливая распространение инфекции</p></li>
<li>Никотиновая кислота <p>устраняет и предотвращает высыпания на коже, оказывает антисептическое воздействие
</p></li>
<li>Экстракт полыни <p>смягчает кожу, устраняет шелушение и зуд</p></li>
</ul>
</div>
<div class="center">
<img src="123.png" alt="">
</div>
<div class="right">
<ul>
<li>Масло шалфея <p>устраняет и предотвращает высыпания на коже, уничтожая микробы и бактерии
</p></li>
<li>Экстракт чистотела <p>размягчает натоптыши и мозоли, оказывает тонизирующее воздействие
</p></li>
<li>Папоротник <p>заживляет трещины в межпальцевых складках и на пятках
</p></li>
</ul>
</div>
</div>
<img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\separate.png" alt="">
<p>Благодаря темной упаковке, все полезные вещества максимально <span class="red"> защищены</span> от
разлагающего воздействия света</p>
</div>
</section>
<section class="block-5 form-block">
<div class="container">
<div class="flex-wrapper">
<div class="left">
<h1>
Избавьтесь <span class="br"></span>
от грибка с помощью
<span class="product-name red"><?php echo $ProductName;?></span></h1>
<h2>благодаря комплексу из натуральных масел
и лекарственных растений</h2>
<ul>
<li><strong>избавьтесь от зуда:</strong> больше не придется
думать о том, как незаметно от других
почесать ногу;
</li>
<li><strong>устраните неприятный запах:</strong> больше
не придется менять носки по нескольку
раз в день;
</li>
<li><strong>ликвидируйте грибок:</strong> пока грибок
не ликвидировал вашу жизнь.
</li>
</ul>
</div>
<div class="center">
<div class="form" id="cloneMobileThis">
<form method="post" action="/success.php" class="x_order_form"><input type="hidden" name="price" value="<?php echo $ProductPrice;?>">
                            <input type="hidden" name="offerId" value="<?php echo $Offerid;?>">
<div class="prices flex-wrapper">
<div class="old-price">
<span>Только сегодня</span>
<span class="price"><span style="font-size: 22px"><span class="money x_price_previous endStockDate nowdate" daysint="">13 августа</span></span></span>
</div>
<div class="current-price">
<span>Получите</span>
<span class="price"><font class="freeprice"><strike><?php echo $ProductOldPrice;?></strike> <?php echo $ProductPrice?> грн*</font></span>
</div>
</div>
<input type="text" name="name" placeholder="Имя">
<input type="tel" name="phone" placeholder="Телефон">
<div class="btn-ord"><button type="submit" class="order" onclick="$(this).closest('form').submit();return false;">Получить </button></div>
<span class="primrub" style="width:100%;text-align:center;display:block">*при оформлении заказа</span>
							<input type="hidden" name="order[specifications]" value="">
							<input type="hidden" name="order[discount]" value="">
							<style>
	.pl_field_address_info{
		opacity: 0;
	}
</style>

<input type="checkbox" name="order[address_info]" class="pl_field_address_info">
<input type="hidden" name="order[advHash]" class="advHash">
	
</form>
</div>
<p><img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\protection.png" alt="guard"> Ваши данные защищены!</p>
</div>
<div class="right">
<div class="discount"></div>
<img src="123.png" alt="">
</div>
</div>
</div>
</section>

<section class="block-7 results">
<div class="result-head">
<div class="container">
<h1 class="no-margin">
Результаты исследования противогрибкового
препарата <span class="red"> <?php echo $ProductName;?></span> в Клинической больнице №67
имени Л.А.Ворохобова</h1>
<h2>В исследовании участвовали 11 430 пациентов на разных стадиях заражения грибком. </h2>
</div>
</div>
<div class="container">
<h1><span class="red"> <?php echo $ProductName;?></span> помог 92% пациентам</h1>
<div class="flex-wrapper effect effect-quantity">
<div class="percents">
<span>Избавились от грибка</span>
<span class="percent" data-count="56">0</span><span class="cur">%</span>
</div>
<div class="percents">
<span>Избавились от симптомов</span>
<span class="percent" data-count="36">0%</span><span class="cur">%</span>
</div>
<div class="percents">
<span>Препарат не подействовал</span>
<span class="percent" data-count="8">0%</span><span class="cur">%</span>
</div>
</div>
<p>Исследование показало, что в редких случаях попадания инфекции и перехода заболевания в гнойную форму,
<span class="br"></span>
для лечения требуются дополнительные препараты.</p>
<img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\separate.png" alt="">

<p>Поскольку испытуемые находились на разных стадиях заболевания, необходимое количество времени для <span class="br"></span> выздоровления отличалось. </p>
<p>По результатам исследования, <strong>полный курс применения - оптимальный курс лечения для 88%
испытуемых</strong>.</p>
</div>
</section>
<section class="block-8 slider-block">
<div class="container">
<h1>Фотоотчет результатов исследования</h1>
<div class="slider-photos">
<div class="before"><img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\slider-1-before.png" alt=""></div>
<div class="after"><img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\slider-1-after.png" alt=""></div>
<div class="before"><img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\slider-2-before.png" alt=""></div>
<div class="after"><img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\slider-2-after.png" alt=""></div>
<div class="before"><img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\slider-3-before.png" alt=""></div>
<div class="after"><img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\slider-3-after.png" alt=""></div>
</div>
<button class="order-button ever-popup-btn" href=""> Получить  <!--<span class="br"></span> <?php echo $ProductName;?>--></button>
</div>
</section>
<section class="block-9 comments container" id="comments">
<h1 class="no-margin">
Отзывы людей, которые избавились от грибка <span class="br"></span>
при помощи <span class="red"> <?php echo $ProductName;?></span></h1>
<ul class="flex-wrapper">
<li class="comment">
<div class="photo">
<img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\comment-1.png" alt="photo">
<span class="name">Елена, 29 лет</span>
</div>
<div class="apply-result">
<div class="quote">"</div>
Стопы больше не пахнут
и не чешутся, а грибок ушел
и не возвращается.
</div>
<div class="comment-text">
<p>Думаю, что подцепила грибок в салоне красоты, видимо педикюрщица плохо обработала инструмент.
Стопы начали чесаться, особенно пятки по бокам.
К врачу идти банально не оказалось времени, тем более с такой мелкой, хоть и неприятной
проблемкой.</p>
<p>Почитала в интернете положительные отзывы про препарат <?php echo $ProductName;?>, и начала его применять. <strong>Стопы больше не пахнут и не чешутся, а грибок ушел и не возвращается)</strong>
</p>
</div>
</li>
<li class="comment">
<div class="photo">
<img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\comment-2.png" alt="photo">
<span class="name">Светлана, 35 лет</span>
</div>
<div class="apply-result">
<div class="quote">"</div>
После курса использования препарата
	<?php echo $ProductName;?> вот уже полгода как грибок
ко мне не возвращается.
</div>
<div class="comment-text">
<p>Я работаю тренером по плаванью,
и полжизни у меня проходит в бассейне. От грибка у нас страдают многие, и я сама лечилась от
него
ни один раз. Как начнут чесаться ноги - сразу спасаюсь всевозможными препаратами.</p>
<p><?php echo $ProductName;?> мне порекомендовала сотрудница, как действенное новое средство. <strong>После курса использования препарата <?php echo $ProductName;?> вот уже полгода как грибок ко мне не возвращается.</strong>
</p>
</div>
</li>
<li class="comment">
<div class="photo">
<img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\comment-3.png" alt="photo">
<span class="name">Олег, 37 лет</span>
</div>
<div class="apply-result">
<div class="quote">"</div>
Наносил "<?php echo $ProductName;?>" по 2 раза
в день - и через неделю запах
и зуд прошли.
</div>
<div class="comment-text">
<p>Я долго не знал, что у меня грибок стопы. Ну небольшой зуд и потливость повысилась, ну запах. Когда жена начала жаловаться на неприятный запах, я понял, что деваться некуда.</p>
<p><strong>Наносил "<?php echo $ProductName;?>" утром и вечером - и через неделю запах и зуд прошли.</strong> Я принимал полный курс, чтобы полностью избавиться от проблемы. И всё прошло.
</p>
</div>
</li>
</ul>
</section>









    















<section class="order-product block-12">
<div class="container">
<h1>Получить оригинальный <span class="blue-spray"><?php echo $ProductName;?></span> можно
только на нашем сайте</h1>
<ul class="flex-wrapper order">
<li class="circle">
<img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\order-step-1.png" alt="order-step">
<p>Заполните форму
на сайте</p>
</li>
<li class="arrows flex-wrapper">
<div class="arrow filter arrow-1"></div>
<div class="arrow filter arrow-2"></div>
<div class="arrow filter arrow-3"></div>
</li>
<li class="circle">
<img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\order-step-2.png" alt="order-step">
<p>Дождитесь звонка
оператора</p>
</li>
<li class="arrows flex-wrapper">
<div class="arrow filter arrow-1"></div>
<div class="arrow filter arrow-2"></div>
<div class="arrow filter arrow-3"></div>
</li>
<li class="circle">
<img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\order-step-3.png" alt="order-step">
<p>Получите посылку
на почте</p>
</li>
</ul>
<div class="warning">
<h1>Пожалуйста, не тяните и <span class="red"> избавьтесь от грибка сейчас</span>,
пока он не начал распространяться дальше по телу!
</h1>
<p>Со временем симптомы грибка усугубляются. Ногти начинают крошится, кожа отслаивается пластами, стопы
покрываются болезненными красными пятнами - и инфекция может начать распространяться вверх по ногам.
<span class="br">Не запускайте болезнь!</span>
</p>
</div>
</div>
</section>
<section class="block-1 block-13">
<div class="block1-content container clearfix">
<div class="left-block">
<h1><span class="product-name red">Препарат <?php echo $ProductName;?></span>
избавит от грибка всего
за полный курс и не допустит
повторного заражения</h1>
<h2>благодаря комплексу из натуральных масел
и лекарственных растений</h2>
<ul class="about-product">
<li>уничтожает грибковые бактерии
</li>
<li>избавляет от зуда и сухости</li>
<li>устраняет неприятный запах</li>
<li>не допускает повторного
заражения
</li>
</ul>
</div>
<div class="girl">
</div>
<div class="right-block">
<div class="timer flex-wrapper">
<div class="to-end-left">По акции осталось:</div>
<div class="left left-hours">
<span class="hours"><font class="p_limit_left_text">27</font> уп.</span>
</div>
</div>
<div class="form" id="cloneMobileThis">
<form method="post" action="/success.php" class="x_order_form"><input type="hidden" name="price" value="<?php echo $ProductPrice;?>">
                            <input type="hidden" name="offerId" value="<?php echo $Offerid;?>">
<div class="prices flex-wrapper">
<div class="old-price">
<span>Только сегодня</span>
 <span class="price"><span style="font-size: 22px"><span class="money x_price_previous endStockDate nowdate" daysint="">13 августа</span></span></span>

</div>
<div class="current-price">
<span>Получите</span>
<span class="price"><font class="freeprice"><strike><?php echo $ProductOldPrice;?></strike> <?php echo $ProductPrice;?> грн*</font></span>
</div>
</div>
<input type="text" name="name" placeholder="Имя">
<input type="tel" name="phone" placeholder="Телефон">
<div class="btn-ord"><button type="submit" class="order" onclick="$(this).closest('form').submit();return false;">Получить </button></div>
<span class="primrub" style="width:100%;text-align:center;display:block">*при оформлении заказа</span>
							<input type="hidden" name="order[specifications]" value="">
							<input type="hidden" name="order[discount]" value="">
							<style>
	.pl_field_address_info{
		opacity: 0;
	}
</style>

<input type="checkbox" name="order[address_info]" class="pl_field_address_info">
<input type="hidden" name="order[advHash]" class="advHash">
	
</form>
</div>
<p><img src="landing_file\micolock\Landing_10\rocket-landings-production\690\images\protection.png" alt="guard"> Ваши данные защищены!</p>
</div>
</div>
</section>
<footer>
<div class="container">
<center style="color:#7e7e7e;   line-height: 20px; width: 100%;">
 © 2020 ТОВ "ОМАКС Дистриб'юшин"<br><br>Адреса: Україна, м Київ, вул. М. Гречка, д. 3
            <br><br>*При заказе полного курса.<br>
    <img src="https://m.mixadvert.com/retargeting/?id=3606" alt="" />
    <script type="text/javascript" id="adpartner_init">
        var adexQ = adexQ || [];
        !function(e){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="//a4p.adpartner.pro/tracker/script?id=408";var r=e.getElementById("adpartner_init");r.parentNode.insertBefore(t,r)}(window.document);
    </script>
    <script type="text/javascript">
        yottos_ac = 'FBA82D09-8EF7-486C-B51C-E1D361731FED';
        yottos_remarketing_offer_id = '3';
        yottos_remarketing_time = 30;
    </script>
    <script type="text/javascript" src="https://cdn.yottos.com/getmyad/_t.js"></script>

<br>

<style>
@media screen and (min-width:1200px) and (max-width:9999px) {
.form-block .flex-wrapper .left {    width: 530px;    padding-right: 70px; }
.form-block .flex-wrapper .right {    width: 435px;    margin-left: 10px;    margin-top: 5px; }
.form-block .flex-wrapper .right .discount {    right: 230px;}
}

	
@media screen and (min-width:1101px) and (max-width:1199px) {
	.form-block .flex-wrapper .right .discount {    right: 220px;}
	.form-block .flex-wrapper .left {    width: 450px;    padding-right: 30px; }
}

	
@media screen and (min-width:1001px) and (max-width:1100px) {
	.form-block .flex-wrapper .right .discount {    right: 185px;}
	.form-block .flex-wrapper .left {    width: 450px;    padding-right: 30px; }
}

	
			.freeprice {font-size: 20px;
    line-height: 28px;
    font-weight: bold; color: #ff6a00;}
			
			.primrub { color: #777 !important; margin: -5px 0 10px;}    *{outline:none !important} #created-button-1, #created-button-2 {line-height:34px !important; font-family:'Arial','Tahoma','Verdana';}	.pl_field_address_info {position:absolute;z-index: -1;}   footer .container {text-align:center} .confidens {text-align:center; cursor:default; display:block; clear:both;  }   .confidens a {text-decoration:none !important; font-family: OpenSansRegular, sans-serif; color:#7e7e7e !important; cursor:default; }    .confidens a:hover {cursor:default;  font-family: OpenSansRegular, sans-serif; color:#7e7e7e !important; text-decoration:none !important;}  </style>
</center>
</div>
</footer>
</div>
<div class="ever-popup-build" id="cloneThis">
<div class="flex-wrapper">
<div class="form-product">
<h1>Получить <?php echo $ProductName;?> </h1>
<img src="123.png" alt="product">
</div>
<div class="form">
<form method="post" action="/success.php" class="x_order_form"><input type="hidden" name="price" value="<?php echo $ProductPrice;?>">
                            <input type="hidden" name="offerId" value="<?php echo $Offerid;?>">
<div class="prices flex-wrapper">	
<div class="old-price">
<span>Только сегодня</span>
<span class="price"><span style="font-size: 22px"><span class="money x_price_previous endStockDate nowdate" daysint="">13 августа</span></span></span>
</div>
<div class="current-price">
<span>Получите</span>
<span class="price"><font class="freeprice"><strike><?php echo $ProductOldPrice;?></strike> <?php echo $ProductPrice;?> грн*</font></span>
</div>
</div>
<input type="text" name="name" placeholder="Ваше имя">
<input type="tel" name="phone" placeholder="Ваш телефон">
<button type="submit" class="order" onclick="$(this).closest('form').submit();return false;">Получить</button>
<span class="primrub" style="width:100%;text-align:center;display:block">*при оформлении заказа</span>
							<input type="hidden" name="order[specifications]" value="">
							<input type="hidden" name="order[discount]" value="">
							<style>
	.pl_field_address_info{
		opacity: 0;
	}
</style>

<input type="checkbox" name="order[address_info]" class="pl_field_address_info">
<input type="hidden" name="order[advHash]" class="advHash">
	
</form>
</div>
</div>
</div>

<script src="landing_file\micolock\Landing_10\rocket-landings-production\690\index.js"></script>

<div id="kmacb" style="display: none;">
	<a id="fancy-button-callback" class="popup-open" href="#ps-popup-call">
		<div class="kmacb-circle"></div>
		<div class="kmacb-circle-fill"></div>
		<div class="kmacb-img-circle"></div>
	</a>
</div>


<style>

	
		#ps-call-pc-form { display: block; }
		#ps-call-mobile-form { display: none; }

		@media only screen and (min-device-width : 320px) and (max-device-width : 700px) {
			#ps-call-pc-form { display: none; }
			#ps-call-mobile-form { display: block; }
		}

	
	
		div.ps-popup-default .ps-phone-form .ps-order-call {
			width: auto;
			border: none;
		}

		div.ps-popup-default .ps-phone-form .ps-order-call .ps-phone-holder {
			width: auto;
		}

	
</style>


<div class="popup-container">
	<div id="ps-popup-call" class="ps-popup-default ps-popup-phone">
		<div class="ps-popup-inner">


			<form id="ps-call-pc-form" action="/success.php" method="post">
				<div class="ps-popup-head"><a href="#" class="ps-icon-cross popup-close"></a></div>
				<div class="ps-form ps-phone-form">
					<div class="ps-left ps-order-call">
						<h2 l-loc="l_pl32">Закажите обратный звонок</h2>
						<p l-loc="l_pl33">Мы вам перезвоним в течение 1 минуты!</p>
						<div class="ps-phone-holder"><strong l-loc="l_pl20">Телефон:</strong>
							<div class="ps-input-wrapper">
								<input name="phone" type="tel" value="+380" class="ps-input">
								<input l-loc-value="l_pl38" type="submit" value="Жду звонка" class="ps-order">
								<input class="pl_full_discount_price" type="hidden" name="order[discount]" value="">
								<input type="hidden" name="order[specifications]" value="">
								<input type="hidden" name="order[is_one_rub]" value="">
								<style>
	.pl_field_address_info{
		opacity: 0;
	}
</style>

<input type="checkbox" name="order[address_info]" class="pl_field_address_info">
<input type="hidden" name="order[advHash]" class="advHash">
							</div>
							<span class="ps-phone-example" l-loc="l_pl21">Пример: +3804550123456</span>
						</div>
					</div>
									</div>
			</form>


			<div id="ps-call-mobile-form">
				<h2 l-loc="l_pl32">Закажите обратный звонок</h2>
				<p l-loc="l_pl33">Мы вам перезвоним в течении 1 минуты!</p>
				<form method="post" class="phone-form" id="phone-form" novalidate="novalidate" style="border:none;"><input type="hidden" name="price" value="<?php echo $ProductPrice;?>">
                            <input type="hidden" name="offerId" value="<?php echo $Offerid;?>">

					<span class="ps-label" l-loc="l_pl20">Телефон:</span>
					<span class="ps-label-right" l-loc="l_pl21">Пример: +3804550123456</span>
					<div class="inputs">	
						<input name="phone" type="tel" value="+380" class="green-text green-border">
					</div>
					<div>
						<button class="ps-submit green-button" type="submit">Жду звонка</button>
					</div>
										<input type="hidden" name="order[discount]" value="">
					<input type="hidden" name="order[specifications]" value="">
					<input type="hidden" name="order[is_one_rub]" value="">
					<style>
	.pl_field_address_info{
		opacity: 0;
	}
</style>

<input type="checkbox" name="order[address_info]" class="pl_field_address_info">
<input type="hidden" name="order[advHash]" class="advHash">
				</form>
			</div>


		</div>
	</div>
</div>






<!-- Adskeeper Sensor -->
<script type="text/javascript">
    (function() {
        var d = document, w = window;
        w.MgSensorData = w.MgSensorData || [];
        w.MgSensorData.push({
            cid:407408,
            lng:"us",
            nosafari:true,
            project: "a.adskeeper.co.uk"
        });
        var l = "a.adskeeper.co.uk";
        var n = d.getElementsByTagName("script")[0];
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        var dt = !Date.now?new Date().valueOf():Date.now();
        s.src = "//" + l + "/mgsensor.js?d=" + dt;
        n.parentNode.insertBefore(s, n);
    })();
</script>
<!-- /Adskeeper Sensor -->





<!-- Mgid Sensor -->
<script type="text/javascript">
    (function() {
        var d = document, w = window;
        w.MgSensorData = w.MgSensorData || [];
        w.MgSensorData.push({
            cid:403297,
            lng:"us",
            nosafari:true,
            project: "a.mgid.com"
        });
        var l = "a.mgid.com";
        var n = d.getElementsByTagName("script")[0];
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        var dt = !Date.now?new Date().valueOf():Date.now();
        s.src = "//" + l + "/mgsensor.js?d=" + dt;
        n.parentNode.insertBefore(s, n);
    })();
</script>
<!-- /Mgid Sensor -->
</body>
</html>