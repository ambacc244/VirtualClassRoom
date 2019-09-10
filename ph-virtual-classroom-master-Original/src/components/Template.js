import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

// REDUX //
import { connect } from 'react-redux';
import { viewLobby } from '../redux/Actions';


class Template extends Component {

render() {
return (

    <div>
        
    </div>

);
}
}

// STYLES //
const styles = StyleSheet.create({

});

// REDUX FUNCTIONS //
const mapStateToProps = (state) => {
return {

    //lobbyView: state.lobbyView,
    // experience: state.experience

};
};

const mapDispatchToProps = (dispatch) => {
return {

    //viewLobbySelect: (view) => dispatch(viewLobby(view))

};
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);