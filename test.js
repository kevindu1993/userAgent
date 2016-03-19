#!nodejs/bin/node

var UA = require("useragent");

var test_ua_str = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3';

var res_ua = new UA(test_ua_str);

/***************** handle browser *****************/
var ua_browser = res_ua['browser']['name'] || '';
var ua_bversion = '';
if (res_ua['browser']['version'] && res_ua['browser']['version']['original']){
    ua_bversion = res_ua['browser']['version']['original'];
}

/***************** handle engine *****************/
var ua_engine = res_ua['engine']['name'] || '';
var ua_engineV = '';
if (res_ua['engine']['version'] && res_ua['engine']['version']['original']){
    ua_engineV = res_ua['engine']['version']['original'];
}


/***************** handle os *****************/
var ua_osName = res_ua['os']['name'] || '';
var ua_osVersion = '';
if (res_ua['os']['version'] && res_ua['os']['version']['original']){
    ua_osVersion = res_ua['os']['version']['original'];
}


/***************** handle device *****************/
var device_type = res_ua['device']['type'] || '';
var device_model = res_ua['device']['model'] || '-';
var device_manufacturer = res_ua['device']['manufacturer'] || '-';

console.log(res_ua);
// console.log('get ua data from: \n'+ test_ua_str+'\n');
// console.log('handle browser: \n browser: ' + ua_browser + '\n browser_version: '+ua_bversion+'\n');
// console.log('handle engine: \n engine: ' + ua_engine + '\n engine_version: '+ua_engineV+'\n');
// console.log('handle OS: \n OS: ' + ua_osName + '\n OS_version: '+ua_osVersion+'\n');
// console.log('handle device: \n device_type: ' + device_type + '\n device_model: '+device_model+'\n device_manufacturer: ' + device_manufacturer + '\n');

