// Difine the make_album Function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    }

    if(tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}

// Calling three functions and creating three veriables with different values

let album1 = make_album("Mariam", "Album title 1");

let album2 = make_album("Mahnoor", "Album title 2");

// Calling a make abum_function with third perameter

let album3 = make_album("Roman", "Album title 3", 10);

// printing values of our object created my function

console.log(album1);

console.log(album2);

console.log(album3);