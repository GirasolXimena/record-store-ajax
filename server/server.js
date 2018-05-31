const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
app.use(express.static(`server/public`));
app.use(bodyParser.urlencoded({extended: true}));

const recordRouter = require('./router/record.router');
app.use('/record', recordRouter);

const port = 5000;
app.listen(port, () => console.log('listening on port,', port));

