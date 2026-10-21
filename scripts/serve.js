// ローカル確認用の簡易サーバー: node scripts/serve.js . 5176
const http=require('http'),fs=require('fs'),path=require('path');
const root=process.argv[2],port=+process.argv[3];
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.png':'image/png','.svg':'image/svg+xml'};
http.createServer((req,res)=>{let p=decodeURIComponent(req.url.split('?')[0]);let f=path.join(root,p);
if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');
fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);return res.end('404');}res.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'});res.end(d);});
}).listen(port,()=>console.log('listening '+port));
