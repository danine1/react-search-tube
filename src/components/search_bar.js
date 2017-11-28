import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        //in the constructor we say this.state = an object which is term which is an empty string
        this.state = { term: '' };
    }

    render() {
        //everywhere else inside of our component to change our state we use this.setState
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>  
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;