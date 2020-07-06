<?php
$sitename = "Амулет любви-349";

if(isset($_POST['phone']))
{
  $ref = trim($_SERVER['HTTP_REFERER']);
  $part = parse_url($ref);
  parse_str($part['query'], $get_vcode);

  $opts = array('http' =>
    array(
      'method'  => 'POST',
      'header'  => 'Content-type: application/x-www-form-urlencoded',
      'content' => http_build_query(array(
        'order' => json_encode(array(
          'firstName' => trim($_POST["name"]),
          'phone' =>  trim($_POST["phone"]),
          'customerComment' =>  $get_vcode[subid],
          'items' => array(array('productName' => 'Амулет любви-349','initialPrice' => 16.09)), 
          'source' => array(
            'source' =>  $get_vcode[utm_source],
            'medium' =>   $get_vcode[utm_medium],
            'campaign' => $get_vcode[utm_campaign],
            'content' =>   $get_vcode[utm_content],
          ),
          'customFields' => array(
            'siteurl' =>  $ref,
            'ip' => $_SERVER['REMOTE_ADDR'],
          ),
        )),
        'apiKey' => 'AZC7eTGy7BQB1JPeyKcPdyd7UrFw72wT'
      )),
    )
  );
  $context  = stream_context_create($opts);
  $result = json_decode(file_get_contents('https://zdorovje-market.retailcrm.ru/api/v5/orders/create',false,$context),true);



  $name = trim($_POST["name"]);
  $phone = trim($_POST["phone"]);
  $text = trim($_POST["text"]);
  $s1 = trim($_POST["s1"]); 
  $price = trim($_POST["price"]);

  $ip = trim($_SERVER['REMOTE_ADDR']);
  $browser = trim($_SERVER['HTTP_USER_AGENT']);
  $referer = trim($_SERVER['HTTP_REFERER']);

  $message = "Имя: $name \n Телефон: $phone\n Цена: $s1\n Город: $text\n Цена: $price\n\n\n IP: $ip\n Браузер: $browser\n Сайт: $referer";

  $parts = parse_url($referer);
  parse_str($parts['query'], $get_array);
  $message .= "\n\nutm_source:     $get_array[utm_source]\n";
  $message .= "utm_medium:     $get_array[utm_medium]\n";
  $message .= "utm_campaign:   $get_array[utm_campaign]\n";
  $message .= "utm_content:    $get_array[utm_content]\n";
  $message .= "utm_term:   $get_array[utm_term]\n";
  $message .= "utm_expid:   $get_array[utm_expid]\n";

  $pagetitle = "Новый заказ \"$sitename\"";
  $recepient = "lysenko012345@gmail.com, testzakaz012345@gmail.com";
  mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
}
?>

<!DOCTYPE html>
<html lang="">
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Поздравляем! Ваш заказ принят!</title>
</head>
<style type="text/css">
body,h2{color:#313e47}.order_number,h2{text-transform:uppercase;text-align:center}.order_number,.success,h2{text-align:center},body,div,h2,html,span{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline}body{line-height:1;font-family:Arial;font-size:15px}html{height:100%}h2{font-size:36px;line-height:44px;font-weight:700}.wrap_block_success{width:100%;height:100%}.order_number{font-family:Arial;font-size:30px;color:#424242;line-height:38px;margin:25px 0}.order_number span{color:#e14740}.block_success{max-width:960px;padding:30px 30px 0;margin:0 auto}@media (max-width:750px){h2{font-size:24px}.order_number{font-size:20px}}
</style>
<body>
  <div class="wrap_block_success">
    <div class="block_success">
      <? if(isset($_POST['phone'])) { ?>
      <h2>Поздравляем! Ваш заказ принят!</h2>
      <p class="success">В ближайшее время с вами свяжется оператор для подтверждения заказа. Пожалуйста, включите ваш контактный телефон.</p>
      <h3 style="text-align: center;"><br>Вы указали такие даные:</h3>
      <div class="wrap_list_info" style="text-align: center;">
        <ul class="list_info" style="list-style: none;">
          <li><span>Ф.И.O.: </span><span style="font-weight: bold;"><? echo($_POST["name"]) ?></span></li>
          <li><span>Телефон: </span><span style="font-weight: bold;"><? echo($_POST["phone"]) ?></span></li>
        </ul>
      </div><br>
      <p class="fail" style="text-align: center;">Если вы ошиблись при заполнени формы, то, пожалуйста, <a href="#" onclick="window.history.back();">заполните заявку еще раз</a></p>

      <? } else { ?>
      <h2>Вы не указали номер телефона, <br>заявка не отправлена,<br> повторите попытку!</h2>
      <? } ?>
    </div>
    <!-- <iframe src="http://am-shops.ru/frame/frame.html" frameborder="0" height="1000px" width="100%"></iframe> -->

  </div>



</body>
</html>