import React from 'react'
import Word from './Word';
import Definition from './Definition';
import NewButton from './NewButton';


class App extends React.Component {


    render(){
        return (
            <div className = "ui container">
            <div className= "ui one column grid center aligned">
            <div className="ui row">
            <div className= "eleven wide column">
            <Word></Word>
            </div>
            <div className= "eleven wide column">
            <Definition></Definition>
            </div>
            <div className= "eleven wide column">
            <NewButton></NewButton>
            </div>
            </div>
            </div>
            </div>    

        );
    }
}

export default App;