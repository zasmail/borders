import React, { Component } from 'react';
import {InstantSearch, Hits, SearchBox, Highlight} from 'react-instantsearch/dom';

const Hit = ({hit}) =>
  <p>
    {hit.name &&
      <Highlight attributeName='name' hit={hit}/>
    }
  </p>;

class BrandsSearch extends Component {
  render(){
    return (
      <Hits hitComponent={Hit} />
    )
  }
}
export default BrandsSearch;
