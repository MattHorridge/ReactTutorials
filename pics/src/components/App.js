import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
    state = { images:[] };

     onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query: term
            },
            headers: {
                Authorization: 'Client-ID 8bc89a78133c938bf64d755a65109938d15d3c798b426272726f7a6d6e44ff74'
            }
        });

       this.setState({images: response.data.results});
    }


    render () {
    return (<div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
    </div>
    );
    }
}

export default App;