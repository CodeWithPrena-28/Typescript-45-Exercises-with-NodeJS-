// Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and creating three variables with different values
var album1 = make_album("Prena", "Album title 1");
var album2 = make_album("Azmeena", "Album title 2");
// Calling a make_album function with third parameter
var album3 = make_album("Kadish", "Album title 3", 10);
// Printing the variable
console.log(album1);
console.log(album2);
console.log(album3);
