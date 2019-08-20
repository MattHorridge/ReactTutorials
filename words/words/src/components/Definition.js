import React from 'react';

class Definition extends React.Component{
    state = {definition: 'Test Definition'}


    render(){
        return (
            <div className="ui segment">
            <div>{this.state.definition}</div>
        </div>

        );
    }

}

export default Definition;