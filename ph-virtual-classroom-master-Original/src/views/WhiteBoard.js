import React, { Component } from 'react';

// APHRODITE //
import { StyleSheet, css } from 'aphrodite';

// REDUX //
import { connect } from 'react-redux';

// ROUTER //
import { Route, Link } from 'react-router-dom';


class WhiteBoard extends Component {

constructor(props) {
    super(props);
    this.state = {
        yPos: 15,
        opacity: 0
    };
}

componentDidMount(){
    setTimeout(() => {this.setState({yPos:0, opacity:1})},800);
}

onBack(){
    this.setState({ yPos: 15, opacity:0});
}

render() {

const sessionId = this.props.sessionId;
const sessions = this.props.load;
const thisSession = sessions[Number(sessionId)-1];



return (

<div>
<div style={{ transform: 'translateY('+ this.state.yPos +'px)', opacity: this.state.opacity}} className={'page'}>
<div className={css(styles.awwHold)}>
    <iframe src={'https://awwapp.com/b/up7vby0tu/'} className={css(styles.awwApp)} />
    <div className={css(styles.sessionBar)}>
        <div className={css(styles.sessionIdentifier)}>
            <Link onClick={() => this.onBack()} to={'/'}>
            <div style={{ backgroundColor: thisSession.color}} className={css(styles.miniIconHold)}>
                <img src={'./assets/img/physics-white-logo.svg'} className={css(styles.miniIcon)} />
            </div>
            </Link>
            <h1 style={{ color: thisSession.color}} className={css(styles.sessionTitle)}>{thisSession.title}</h1>
        </div>
        <div className={css(styles.currentView)}>
            <h3 className={css(styles.currentSubtitle)}>CURRENT VIEW</h3>
            <h2 className={css(styles.currentTitle)}>GROUP SESSION</h2>
        </div>
        <div className={css(styles.rightSide)}>
            <h4 onClick={() => {this.props.toggleModal(this.props.modal)}} className={css(styles.rateLabel)}>Rate this experience: </h4>
            <div className={css(styles.starHold)}>
                <img src='./assets/img/star-empty.svg' className={css(styles.star)} />
                <img src='./assets/img/star-empty.svg' className={css(styles.star)} />
                <img src='./assets/img/star-empty.svg' className={css(styles.star)} />
                <img src='./assets/img/star-empty.svg' className={css(styles.star)} />
                <img src='./assets/img/star-empty.svg' className={css(styles.star)} />
            </div>
        </div>
    </div>
</div>
</div>
</div>

);
}
}

// STYLES //
const styles = StyleSheet.create({
    awwHold: {
        maxHeight: 'calc(100% - 200px)',
        marginTop:75,
        width:'80vw',
        height:'45vw',
        backgroundColor:'#FAFAFA',
        borderColor:'#D6D6D6',
        borderWidth:1,
        borderStyle:'solid',
        boxShadow:'0 3px 15px rgba(0,0,0,.03)',
        position:'relative'
    },
    awwApp: {
        width:'100%',
        height:'100%',
        borderWidth:0
    },
    sessionIdentifier: {
        flex:'0 0 25%',
        width:'25%'
    },
    currentView: {
        flex:'1 1 auto',
        justifyContent:'center',
    },
    currentSubtitle: {
        margin:0,
        marginTop:-2,
        fontSize:11,
        color:'#707070',
        fontWeight:'300',
        textAlign:'center'
    },
    currentTitle: {
        fontSize:21,
        fontWeight:'800',
        color:'#505050',
        margin:0,
        marginTop:-6,
        textAlign:'center',
    },
    rightSide: {
        flex: '0 0 25%',
        width:'25%'
    },
    miniIcon: {
        width: 23
    },
    miniIconHold: {
        width:35,
        height:35,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        float:'left'
    },
    sessionTitle: {
        fontFamily:'Open Sans',
        fontSize:17,
        fontWeight:'600',
        float:'left',
        marginLeft: 8,
        marginTop: 4
    },
    sessionBar: {
        display: 'flex',
        position:'absolute',
        top:-50,
        width:'100%',

    },
    starHold: {
        float:'right',
        clear:'right'
    },
    star: {
        width:25,
        height:25,
        marginLeft:3
    },
    rateLabel:{
        fontSize:11,
        margin:0,
        float:'right',
        fontWeight:'100',
        marginRight:1,
        color:'#707070',
    },
});

// REDUX FUNCTIONS //
const mapStateToProps = (state) => {
return {

    load: state.loadSessions,

};
};

const mapDispatchToProps = (dispatch) => {
return {

    //viewLobbySelect: (view) => dispatch(viewLobby(view))

};
};

export default connect(mapStateToProps, mapDispatchToProps)(WhiteBoard);