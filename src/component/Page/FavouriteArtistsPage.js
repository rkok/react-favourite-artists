import React, { Component } from 'react';
import ArtistCommonGenreList from '../Artist/ArtistCommonGenreList';
import ArtistTable from '../Artist/ArtistTable';
import spotify from '../../api/spotify';
import './FavouriteArtistsPage.css';
import flame from './flame.gif';
import open24hours from './open24hours.gif';
import divider from './divider.gif';

class FavouriteArtistsPage extends Component {
  state = {
    artists: []
  };

  loadData() {
    const artistGetters = this.props.favourites.map(
      favourite => spotify.getArtistFromFavourite(favourite)
    );

    Promise.all(artistGetters).then(artists => {
      this.setState({artists});
    });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div id="favourite-artists-page">
        <div id="viewport">
          <div id="header">
            <marquee>
              <img alt="flame" src={flame} />
              <span>Roberto's <blink>favoriete</blink> artiesten</span>
              <img alt="flame" src={flame} />
            </marquee>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}><img alt="divider" src={divider} /></div>
          <ArtistCommonGenreList artists={this.state.artists} />
          <ArtistTable artists={this.state.artists} />
          <div style={{display: 'flex', justifyContent: 'center'}}><img alt="open 24 hours" src={open24hours} /></div>
        </div>
      </div>
    );
  }
}

export default FavouriteArtistsPage;