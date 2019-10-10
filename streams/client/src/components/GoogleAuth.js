import React from 'react'

class GoogleAuth extends React.Component{

    state = {isSignedIn : null};

    componentDidMount(){
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '244009057402-9g435am1cb74lu4jgos2prq6jjk69u51.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        })
    }

    onAuthChange = () =>{
        this.setState({isSignedIn : this.auth.isSignedIn.get()});
    };


    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return null;
        }
        else if(this.state.isSignedIn){
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        }
        else {
            return (
                <button onClick={this.onSignIn} className= "ui red google button">
                   <i className="google icon"></i>     
                    Sign In With Google
                </button>
            );
        }

    }



    onSignIn = () => {
        this.auth.signIn();
    };


    onSignOut = () => {
        this.auth.signOut();
    };


    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;