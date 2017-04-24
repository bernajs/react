import React, {Component} from 'react';
import BookDetail from '../containers/book-detail'
import BookList from '../containers/book-list'

import CardDetail from '../containers/card-detail'
import CardList from '../containers/card-list'

import SearchBar from '../containers/search_bar'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar></SearchBar>
      </div>
    );
  }
}
