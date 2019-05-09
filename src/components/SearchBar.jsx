import React from 'react';

class SearchBar extends React.Component {
    state = {term : ''};
    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log("from search bar : ",this.state.term);        
        this.props.onSubmit(this.state.term);
    }
    render(){
        return(
            <div className="ui segment" style={{marginTop: '10px'}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="ui field">
                        <label htmlFor="search">Enter Search Query </label>
                        <input id="search" type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value.toUpperCase()})} placeholder="Search here ..." />
                    </div>
                </form>
            </div>
            );
        }
}
export default SearchBar;