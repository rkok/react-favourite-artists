export default class Song {
  /**
   * @param {{name: string, preview_url: string}} songObj
   */
  constructor(songObj) {
    this.name = songObj.name;
    this.preview_url = songObj.preview_url;
  }
}