export default class FavouriteArtist {
  /**
   * @param {{name: string, favouriteSong: string}} artistObj
   */
  constructor(artistObj) {
    this.name = artistObj.name;
    this.favouriteSong = artistObj.favouriteSong;
  }
}