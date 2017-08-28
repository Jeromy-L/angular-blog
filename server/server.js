const http = require('http');

http.createServer((req, res) => {
  req.on('error', (err) => {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });
  res.on('error', (err) => {
    console.error(err);
  });
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  var articles = [
    {
        "title":"北三彭于晏自传",
        "category":"传记",
        "date":"2017-08-26",
        "content":"陈子么安徽覅大煞风景爱上了的积分好色韩国咦而撒地方撒大哥可能是打发红烧冬瓜"
    },
    {
        "title":"北三彭于晏自传",
        "category":"传记",
        "date":"2017-08-26",
        "content":"陈子么安徽覅大煞风景爱上了的积分好色韩国咦而撒地方撒大哥可能是打发红烧冬瓜"
    }
    
];
  res.end(JSON.stringify({ articles: articles })); 
  
}).listen(3000);
console.log("It's starting")