import React from 'react'

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '244009057402-9g435am1cb74lu4jgos2prq6jjk69u51.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }

    render(){
        return <div>GoogleAuth</div>
    }
}

export default GoogleAuth;