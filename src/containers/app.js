import React, {Component} from 'react'
import SearchBar from '../components/search-bar'
import VideoDetail from '../components/video-details'
import VideoList from './video-list'
import axios from 'axios'


const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=513d2a5866b142f5b79b402d27054676"

class App extends Component{
    constructor(props){
        super(props)
        this.state={movieList:{}, currentMovie:{}}
    }

    componentWillMount(){
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){
            this.setState({movieList:response.data.results.slice(1,6)});
            this.setState({currentMovie:response.data.results[0]});
            // console.log('-----------------------------');
            // console.log(this.state.movieList);
            // console.log(this.state.currentMovie);
            // console.log('-----------------------------');
        }.bind(this));
    }
    render(){
        return (
                <div>
                    <SearchBar/>
                    <VideoList />
                    <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
                </div>
        )
   }
}

export default App;