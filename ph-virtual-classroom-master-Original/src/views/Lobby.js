import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

// REDUX //
import { connect } from 'react-redux';
import { viewLobby } from '../redux/Actions';

// COMPONENTS //
import UpcomingSessions from '../components/UpcomingSessions';
import PreviousSessions from '../components/PreviousSessions';


class Lobby extends Component {

viewSelect(type){
    
    this.props.viewLobbySelect(type);

}

viewRender(test){

    switch (test) {
        case 'upcoming':
            return <UpcomingSessions />;
        case 'previous':
            return <PreviousSessions />;
        default:
            return <UpcomingSessions />;
    }

}

render() {

    this.upcomingSelect = true;
    this.previousSelect = false;
    if(this.props.lobbyView === 'upcoming'){this.upcomingSelect = true; this.previousSelect = false;}
    if(this.props.lobbyView === 'previous'){this.upcomingSelect = false; this.previousSelect = true;}

return (

<div className={'page'}>
<div className={css(styles.lobbyContainer)}>
    <div className={css(styles.lobbyTopView)}>
        <img alt={'Physics Virtual Classroom'} title={'Physics Virtual Classroom'} className={css(styles.lobbyCourseLogo)} src={'./assets/img/physics-logo.svg'} />
        <div className={css(styles.lobbyTitleHold)}>
            <h1 className={css(styles.lobbyAppTitle)}>PHYSICS</h1>
            <h2 className={css(styles.lobbyAppSubtitle)}>VIRTUAL CLASSROOM</h2>
        </div>
        <div className={css(styles.lobbyNavigation)}>
            <a onClick={ () => this.viewSelect('upcoming')} className={css(styles.lobbyNavigationItem, this.upcomingSelect ? styles.lobbyNavigationActive :'' )}>Upcoming Sessions</a>
            <a onClick={ () => this.viewSelect('previous')} className={css(styles.lobbyNavigationItem, this.previousSelect ? styles.lobbyNavigationActive : '')}>Previous Sessions</a>
        </div>
    </div>
    { this.viewRender(this.props.lobbyView) }
</div>
</div>

);
}
}

// STYLES //
const styles = StyleSheet.create({

    lobbyContainer: {
        maxHeight: 'calc(100% - 200px)',
        marginTop:90,
        maxWidth:645,
        maxHeight:440,
        height:'100%',
        width:'100%',
        backgroundColor:'#FAFAFA',
        borderColor:'#D6D6D6',
        borderWidth:1,
        borderStyle:'solid',
        boxShadow:'0 3px 15px rgba(0,0,0,.03)',
        fontSize: 15,
        color: '#606060',
        fontFamily:'Open Sans',
        fontWeight:'400',
        position:'relative',
    },

    lobbyCourseLogo: {
        width: 48,
        height:'auto',
        float:'left',
        marginLeft:10,
        pointerEvents:'none',
    },

    lobbyTitleHold: {
        float:'left',
        marginLeft:10,
        pointerEvents:'none',
    },

    lobbyAppTitle: {
        float:'left',
        margin:0,
        padding:0,
        fontSize:27,
        color:"#606060",
        marginTop:2,
    },

    lobbyAppSubtitle: {
        float:'left',
        margin:0,
        padding:0,
        clear:'left',
        fontSize:13,
        color:"#808080",
        marginTop:-7,
    },

    lobbyTopView: {
        width:'100%',
        height:70,
        position:'absolute',
        top:-70
    },

    lobbyNavigation:{
        float:'right',
        marginTop:20,
        marginRight:10,
    },

    lobbyNavigationItem: {
        fontSize:15,
        color:'#808080',
        float:'left',
        marginLeft:15,
        cursor:'pointer',
        borderBottomWidth:1,
        borderBottomStyle:'solid',
        borderBottomColor:'transparent',
        transition:'all .3s ease-in-out',
    },

    lobbyNavigationActive: {
        color:'#d73f09',
        borderBottomColor:'#d73f09',
    }

});

// REDUX FUNCTIONS //
const mapStateToProps = (state) => {
return {

    lobbyView: state.lobbyView,
    // experience: state.experience

};
};

const mapDispatchToProps = (dispatch) => {
return {

    viewLobbySelect: (view) => dispatch(viewLobby(view))

};
};

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);