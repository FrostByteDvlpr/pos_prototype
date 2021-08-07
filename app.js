let methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    express = require('express'),
    { Client, Environment } = require('square'),
    dotenv = require('dotenv'),
    app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
// register values from .env so process.env.X can work
dotenv.config();

// create square client
const client = new Client({
    environment: Environment.Sandbox,
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

app.get('/', (req, res) => {
    res.render('customer-lookup');
});

// get first customer in list from square api
app.get('/customers', async (req, res) => {
    const customersApi = client.customersApi;
    try {
        const { result, ...httpResponse } = await customersApi.listCustomers();
        // Get more response info...
        const { statusCode, headers } = httpResponse;
        console.log(statusCode, headers);
        console.log(result.customers);
        // dump first customer to the view
        res.render('customers-list', {'result': result.customers[0]});
      } catch(error) {
        // if (error instanceof ApiError) {
        //   const errors = error.result;
        //   // const { statusCode, headers } = error;
        // }
        console.log("ERRORRRRRRRR");
      }
})

app.listen(3000, () => {
    console.log('POS system online...')
});
