import React from 'react';
import ReactDOM from 'react-dom';
import FavouriteArtistsPage from './component/Page/FavouriteArtistsPage';
import favourites from './data/favouriteArtists';
import './index.css';

ReactDOM.render(
  <FavouriteArtistsPage favourites={favourites} />,
  document.getElementById('root')
);
