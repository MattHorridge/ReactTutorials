import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
  state = {lat: null, errorMessage: ''};

  //Invoked only one time
  //Good for data loading 
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //Only way we set state is with setState function
        //ONLY EXCEPTION shown above in constructor
        this.setState({ lat: position.coords.latitude})
      },
      (err) => this.setState({errorMessage: err.message})
    );
    console.log('Component Rendered')
  }


  componentDidUpdate() {
    console.log('Component Updated - Rerendered')
  }


renderContent(){
  if (this.state.errorMessage && !this.state.lat){
    return <div>Error: {this.state.errorMessage}</div>
  }

  if (!this.state.errorMessage && this.state.lat){
    return <SeasonDisplay lat={this.state.lat}/>
  }
  return (
      <Spinner message="Please Accept Location Request"/>
  )
}


  //render function is required
  render() {
    return (<div>
    {this.renderContent()}
    </div>
    );
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('#root')
);

