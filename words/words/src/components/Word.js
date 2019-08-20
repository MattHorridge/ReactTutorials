import React from 'react';

class Word extends React.Component {

    state = {word: 'Test'}

    render(){
        return (
            <div className="ui segment">
                <div>{this.state.word}</div>
            </div>

        );
    }

}

export default Word;