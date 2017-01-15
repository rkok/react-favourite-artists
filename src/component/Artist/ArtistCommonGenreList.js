import React, { Component } from 'react';

class ArtistCommonGenreList extends Component {
  /**
   * @param {Artist[]} artists
   */
  findGenreTopThree(artists) {
    // Get unique genres and occurrence count
    let genreOccurrences = {};

    artists.forEach(artist => {
      artist.genres.forEach(genre => {
        genreOccurrences[genre] = (genreOccurrences[genre] || 0) + 1;
      });
    });

    // Sort descending
    const genresSorted = Object.keys(genreOccurrences).sort(function (a, b) {
      return -(genreOccurrences[a] - genreOccurrences[b]);
    });

    return genresSorted.slice(0, 3);
  }

  render() {
    const genreItems = this.findGenreTopThree(this.props.artists)
      .map(genre => <li key={genre}>{genre}</li>);

    return (
      <div id="common-genre-list">
        <p>Meestvoorkomende genres volgens Spotify:</p>
        <ul>{genreItems}</ul>
      </div>
    );
  }
}

export default ArtistCommonGenreList;