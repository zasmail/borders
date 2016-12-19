import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
   super(props);
   this.state = {
     helper: props.helper,
     onFocusInput: this.onFocusInput,
     onBlurInput: this.onBlurInput,
   };
 }
 onFocusInput = function(event){
   debugger;
   this.setState({
     focused: true
   })
 }
 onBlurInput = function(){
   debugger;
   this.setState({
     focused: false
   })
 }
  render(){
    return (
      <input
         className="search-box"
         placeholder="Search here"
         onChange={e => helper.setQuery(e.target.value).search()}
         onFocus={this.onFocus}
         onBlur={this.onBlur}
       />
      )
    }
  }


export default SearchInput;
