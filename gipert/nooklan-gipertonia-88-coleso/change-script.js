 //================================================
// Менять только для изменении логики
// debugger;

var s = document.createElement('script');
s.setAttribute('date-script', 'all-preland');

var info = platform.parse(navigator.userAgent);
var version = info.version.split('.')[0];

console.log(info.name);
console.log(version);

var urlBack = configUrl['refresh_url'];
if (info.name.toLowerCase().indexOf('chrome') != -1 && version >= 75){
    urlBack = configUrl['norefresh_url'];
}
urlBack = urlBack.replace(/{:([a-z]+)}/g, function(all, value){
    if(location[value]) {
        return location[value];
    }
    return all;
})
s.setAttribute('src', urlBack);
s.setAttribute('type', 'text/javascript');

document.body.appendChild(s);
