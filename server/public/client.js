console.log('js');

$(document).ready(onReady);

function onReady() {
    console.log('Client side Woot!');
    getAllRecords();
    $(`#submitButton`).on (`click`, function(event) {
        event.preventDefault();
        addRecord(getNewRecord());
    })
};
function getNewRecord() {
    let record = {
    artist: $(`#recordNameInput`).val(),
    album: $(`#albumNameInput`).val(),
    year: $(`#yearInput`).val(),
    genre: $(`#genreInput`).val(),
    }
    return record;
};

function addRecord(record) {
    $.ajax({
        method: `POST`,
        url: `/record`,
        data: record
    }).then(function (response) {
        console.log(response);
        
        getAllRecords();
    }).catch(function(error) {
        console.log('Something bad happened: ', error);
        
    })
};

function displayAllRecords(recordArray) {
    let $recordsTarget = $(`#records`);
    $recordsTarget.empty();
    for(let record of recordArray) {
        $( `#records`).append(makeRowFor(record));
    }
};

function makeRowFor(record) {
    

    let rowHtml = 
    `<tr>
    <td>${record.artist}</td>
    <td>${record.albumName}</td>
    <td>${record.year}</td>
    <td>${record.genreList.join(`, `)}</td>
    </tr>`;
    return rowHtml;

};

function getAllRecords(){
    $.ajax({
        method: `GET`,
        url: `/record`
    }).then(function(response) {
        displayAllRecords(response);
    })
};