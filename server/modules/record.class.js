class Record {

    constructor (artist, albumName, year, genreList){
        this.artist = artist;
        this.albumName = albumName;
        this.year = year;
        this.genreList = genreList;

    }
    addGenre(string) {
        //make sure that there is an array
        if (genreList == null) {
            genreList = []
        }
    //TODO - make sure we don't add the same one twice
    this.genreList.push(string);
    }
}

module.exports = Record;