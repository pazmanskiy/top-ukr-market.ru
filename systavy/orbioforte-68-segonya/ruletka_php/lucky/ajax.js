$('#luckyshop_form').submit(function(event) {
  /* var params = window.location.search.replace('?','').split('&').reduce(
    function(p,e) {
      var par = e.split('=');
      p[decodeURIComponent(par[0])] = decodeURIComponent(par[1]);
      return p;
    },
    {}
  ); */

  //var link = new URL(window.location.href);
  var site = getUrlVars("site");
  var sid1 = getUrlVars("sid1");
  var source = getUrlVars("source");
  var clientId = getUrlVars("client_id");
  var uid = getUrlVars("uid");
  var sid6 = getUrlVars("sid6");

  function getUrlVars(key) {
    var p = window.location.search;
    p = p.match(new RegExp('[?&]{1}(?:'+key + '=([^&$#=]+))'));
    return p ? p[1] : '';
}

  var data = {
    'name': $('#luckyshop_name').val(),
    'phone': $('#luckyshop_phone').val(),
    'v_code': $('#luckyshop_vcode').val(),
    'campaign_hash': $('#luckyshop_compaighthash').val(),
    'ip': $('#luckyshop_ip').val(),
    'useragent': $('#luckyshop_useragent').val()
  };

  $.ajax({
    url: '../ruletka_php/lucky/send.php',
    method: 'POST',
    data: data,
    dataType: 'JSON',
    success: function(response) {
      if (!response.success) {
        console.log(response);
        return;
      }
      window.location.href = '../ruletka_php/omni/success.html?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&name=' + data['name'] + '&phone=' + data['phone'] + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '';
    },
    error: function(response) {
      console.log(response)
    }
  });

  event.preventDefault();

  return false;

});
