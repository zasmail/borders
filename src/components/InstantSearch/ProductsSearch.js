import React, { Component } from 'react';
import {InstantSearch, Hits, SearchBox, Highlight} from 'react-instantsearch/dom';

const Hit = ({hit}) =>
  <p>
    {hit.Name_en &&
      <Highlight attributeName='Name_en' hit={hit}/>
    }
  </p>;

class ProductsSearch extends Component {
  render(){
    return (
      <Hits hitComponent={Hit} />
    )
  }
}
export default ProductsSearch;
