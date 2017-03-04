const noteRegex = /([ABCDEFG][b#]?)(?:\*([0-9]))?/i ;

let parseNote = function(note){
 const [ ,pitch,beats = 1] = noteRegex.exec(note); //DESTRUCTURING
 return {pitch, beats}
};
let parseSong = function(song){
 return song.split(/ +/).map(parseNote)
}

const song = window.prompt('enter notes')
console.log(parseSong(song));

let parseNplay = function(song){
 playSong(parseSong(song), 120)
}

parseNplay(song)
