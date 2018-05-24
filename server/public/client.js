$(document).ready(onReady);
console.log('js');

function onReady() {
    console.log('Client side Woot!');
    getAllRecords();
}

function displayAllRecords(recordArray) {
    let $recordsTarget = $(`#records`);
    $recordsTarget.empty();
    for(let record of recordArray) {
        $( `#records`).append(makeRowFor(record));
    }
}

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
}