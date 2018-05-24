const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const Record = require(`./modules/record.class.js`);
app.use(express.static(`server/public`));
app.use(bodyParser.urlencoded({extended: true}));



//make some records 
const recordArray = [
    new Record (`Beatles`, `Abbey Road`, 1969, [`Rock`]),
    new Record (`Micheal Jackson`, `Off the Wall`, 1979, [`Pop`]),
    new Record (`Prince`, `Purple Rain`, 1984, [`Pop`]),
    new Record (`Cibo Matto`, `Viva la Woman!`, 1990, [`JPop`]),
]
//making request from our record to 
app.get(`/record`, (req,res) => {
    console.log('Handling my GET for /record');
    res.send(recordArray);
    console.log(res);
    
})


const port = 5000;
app.listen(port, () => console.log('listening on port,', port));

