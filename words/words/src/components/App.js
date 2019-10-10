import React from 'react'
import Word from './Word';
import Definition from './Definition';
import axios from 'axios';
import './css/App.css';

const BASE_URL = 'https://api.wordnik.com/v4/words.json/';
const KEY = '0ojvnoftdc7dgnir2pessrp599gh2xix53t98j14g5rg6n8id';

class App extends React.Component {
    
    state = {
        word: null, 
        definition: null,
        note: null,
        date: null
    }

    componentDidMount() {
        this.getWordOfDay();
        this.getTodaysDate();
    }

    getWordOfDay = async () => {
        const response =  await axios.get('/wordOfTheDay', 
        {
            baseURL: BASE_URL,
            params: {
                api_key : KEY
            }
        });
      

        this.setState({
            word: response.data.word,
            definition: response.data.definitions[0].text,
            note: response.data.note
        })
    }

    getTodaysDate = () => {
        var newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        this.setState({date: date+ '-' + month + '-' + year})
    }

    render(){
        return (
        
            <div className = "ui container">
            <div className= "ui one column grid center aligned">
            <div className="ui header head">Word of the Day: {this.state.date} </div>
            <div className="ui row">
            
            <div className= "eleven wide column">
            <Word word={this.state.word}></Word>
            </div>
            <div className= "eleven wide column">
            <Definition definition={this.state.definition}></Definition>
            </div>
            <div className= "eleven wide column">
            <Definition definition={this.state.note}></Definition>
            </div>
            </div>
            </div>
            </div>    

        );
    }
}

export default App;