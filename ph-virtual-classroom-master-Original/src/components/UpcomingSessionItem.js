import React, { Component } from 'react';

// APHRODITE //
import { StyleSheet, css } from 'aphrodite';

// ROUTER //
import { Link } from 'react-router-dom';

// REDUX //
import { connect } from 'react-redux';
import { viewLobby, classroom } from '../redux/Actions';

const UpcomingSessionItem = (props) => {

    const month = new Array();
    month[0] = "JAN";
    month[1] = "FEB";
    month[2] = "MAR";
    month[3] = "APR";
    month[4] = "MAY";
    month[5] = "JUN";
    month[6] = "JUL";
    month[7] = "AUG";
    month[8] = "SEP";
    month[9] = "OCT";
    month[10] = "NOV";
    month[11] = "DEC";

    const date = new Date(Number(props.plot.unixTime*1000));
    const utcDate = new Date(date.toUTCString());
    utcDate.setHours(utcDate.getHours()-8);
    const pacificDate = new Date(utcDate);

    const hour = new Date(Number(props.plot.unixTime*1000)).getHours();
    const displayHour = hour >= 13 ? hour - 12 : hour;
    const minutes = new Date(Number(props.plot.unixTime*1000)).getMinutes();
    const amPm = hour >= 12 ? 'pm':'am';
    
return (
    <Link style={{textDecoration:'none'}} to={'/classroom/'+props.plot.id}>
  
    <div className={css(styles.upcomingSessionItem, styles.upcomingSessionItemHover)}>
        <div className={css(styles.upcomingSessionsCalendarBlock)}>
            <h2 className={css(styles.upcomingSessionsMonth)}>{month[new Date(Number(props.plot.unixTime*1000)).getMonth()]}</h2>
            <h2 style={{color: props.plot.color}} className={css(styles.upcomingSessionsDay)}>{new Date(Number(props.plot.unixTime*1000)).getDate()}</h2>
        </div>
        <div className={css(styles.upcomingSessionsTimeBlock)}>
            <h3 style={{backgroundColor: props.plot.color}} className={css(styles.upcomingSessionsTime)}>{displayHour+':'+minutes+''+amPm}</h3>
        </div>
        <div className={css(styles.upcomingSessionsDescriptionBlock)}>
            <h4 className={css(styles.upcomingSessionsTitle)}>{props.plot.title}</h4>
            <p className={css(styles.upcomingSessionDescription)}>{props.plot.description}</p>
        </div>
    </div>
   </Link>
);
}




// STYLES //
const styles = StyleSheet.create({
    upcomingSessionItem: {
        width: 'calc(100% - 50px)',
        marginLeft:25,
        backgroundColor:'rgb(250, 250, 250)',
        borderColor:'#DDE2E6',
        borderWidth:1,
        borderStyle:'solid',
        marginTop:10,
        display:'flex',
        height:70,
        textDecoration:'none',
        cursor:'pointer',
        transition:'all .3s ease-in-out',
    },
    upcomingSessionItemHover: {
        ':hover': {
          //  borderColor:'rgb(205, 210, 215)',
            backgroundColor:'rgba(255, 255, 255, 0.6)',
            boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 10px',
        }
    },
    upcomingSessionsCalendarBlock: {
        width:65,
        display:'flex',
        flex:'0 0 65px',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    },
    upcomingSessionsMonth: {
        margin:0,
        fontWeight:'100',
        textDecoration:'none',
        color:'#808080',
        fontSize:12,
    },
    upcomingSessionsDay: {
        fontSize:28,
        margin:0,
        textDecoration:'none',
        fontWeight:'900',
        marginTop:-8,
        marginBottom:-5
    },
    upcomingSessionsTimeBlock: {
        width:98,
        height:'100%',
        color:'#fff',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:'0 0 98px',
    },
    upcomingSessionsTime: {
        width:'100%',
        height:50,
        fontSize:19,
        fontWeight:'900',
        textDecoration:'none',
        margin:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    upcomingSessionsDescriptionBlock: {
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        paddingLeft:18,
        paddingRight:18,
    },
    upcomingSessionsTitle: {
        fontSize:13,
        margin:0,
        textDecoration:'none',
        color:'#505050',
    },
    upcomingSessionDescription:{
        fontSize:12,
        margin:0,
        textDecoration:'none',
        color:'#808080',
    }

});

// REDUX FUNCTIONS //
const mapStateToProps = (state, ownProps, dispatch) => {
return {

    sessions: ownProps.loadSessions

};
};

const mapDispatchToProps = (dispatch) => {
return {

    //loadClassroom: (id) => dispatch(classRoom(id))
    //viewLobbySelect: (view) => dispatch(viewLobby(view))

};
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingSessionItem);

