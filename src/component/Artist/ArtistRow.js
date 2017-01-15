import React, { Component } from 'react';

class ArtistRow extends Component {
  render() {
    const artist = this.props.artist;
    return (
      <tr>
        <td>
          <img alt={artist.name} src={artist.thumbnailUrl} width="64" height="64" />
        </td>
        <td>{artist.name}</td>
        <td>{artist.mainGenre}</td>
        <td>{artist.favouriteSong.name}</td>
        <td>
          <audio controls>
            <source src={artist.favouriteSong.preview_url} />
          </audio>
        </td>
      </tr>
    );
  }
}

export default ArtistRow;