<?php

$phone = preg_replace("/[^0-9]/", "", $_POST["phone"]);

if (isset($phone) && strlen($phone) > 9 && strlen($phone) < 16) {

  $name    = $_POST["name"];

  $context  = stream_context_create(array(
    'http' =>
    array(
      'method'  => 'POST',
      'header'  => 'Content-type: application/x-www-form-urlencoded',
      'content' => http_build_query(
        array(
          'Name' => $name,
          'Phone' =>  $phone,
          'OfferId' =>  $_POST["offerId"],
          'Price' =>  $_POST["price"],
          'ProductName' =>  $_POST["productName"],
          'Referer' => $_SERVER['HTTP_REFERER'],
          'Ip' => $_SERVER['REMOTE_ADDR']
        )
      )
    )
  ));
  $result = json_decode(file_get_contents('https://order.el-slim.in.ua/create-order', false, $context), true);
}

?>

<!DOCTYPE html>
<html lang="">
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Поздравляем! Ваш заказ принят!</title>
  <img src="//recreativ.ru/cs/01/3Qsx1EuGAU" width="1" height="1">
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

  <script type="text/javascript" id="adpartner_init">
    var adexQ = adexQ || [];
    ! function(e) {
      var t = e.createElement("script");
      t.type = "text/javascript", t.async = !0, t.src = "//a4p.adpartner.pro/tracker/script?id=408";
      var r = e.getElementById("adpartner_init");
      r.parentNode.insertBefore(t, r)
    }(window.document);
  </script>

  <div class="wrap_block_success">
    <div class="block_success">
      <? if (isset($phone) && strlen($phone) > 9 && strlen($phone) < 13) { ?>   
        <script>function getUclick_c(){var e=document.cookie.match(new RegExp("(?:^|; )"+"uclick"+"=([^;]*)"));return e?decodeURIComponent(e[1]):void 0}function cnv_pixel(){var e="https://tracker.el-slim.in.ua/",n=document.createElement("img");"function"==typeof window.getUclick_c?n.src=e+"click.php?cnv_id=OPTIONAL&payout=OPTIONAL&uclick="+getUclick_c():n.src=e+"click.php?cnv_id=OPTIONAL&payout=OPTIONAL"}cnv_pixel();</script>
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
  </div>
</body>
</html>