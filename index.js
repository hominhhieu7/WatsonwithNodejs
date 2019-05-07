const express = require("express");
const app = express();
require('dotenv').config();

const bodyParser = require('body-parser');

DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonconfig = () => ({
    parameterLimit: DEFAULT_BODY_SIZE_LIMIT,
    limit: DEFAULT_BODY_SIZE_LIMIT
})

const ask = require("./controller").ask;

app.use(bodyParser.json(bodyParserJsonconfig()));
app.post("/ask", ask);

configHeader = (req, res, next) => {
    //Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    //Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    // res.setHeader('Content-Type','application/json');

    //Request headers you wish to allow
    res.setHeader('Access - Control - Allow - Method', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Pass to next layer of middleware
    next();
}

const port = 3001;

app.listen(port, () => {
    console.log(`Open http://localhost:${port} to see results`);

})