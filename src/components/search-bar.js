import React, { Component } from 'react'


class SearchBar  extends Component {
    constructor(props) {
        super(props);
        this.state = {searchText:'', placeholder:'Tapez votre film...'}
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-8">
                    <input tupe="text" className="form-control input-lg" onChange={this.handleChange.bind(this)} placeholder= {this.state.placeholder}/>
                </div>
            </div>
        )
    }

    handleChange(event){
        // console.log('----------------')
        // console.log(event.target.value)
        // console.log('----------------')
        this.setState({searchText:event.target.value})
    }
}

export default SearchBar;