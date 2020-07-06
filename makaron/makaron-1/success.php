<?php

include 'file.php';

$phone = preg_replace("/[^0-9]/", "", $_POST["phone"]);

if (isset($phone) && strlen($phone) > 9 && strlen($phone) < 16) {

  $name    = $_POST["name"];
  $product = $_POST["productName"];
  $price   = $_POST["price"];
  $ip      = $_SERVER['REMOTE_ADDR'];
  $referer = $_SERVER['HTTP_REFERER'];

  sendToFile($name, $phone, $ip, $referer, $product . " - " . $price);


?>

<!DOCTYPE html>
<html lang="">
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
<!-- Facebook Pixel Code -->
<script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '195599935119735');
    fbq('track', 'PageView');
    fbq('track', 'Lead');
</script>
<noscript><img height="1" width="1" style="display:none"
               src="https://www.facebook.com/tr?id=195599935119735&ev=PageView&noscript=1"
    /></noscript>
<!-- End Facebook Pixel Code -->
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Поздравляем! Ваш заказ принят!</title>


</head>
<style type="text/css">
  body,
  h2 {
    color: #313e47
  }

  .order_number,
  h2 {
    text-transform: uppercase;
    text-align: center
  }

  .order_number,
  .success,
  h2 {
    text-align: center
  }

  ,
  body,
  div,
  h2,
  html,
  span {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline
  }

  body {
    line-height: 1;
    font-family: Arial;
    font-size: 15px
  }

  html {
    height: 100%
  }

  h2 {
    font-size: 36px;
    line-height: 44px;
    font-weight: 700
  }

  .wrap_block_success {
    width: 100%;
    height: 100%
  }

  .order_number {
    font-family: Arial;
    font-size: 30px;
    color: #424242;
    line-height: 38px;
    margin: 25px 0
  }

  .order_number span {
    color: #e14740
  }

  .block_success {
    max-width: 960px;
    padding: 30px 30px 0;
    margin: 0 auto
  }

  @media (max-width:750px) {
    h2 {
      font-size: 24px
    }

    .order_number {
      font-size: 20px
    }
  }
</style>

<body>


  <? if (isset($_POST['phone']) && strlen($_POST['phone']) > 9) { ?>


  <? } ?>
  <div class="wrap_block_success">
    <div class="block_success">
      <? if (isset($phone) && strlen($phone) > 9 && strlen($phone) < 13) { ?>
        <h2>Поздравляем! Ваш заказ принят!</h2>
        <p class="success">В ближайшее время с вами свяжется оператор для подтверждения заказа. Пожалуйста, включите ваш контактный телефон.</p>
        <h3 style="text-align: center;"><br>Вы указали такие данные:</h3>
        <div class="wrap_list_info" style="text-align: center;">
          <ul class="list_info" style="list-style: none;">
            <li><span>Ф.И.O.: </span><span style="font-weight: bold;"><? echo ($name) ?></span></li>
            <li><span>Телефон: </span><span style="font-weight: bold;"><? echo ($phone) ?></span></li>
          </ul>
        </div><br>
        <p class="fail" style="text-align: center;">Если вы ошиблись при заполнении формы, то, пожалуйста, <a href="#" onclick="window.history.back();">заполните заявку еще раз</a></p>

      <? } else { ?>
        <h2>Вы не указали номер телефона, <br>заявка не отправлена,<br> повторите попытку!</h2>
      <? } ?>
    </div>
    <!-- <iframe src="http://am-shops.ru/frame/frame.html" frameborder="0" height="1000px" width="100%"></iframe> -->
  </div>
</body>

</html>