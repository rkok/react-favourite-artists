import React, { Component } from 'react';
import ArtistRow from './ArtistRow';
import ArtistTableHeading from './ArtistTableHeading';

class ArtistTable extends Component {
  render() {
    const rows = [];
    this.props.artists.forEach(artist => {
      rows.push(<ArtistRow artist={artist} key={artist.name} />);
    });

    return (
      <table>
        <thead>
          <ArtistTableHeading />
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default ArtistTable;