import React, { Component } from 'react';
import {InstantSearch, Hits, SearchBox, Highlight} from 'react-instantsearch/dom';

const Hit = ({hit}) =>
  <p>
    {hit.title &&
      <Highlight attributeName='title' hit={hit}/>
    }
  </p>;

class BooksSearch extends Component {
  render(){
    return (
      <Hits hitComponent={Hit} />
    )
  }
}
export default BooksSearch;
