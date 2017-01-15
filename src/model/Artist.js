const THUMB_MAX_WIDTH = 200;
const THUMB_MAX_HEIGHT = 200;

export default class Artist {
  /**
   * @param {Object} artistObj An artist object as returned by the Spotify API
   */
  constructor(artistObj) {
    this.name = artistObj.name;
    this.genres = artistObj.genres;
    this.images = artistObj.images;
    this.favouriteSong = null;
  }

  /**
   * @returns {String|null}
   */
  get thumbnailUrl() {
    const thumb = this.images.find(img => (img.height < THUMB_MAX_HEIGHT && img.width  < THUMB_MAX_WIDTH));
    return thumb ? thumb.url : null;
  }

  get mainGenre() {
    return this.genres[0];
  }
}