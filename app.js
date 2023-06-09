const express = require('express')

const app = express()
const port = process.env.PORT || 3100;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));


app.engine('html', require('ejs').renderFile);
app.set('views', __dirname+'/views');
app.use("/public", express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.html')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})