import React, { Component } from 'react';

class ArtistTableHeading extends Component {
  render() {
    return (
      <tr>
        <th colSpan="2">Artiest</th>
        <th>Hoofdgenre</th>
        <th>Favoriete liedje</th>
        <th>Preview</th>
      </tr>
    );
  }
}

export default ArtistTableHeading;