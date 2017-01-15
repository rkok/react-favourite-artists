import fetch from 'isomorphic-fetch';
import config from '../config/config';
import urlHelper from 'url'
import Artist from '../model/Artist';
import Song from '../model/Song';

const buildSearchUrl = (type, query) => {
  let urlObj = urlHelper.parse(config.spotify.baseUrl + "/search", true);
  urlObj.query.type = type;
  urlObj.query.q = query;
  return urlHelper.format(urlObj);
};

/**
 * @param {String} artistName
 * @returns {Artist}
 */
const getArtistByName = async artistName => {
  const url = buildSearchUrl('artist', artistName);

  // TODO: error handling
  const responseObj = await fetch(url);
  const result = await responseObj.json();

  return new Artist(result.artists.items[0]);
};

/**
 * @param {String} artist
 * @param {String} title
 * @returns {Promise.<Song>}
 */
const getSong = async (artist, title) => {
  const url = buildSearchUrl('track', `${title} artist:"${artist}"`);

  // TODO: error handling
  const responseObj = await fetch(url);
  const result = await responseObj.json();

  const track = result.tracks.items[0];
  return new Song({
    name: track.name,
    preview_url: track.preview_url
  });
};

export default {
  /**
   * @param {FavouriteArtist} favourite
   * @returns {Promise.<Artist>}
   */
  getArtistFromFavourite: async favourite => {
    const artist = await getArtistByName(favourite.name);
    artist.favouriteSong = await getSong(favourite.name, favourite.favouriteSong);
    return artist;
  },
}