const express = require('express')
const mssql = require('mssql')

const app = express()
const port = 3100

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

// mssql 연동

var config = {
    user: 'sa',
    password: 'admin123!@#',
    server: '192.168.0.116',
    database: 'nodeBBS',
    stream: true,
    options: {
        encrypt: false,
        trustServerCertificate: true,
        }
}

mssql.connect(config, function(err){
    if(err){
        return console.error('error : ', err);
    }
    console.log('MSSQL 연결 완료')
})

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname+'/views');
app.use("/public", express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.html')
})

app.get('/list', (req, res) => {
    var request = new mssql.Request();
    request.stream = true;
    
    qry = 'select * from board';
    request.query(qry, (err, recordset) => {
        if(err){
            return console.log('query error :',err)
        }
    });
    
    var result = [];
    request.on('error', function(err){
        console.log(err); 
    })
    .on('row', (row) => {
        result.push(row)
    })
    .on
    ('done', () => { // 마지막에 실행되는 부분
        console.log('result :', result)
        res.render('list.ejs',{'data' : result})
    });
});

app.get('/write', function(req, res){
    res.render('write');
})

app.post('/test', function(req, res){
    console.log(req.body.title, req.body.date)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})