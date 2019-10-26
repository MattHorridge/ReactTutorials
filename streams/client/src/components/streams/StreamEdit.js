import _ from 'lodash';
import React from 'react'
import {connect } from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from '../streams/StreamForm'

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
        console.log(this.props.stream);
    }

    render () {
        
        if(!this.props.stream){
            return <div></div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                initialValues = {_.pick(this.props.stream, 'title', 'description')}
                onSubmit={this.onSubmit}
                />
            </div>

        );
    };

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    };



}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id] };
}



export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);