import React, {Component} from 'react';
import {connect} from 'react-redux'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.onInputChange = this
            .onInputChange
            .bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.vaue});
        // console.log(event.target.value);
    }

    render() {
        return (
            <form className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

export default SearchBar;
