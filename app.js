let methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    express = require('express'),
    app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('customer-lookup');
});

app.listen(3000, () => {
    console.log('POS system online...')
});
