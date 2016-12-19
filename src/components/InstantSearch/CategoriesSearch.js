import React, { Component } from 'react';
import {InstantSearch, Hits, SearchBox, Highlight} from 'react-instantsearch/dom';

const Hit = ({hit}) =>
  <p>
    {hit.hierarchicalCategories.lvl0 &&
      <Highlight attributeName='hierarchicalCategories.lvl0' hit={hit}/>
    }
    {hit.hierarchicalCategories.lvl1 &&
      <Highlight attributeName='hierarchicalCategories.lvl1' hit={hit}/>
    }
  </p>;

class Categories extends Component {
  render(){
    return (
      <Hits hitComponent={Hit} />
    )
  }
}
export default Categories;
