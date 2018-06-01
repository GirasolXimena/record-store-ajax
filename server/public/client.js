console.log('js');
let myApp = angular.module ( 'myApp', []);
// $(document).ready(onReady);

// function onReady() {
//     console.log('Client side Woot!');
//     getAllRecords();
//     $(`#submitButton`).on (`click`, function(event) {
//         event.preventDefault();
//         addRecord(getNewRecord());
//     })
// };
// function getNewRecord() {
//     let record = {
//     artist: $(`#recordNameInput`).val(),
//     album: $(`#albumNameInput`).val(),
//     year: $(`#yearInput`).val(),
//     genreList: $(`#genreInput`).val(),
//     }
//     return record;
// };

myApp.controller('RecordController', ['$http', function($http) {
    let vm = this;
    vm.records =[];
    console.log('ng');

    vm.records = [];



    // record
    vm.addRecord = function() {
        let newRecord = {
            artist: vm.artistIn,
            album: vm.albumIn,
            year: vm.yearIn,
            genreList: vm.genreListIn
        }
        $http({
            method: `POST`,
            url: `/record`,
            data: newRecord
        }).then(function (response) {
            console.log(response);
            vm.getAllRecords();
            vm.artistIn = '';
            vm.albumIn = '';
            vm.yearIn = '';
            vm.genreListIn = '';
        }).catch(function(error) {
            console.log('Something bad happened: ', error);
            
        })
    };

    vm.getAllRecords = function() {
        $http({
            method: `GET`,
            url: `/record`
        }).then(function(response) {
            console.log('Got response from the server', response);
            vm.records = response.data
            
        }).catch(function(error) {
            console.log('Error getting movies:', error);
            
        })


    }

    vm.removeRecord = function( index  ) {
        recordToDelete = vm.records[index];
        console.log(vm.records[index]._id);
        // $http({
        //     method: 'DELETE',
        //     url: `/record?_id=${recordToDelete._id}`
        // }).then(function(response) {
        //     console.log('deleted record', recordToDelete);
        //     vm.getAllRecords();
        // }).catch(function(error) {
        //     console.log('error deleting record', error);
            
        // })
    }
    vm.getAllRecords();    
}]);

//     vm.getRecord = function() {





// }])




// function displayAllRecords(recordArray) {
//     let $recordsTarget = $(`#records`);
//     $recordsTarget.empty();
//     for(let record of recordArray) {
//         $( `#records`).append(makeRowFor(record));
//     }
// };

// function makeRowFor(record) {
//     console.log(record);
    

//     let rowHtml = 
//     `<tr>
//     <td>${record.artist}</td>
//     <td>${record.album}</td>
//     <td>${record.year}</td>
//     <td>${record.genreList}</td>
//     </tr>`;
//     return rowHtml;

// };