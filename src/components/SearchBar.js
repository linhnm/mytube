import React, {Component} from 'react';
import {form, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
export default class SearchBar extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {value: ''};
	}

  getValidationState = () => {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    // else if (length > 3) return 'warning';
    else if (length > 0) return 'success';
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.onSearchTermChange(e.target.value);
  }

	render = () => {
		return (
		<form className="search-bar">
	        <FormGroup
	          controlId="formBasicText"
	          validationState={this.getValidationState()}
	        >
	          <FormControl
	            type="text"
	            value={this.state.value}
	            placeholder="Search ..."
	            onChange={this.handleChange}
	          />
	          <FormControl.Feedback />
	        </FormGroup>
	     </form>
		);
	}
}
