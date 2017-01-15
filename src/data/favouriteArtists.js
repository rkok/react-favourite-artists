import Artist from '../model/FavouriteArtist';

/**
 * Plaintext list of artists and favourite song, colon-delimited
 * Kept in plaintext for ease of maintenance
 * @type {string}
 */
const artistsRaw =
`Air:La Femme D'Argent
Boards of Canada:Olson
Cannibal Corpse:The Murderer's Pact
Colour Haze:Lights
Com Truise:84' Dreamin
Disasterpeace:Forgotten
Opeth:Atonement
Porcupine Tree:Mellotron Scratch
Radiohead:The Numbers
Steven Wilson:Home Invasion
Tame Impala:Apocalypse Dreams
Tiga:Shoes`;

/**
 * Map plaintext list of artists to array of FavouriteArtist objects by:
 *  1. Splitting by newline to get individual lines
 *  2. Splitting each line by colon to get name and favourite song
 * @param artistsRaw
 * @returns {FavouriteArtist[]}
 */
const mapArtists = (artistsRaw) => {
  return artistsRaw.split('\n').map((line) => {
    const lineFields = line.split(':');
    return new Artist({
      name: lineFields[0],
      favouriteSong: lineFields[1]
    });
  });
};

/**
 * @type {FavouriteArtist[]}
 */
export default mapArtists(artistsRaw);
