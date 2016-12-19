import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import SearchBar from './SearchBar';
import BooksSearch from './BooksSearch';
import ProductsSearch from './ProductsSearch';
import AuthorsSearch from './AuthorsSearch';
import BrandsSearch from './BrandsSearch';
import CategoriesSearch from './CategoriesSearch';

import Autosuggest from 'react-autosuggest';

import {connectSearchBox, connectMenu} from 'react-instantsearch/connectors'
import {InstantSearch, Hits, SearchBox, Highlight, RefinementList} from 'react-instantsearch/dom';

const searchBoxRef = "instantSearchBox";

class Search extends Component {
  constructor(props) {
   super(props);

   this.state = {
     open: false,
     searchState: {
       searchBoxElement: ReactDOM.findDOMNode(this.refs.instantSearchBox),
     },
     hits: {},
     query: {},
   };
 }

 handleTouchTap = (event) => {
   // This prevents ghost click.
   event.preventDefault();
   this.setState({
     open: true,
     anchorEl: event.currentTarget,
   });
 };

 handleRequestClose = () => {
   this.setState({
     open: false,
   });
 };

 onSearchStateChange(searchState) {
  this.setState({searchState});
}

 render() {
   return (
     <div>
       <RaisedButton
         onTouchTap={this.handleTouchTap}
         label="Click me"
       />
       <Popover
         open={this.state.open}
         anchorEl={this.state.searchBoxElement}
         anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
         targetOrigin={{horizontal: 'left', vertical: 'top'}}
         onRequestClose={this.handleRequestClose}
       >
         <Menu>
           <MenuItem><BookResults searchState={this.state.searchState}/></MenuItem>
           <MenuItem primaryText="Refresh" />
           <MenuItem primaryText="Help &amp; feedback" />
           <MenuItem primaryText="Settings" />
           <MenuItem primaryText="Sign out" />
         </Menu>
       </Popover>
       <SearchBar onSearchStateChange={this.onSearchStateChange.bind(this)} ref={searchBoxRef} />
       <table>
        <tr>
          <th>Books:</th>
          <th>Products:</th>
          <th>Authors:</th>
          <th>Brands:</th>
          <th>Categores:</th>
        </tr>
        <tr>
          <th><BookResults searchState={this.state.searchState}/></th>
          <th><ProductResults searchState={this.state.searchState}/></th>
          <th><AuthorResults searchState={this.state.searchState}/></th>
          <th><BrandResults searchState={this.state.searchState}/></th>
          <th><CategoriesResults searchState={this.state.searchState}/></th>
        </tr>
      </table>
     </div>
   );
 }
}

const appId = "LFZTZSZ5P9"
const apiKey = "f1c4e75168dc87c2b644cc74a9319cb8"
const VirtualSearchBox = connectSearchBox(() => null);
const VirtualMenu = connectMenu(() => null);
const OnlyBooks = () => <VirtualMenu attributeName="RecordType" defaultRefinement="Book"/>;
const NoBooks = () => <VirtualMenu attributeName="RecordType" defaultRefinement="-Book"/>;

// const SearchBar = props =>
//   <InstantSearch
//     appId={appId}
//     apiKey={apiKey}
//     indexName="products_updated"
//     searchState={props.searchState}
//     onSearchStateChange={props.onSearchStateChange}
//   >
//     <SearchBox />
//   </InstantSearch>;

const BookResults = props =>
  <InstantSearch
    appId={appId}
    apiKey={apiKey}
    indexName="products_updated"
    searchState={props.searchState}
  >
    <OnlyBooks />
    <VirtualSearchBox/>
    <BooksSearch />
  </InstantSearch>;

const ProductResults = props =>
  <InstantSearch
    appId={appId}
    apiKey={apiKey}
    indexName="products_updated"
    searchState={props.searchState}
  >
    <NoBooks />
    <VirtualSearchBox/>
    <ProductsSearch />
  </InstantSearch>;

const AuthorResults = props =>
  <InstantSearch
    appId={appId}
    apiKey={apiKey}
    indexName="authors"
    searchState={props.searchState}
  >
    <VirtualSearchBox/>
    <AuthorsSearch />
  </InstantSearch>;

const BrandResults = props =>
  <InstantSearch
    appId={appId}
    apiKey={apiKey}
    indexName="brands"
    searchState={props.searchState}
  >
    <VirtualSearchBox/>
    <BrandsSearch />
  </InstantSearch>;

const CategoriesResults = props =>
  <InstantSearch
    appId={appId}
    apiKey={apiKey}
    indexName="categories"
    searchState={props.searchState}
  >
    <VirtualSearchBox/>
    <CategoriesSearch />
  </InstantSearch>;

export default Search;
