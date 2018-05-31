const express = require('express')
const router = express.Router();
const Record = require('../modules/models/record.schema');

//make some records 
const recordArray = [
    new Record (`Beatles`, `Abbey Road`, 1969, [`Rock`]),
    new Record (`Michael Jackson`, `Off the Wall`, 1979, [`Pop`]),
    new Record (`Prince`, `Purple Rain`, 1984, [`Pop`]),
    new Record (`Cibo Matto`, `Viva la Woman!`, 1990, [`JPop`]),
]
//making request from our record to 
router.get('/', (req,res) => {
    Record.find({})
    .then( (data) => {
        //we got stuff back from the databuse (no error)
        console.log('Got stuff back from mongo:', data);
        res.send(data);
    }).catch( error => {
    //Got an error from database
    console.log('Error from mongo:', error);
    res.sendStatus(500); //status for bad stuff happened

})});

router.post('/', (req, res) => {
    let recordData = req.body;
    console.log(`Got the record data from request: ${recordData}`);
    //Creat a new instance of our Model
    let newRecord = new Record (recordData);
    console.log(`New record is ${newRecord}`);
    //Save the new record model to the database
    newRecord.save()
    .then(() => {
        res.sendStatus(201);  
    })

.catch((error) => { //Bad stuff happened, but good servers still respond
console.log('Error adding record:', error);
res.sendStatus(500);
})});

router.delete('/', (req,res) => {
    //Delete doesn't use data, so we're going to use params instead
    //data is req.body
    // params is req.query
    console.log(`Id for request is ${req.query._id}`);
    
    Record.findByIdAndRemove(req.query._id)
    .then(() => {
        //Good servers always respond. Say OK
        res.sendStatus(200);
    })

.catch((error) => {
    console.log('Error removing record:', error);
})});

router.put('/', (req,res) => {
    //Put can send data, so getting id from req.body
    let recordData = req.body;
    record.findByIdAndUpdate(req.body._id, recordData)
    .then( ()=> {
        console.log(`Updated record with id ${recordData._id}`);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error updating record with id,', recordData._id, error);
        res.sendStatus(500);
    })
});

module.exports = router;