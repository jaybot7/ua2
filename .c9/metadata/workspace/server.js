{"filter":false,"title":"server.js","tooltip":"/server.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":25,"column":11},"end":{"row":25,"column":25},"action":"remove","lines":["response.send("],"id":1405,"ignore":true},{"start":{"row":25,"column":28},"end":{"row":25,"column":29},"action":"remove","lines":[")"]}],[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":1409}],[{"start":{"row":12,"column":0},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":1410}],[{"start":{"row":11,"column":0},"end":{"row":12,"column":44},"action":"insert","lines":["var requestLanguage = require('express-request-language');","var cookieParser = require('cookie-parser');"],"id":1411}],[{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"remove","lines":["",""],"id":1412}],[{"start":{"row":22,"column":0},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":1413}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":24},"action":"insert","lines":["app.use(cookieParser());"],"id":1414}],[{"start":{"row":23,"column":0},"end":{"row":30,"column":4},"action":"insert","lines":["app.use(requestLanguage({","  languages: ['en-US', 'zh-CN'],","  cookie: {","    name: 'language',","    options: { maxAge: 24*3600*1000 },","    url: '/languages/{language}'","  }","}));"],"id":1415}],[{"start":{"row":30,"column":4},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":1416}],[{"start":{"row":36,"column":29},"end":{"row":37,"column":0},"action":"insert","lines":["",""],"id":1417},{"start":{"row":37,"column":0},"end":{"row":37,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":37,"column":2},"end":{"row":39,"column":3},"action":"insert","lines":["app.get('/', function(req, res, next) {","  console.log(req.language); // 'en-US'","});"],"id":1418}],[{"start":{"row":38,"column":18},"end":{"row":38,"column":26},"action":"remove","lines":["language"],"id":1419}],[{"start":{"row":37,"column":2},"end":{"row":39,"column":3},"action":"remove","lines":["app.get('/', function(req, res, next) {","  console.log(req.); // 'en-US'","});"],"id":1420}],[{"start":{"row":37,"column":2},"end":{"row":37,"column":3},"action":"insert","lines":["v"],"id":1421}],[{"start":{"row":37,"column":3},"end":{"row":37,"column":4},"action":"insert","lines":["a"],"id":1422}],[{"start":{"row":37,"column":4},"end":{"row":37,"column":5},"action":"insert","lines":["r"],"id":1423}],[{"start":{"row":37,"column":5},"end":{"row":37,"column":6},"action":"insert","lines":[" "],"id":1424}],[{"start":{"row":37,"column":6},"end":{"row":37,"column":7},"action":"insert","lines":["l"],"id":1425}],[{"start":{"row":37,"column":7},"end":{"row":37,"column":8},"action":"insert","lines":["a"],"id":1426}],[{"start":{"row":37,"column":8},"end":{"row":37,"column":9},"action":"insert","lines":["n"],"id":1427}],[{"start":{"row":37,"column":9},"end":{"row":37,"column":10},"action":"insert","lines":["g"],"id":1428}],[{"start":{"row":37,"column":10},"end":{"row":37,"column":11},"action":"insert","lines":[" "],"id":1429}],[{"start":{"row":37,"column":11},"end":{"row":37,"column":12},"action":"insert","lines":["="],"id":1430}],[{"start":{"row":37,"column":12},"end":{"row":37,"column":13},"action":"insert","lines":[" "],"id":1431}],[{"start":{"row":37,"column":13},"end":{"row":37,"column":21},"action":"insert","lines":["language"],"id":1432}],[{"start":{"row":37,"column":13},"end":{"row":37,"column":14},"action":"insert","lines":["r"],"id":1433}],[{"start":{"row":37,"column":14},"end":{"row":37,"column":15},"action":"insert","lines":["e"],"id":1434}],[{"start":{"row":37,"column":15},"end":{"row":37,"column":16},"action":"insert","lines":["q"],"id":1435}],[{"start":{"row":37,"column":16},"end":{"row":37,"column":17},"action":"insert","lines":["u"],"id":1436}],[{"start":{"row":37,"column":17},"end":{"row":37,"column":18},"action":"insert","lines":["e"],"id":1437}],[{"start":{"row":37,"column":18},"end":{"row":37,"column":19},"action":"insert","lines":["s"],"id":1438}],[{"start":{"row":37,"column":19},"end":{"row":37,"column":20},"action":"insert","lines":["t"],"id":1439}],[{"start":{"row":37,"column":20},"end":{"row":37,"column":21},"action":"insert","lines":["."],"id":1440}],[{"start":{"row":37,"column":29},"end":{"row":37,"column":30},"action":"insert","lines":[";"],"id":1441}],[{"start":{"row":40,"column":4},"end":{"row":41,"column":0},"action":"insert","lines":["",""],"id":1442},{"start":{"row":41,"column":0},"end":{"row":41,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":40,"column":4},"end":{"row":40,"column":28},"action":"insert","lines":["mapper.software = ua.os;"],"id":1443}],[{"start":{"row":40,"column":11},"end":{"row":40,"column":19},"action":"remove","lines":["software"],"id":1444},{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"insert","lines":["l"]}],[{"start":{"row":40,"column":12},"end":{"row":40,"column":13},"action":"insert","lines":["a"],"id":1445}],[{"start":{"row":40,"column":13},"end":{"row":40,"column":14},"action":"insert","lines":["n"],"id":1446}],[{"start":{"row":40,"column":14},"end":{"row":40,"column":15},"action":"insert","lines":["g"],"id":1447}],[{"start":{"row":40,"column":15},"end":{"row":40,"column":16},"action":"insert","lines":["u"],"id":1448}],[{"start":{"row":40,"column":16},"end":{"row":40,"column":17},"action":"insert","lines":["a"],"id":1449}],[{"start":{"row":40,"column":17},"end":{"row":40,"column":18},"action":"insert","lines":["g"],"id":1450}],[{"start":{"row":40,"column":18},"end":{"row":40,"column":19},"action":"insert","lines":["e"],"id":1451}],[{"start":{"row":40,"column":23},"end":{"row":40,"column":24},"action":"remove","lines":["a"],"id":1452}],[{"start":{"row":40,"column":22},"end":{"row":40,"column":23},"action":"remove","lines":["u"],"id":1453}],[{"start":{"row":40,"column":22},"end":{"row":40,"column":23},"action":"insert","lines":["l"],"id":1454}],[{"start":{"row":40,"column":23},"end":{"row":40,"column":24},"action":"insert","lines":["a"],"id":1455}],[{"start":{"row":40,"column":24},"end":{"row":40,"column":25},"action":"insert","lines":["n"],"id":1456}],[{"start":{"row":40,"column":25},"end":{"row":40,"column":26},"action":"insert","lines":["g"],"id":1457}],[{"start":{"row":40,"column":28},"end":{"row":40,"column":29},"action":"remove","lines":["s"],"id":1458}],[{"start":{"row":40,"column":27},"end":{"row":40,"column":28},"action":"remove","lines":["o"],"id":1459}],[{"start":{"row":40,"column":26},"end":{"row":40,"column":27},"action":"remove","lines":["."],"id":1460}],[{"start":{"row":40,"column":26},"end":{"row":40,"column":27},"action":"insert","lines":["]"],"id":1461}],[{"start":{"row":40,"column":27},"end":{"row":40,"column":28},"action":"insert","lines":["0"],"id":1462}],[{"start":{"row":40,"column":28},"end":{"row":40,"column":29},"action":"insert","lines":["\\"],"id":1463}],[{"start":{"row":40,"column":29},"end":{"row":40,"column":30},"action":"remove","lines":[";"],"id":1464}],[{"start":{"row":40,"column":28},"end":{"row":40,"column":29},"action":"remove","lines":["\\"],"id":1465}],[{"start":{"row":40,"column":27},"end":{"row":40,"column":28},"action":"remove","lines":["0"],"id":1466}],[{"start":{"row":40,"column":26},"end":{"row":40,"column":27},"action":"remove","lines":["]"],"id":1467}],[{"start":{"row":40,"column":26},"end":{"row":40,"column":27},"action":"insert","lines":["]"],"id":1468}],[{"start":{"row":40,"column":26},"end":{"row":40,"column":27},"action":"remove","lines":["]"],"id":1469}],[{"start":{"row":40,"column":26},"end":{"row":40,"column":27},"action":"insert","lines":["["],"id":1470}],[{"start":{"row":40,"column":27},"end":{"row":40,"column":28},"action":"insert","lines":["0"],"id":1471}],[{"start":{"row":40,"column":28},"end":{"row":40,"column":29},"action":"insert","lines":["\\"],"id":1472}],[{"start":{"row":40,"column":28},"end":{"row":40,"column":29},"action":"remove","lines":["\\"],"id":1473}],[{"start":{"row":40,"column":28},"end":{"row":40,"column":29},"action":"insert","lines":["]"],"id":1474}],[{"start":{"row":40,"column":29},"end":{"row":40,"column":30},"action":"insert","lines":[";"],"id":1475}],[{"start":{"row":40,"column":19},"end":{"row":40,"column":20},"action":"insert","lines":["]"],"id":1477}],[{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"remove","lines":["."],"id":1478}],[{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"insert","lines":["]"],"id":1479}],[{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"remove","lines":["]"],"id":1480}],[{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"insert","lines":["["],"id":1481}],[{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"insert","lines":["@"],"id":1482}],[{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"remove","lines":["["],"id":1483}],[{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"insert","lines":[":"],"id":1484}],[{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"remove","lines":["@"],"id":1485}],[{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"remove","lines":[":"],"id":1486}],[{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"insert","lines":["["],"id":1487}],[{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"insert","lines":[":"],"id":1488}],[{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"remove","lines":[":"],"id":1489}],[{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"insert","lines":["\""],"id":1490}],[{"start":{"row":40,"column":20},"end":{"row":40,"column":21},"action":"insert","lines":["\""],"id":1491}],[{"start":{"row":40,"column":31},"end":{"row":40,"column":32},"action":"remove","lines":["]"],"id":1492}],[{"start":{"row":40,"column":30},"end":{"row":40,"column":31},"action":"remove","lines":["0"],"id":1493}],[{"start":{"row":40,"column":29},"end":{"row":40,"column":30},"action":"remove","lines":["["],"id":1494}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":35},"action":"remove","lines":["  //var temp = parseThat(pathname);"],"id":1495}],[{"start":{"row":41,"column":4},"end":{"row":42,"column":0},"action":"remove","lines":["",""],"id":1496}],[{"start":{"row":34,"column":0},"end":{"row":34,"column":31},"action":"remove","lines":["  //var pathname = request.url;"],"id":1497}],[{"start":{"row":33,"column":48},"end":{"row":34,"column":0},"action":"remove","lines":["",""],"id":1498}],[{"start":{"row":44,"column":0},"end":{"row":45,"column":22},"action":"remove","lines":["  // Build the answer","  //var answer = temp;"],"id":1499}],[{"start":{"row":43,"column":2},"end":{"row":44,"column":0},"action":"remove","lines":["",""],"id":1500}],[{"start":{"row":43,"column":1},"end":{"row":43,"column":2},"action":"remove","lines":[" "],"id":1501}],[{"start":{"row":43,"column":0},"end":{"row":43,"column":1},"action":"remove","lines":[" "],"id":1502}],[{"start":{"row":42,"column":0},"end":{"row":43,"column":0},"action":"remove","lines":["",""],"id":1503}],[{"start":{"row":41,"column":40},"end":{"row":42,"column":0},"action":"remove","lines":["",""],"id":1504}],[{"start":{"row":1,"column":0},"end":{"row":4,"column":8},"action":"remove","lines":["var mapper = {\"ipaddress\":\"\",","\t\t\t\t\t\t\t\"language\":\"\",","\t\t\t\t\t\t\t\"software\":\"\"","\t\t\t\t\t\t\t}"],"id":1505}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["// variables and stuff","",""],"id":1506}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":1507}],[{"start":{"row":30,"column":30},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":1511},{"start":{"row":31,"column":0},"end":{"row":31,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":31,"column":2},"end":{"row":34,"column":8},"action":"insert","lines":["var mapper = {\"ipaddress\":\"\",","\t\t\t\t\t\t\t\"language\":\"\",","\t\t\t\t\t\t\t\"software\":\"\"","\t\t\t\t\t\t\t}"],"id":1512}]]},"ace":{"folds":[],"scrolltop":409,"scrollleft":0,"selection":{"start":{"row":34,"column":8},"end":{"row":34,"column":8},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":21,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1464614040614,"hash":"1a1b5a6923d1d651430352ac84b03e0314a2b9f6"}