import React, { Component } from 'react';

// APHRODITE //
import { StyleSheet, css } from 'aphrodite';

// REDUX //
import { connect } from 'react-redux';
import { classroom } from '../redux/Actions';

// COMPONENTS //
import PreviousSessionItem from './PreviousSessionItem';


class PreviousSessions extends Component {

render() {

   const isPrevious = (time) => {
        const today = new Date();
        today.setHours(0,0,0,0);
        const sessionsDate = new Date(Number(time*1000));

        if(sessionsDate < today){
            return true
        }
        else{
            return false
        }
   }


return (

    <div className={css(styles.previousSessionsContainer)}>
        {this.props.load.map((plot) => { return isPrevious(plot.unixTime) ? <PreviousSessionItem key={plot.id} plot={plot} /> : '' } )}
    </div>

);
}
}

// STYLES //
const styles = StyleSheet.create({
    previousSessionsContainer: {
        height:"calc(100% - 60px)",
        marginTop:30,
        overflow:'auto',
    }
});

// REDUX FUNCTIONS //
const mapStateToProps = (state) => {
return {

    load: state.loadSessions,
    // experience: state.experience

};
};

const mapDispatchToProps = (dispatch) => {
return {

    //viewLobbySelect: (view) => dispatch(viewLobby(view))

};
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviousSessions);