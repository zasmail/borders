import React, { Component } from 'react';
import {InstantSearch, Hits, SearchBox, Highlight} from 'react-instantsearch/dom';
import {SearchInput} from "./SearchInput";

const appId = "LFZTZSZ5P9"
const apiKey = "f1c4e75168dc87c2b644cc74a9319cb8"

class SearchBar extends Component {
  constructor(props) {
   super(props);
   this.state = {
     searchState: props.searchState,
     onSearchStateChange: props.onSearchStateChange,
     focused: true
   };
 }
  render(){
    return (
      <InstantSearch
        appId={appId}
        apiKey={apiKey}
        indexName="products_updated"
        onSearchStateChange={this.props.onSearchStateChange}
      >
        <SearchBox searchBoxComponent={SearchInput} />
      </InstantSearch>

    )
  }
}
//
// const Search = ({helper}) =>
//   <input
//     className="search-box"
//     placeholder="Search here"
//     onChange={e => helper.setQuery(e.target.value).search()}
//     onFocus={this.onFocus}
//     onBlur={this.onBlur}
//   />
//
// const onFocus = () => {
//   console.log("focused");
//   this.setState({
//     focused: true
//   })
// }
//
// const onBlur = () => {
//   console.log("blur");
//   this.setState({
//     focused: false
//   })
// }
export default SearchBar;
