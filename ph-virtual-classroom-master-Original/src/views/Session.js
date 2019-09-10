import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

// REDUX //
import { connect } from 'react-redux';
import { modal } from '../redux/Actions';

// ROUTER //
import { Route, Link } from 'react-router-dom';

// COMPONENTS //
import Video from '../components/Video';
import WhiteBoard from './WhiteBoard';

class Session extends Component {

constructor(props) {
    super(props);
    this.state = {
        inBreakout: false,
        yPos: 15,
        opacity: 0,
        modalOpacity:0,
        modalYPos:0,
        boxYPos:0
    };
}

componentDidMount(){
    setTimeout(() => {this.setState({yPos:0, opacity:1})},400);
}

changes(){
    if(this.state.inBreakout === false){
        this.setState({inBreakout:true, modalYPos:-15, boxYPos:15,  yPos: 15, opacity:0});
    }
}

onBack(){
    this.setState({ yPos: 15, opacity:0});
}

modalOpacityChange(value){
    setTimeout(() => { this.setState({modalOpacity: value}) }, 10);
    if(value === 0){
        setTimeout(() => { this.props.toggleModal(this.props.modal);}, 300);
    }
}

render() {

let modalOn = false;
if(this.props.modal === -1){ modalOn = true; }
else { modalOn = false; }

const sessionId = this.props.match.params.sessionId;
const sessions = this.props.load;
var thisSession = sessions[Number(sessionId)-1];
const pollModal = null;

if(this.props.match.params.breakoutId){
    return(<WhiteBoard sessionId={this.props.match.params.sessionId} breakoutId={this.props.match.params.breakoutId} /> )
}
else {

return (

<div style={{ transform: 'translateY('+ this.state.yPos +'px)', opacity: this.state.opacity }} className={'page'}>
<div className={css(styles.videoHold)}>
    <Video youTube={thisSession.youtube} />
    <div className={css(styles.sessionBar)}>
        <div className={css(styles.sessionIdentifier)}>
            <Link onClick={() => this.onBack()} to={''}>
            <div style={{ backgroundColor: thisSession.color}} className={css(styles.miniIconHold)}>
                <img src={'./assets/img/physics-white-logo.svg'} className={css(styles.miniIcon)} />
            </div>
            </Link>
            <h1 style={{ color: thisSession.color}} className={css(styles.sessionTitle)}>{thisSession.title}</h1>
        </div>
        <div className={css(styles.currentView)}>
            <h3 className={css(styles.currentSubtitle)}>CURRENT VIEW</h3>
            <h2 className={css(styles.currentTitle)}>CLASSROOM</h2>
        </div>
        <div className={css(styles.rightSide)}>
            <h4 onClick={() => {this.modalOpacityChange(1); this.props.toggleModal(this.props.modal)}} className={css(styles.rateLabel)}>Rate this experience: </h4>
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
{modalOn ? (<div style={{ transform: 'translateY('+ this.state.modalYPos +'px)',opacity: this.state.modalOpacity }} className={css(styles.darkness)}><div style={{transform: 'translateY('+ this.state.boxYPos +'px)'}} className={css(styles.modalBox)}><Link className={css(styles.modalButton)} onClick={() => { this.modalOpacityChange(0), this.changes()}} style={{textDecoration:'none'}} to={this.props.match.url+'/123'}>Continue to Group Session</Link></div></div>) : ''}
</div>

);}
}
}

// STYLES //
const styles = StyleSheet.create({
    videoHold: {
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
        cursor:'pointer'
    },
    darkness: {
        position:'fixed',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        background:'rgba(0,0,0,.8)',
        zIndex:99,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        transition: 'all .3s ease-in-out'
    },
    modalBox: {
        marginTop:75,
        width:'60vw',
        height:'40vw',
        backgroundColor:'#FFFFFF',
        borderColor:'#FFFFFF',
        borderWidth:1,
        borderStyle:'solid',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        boxShadow:'0 0px 55px 20px rgba(0,0,0,.5)',
        maxHeight: 425,
        maxWidth:650,
        transition:'all .3s ease-in-out'
    },
    modalButton: {
        padding: 15,
        borderRadius:45,
        background:'#f0f0f0',
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#ccc',
        fontSize:16,
        fontWeight:'400',
        color:"#404040",
        cursor:'pointer',
    }
});

// REDUX FUNCTIONS //
const mapStateToProps = (state) => {
return {

    load: state.loadSessions,
    modal: state.modal

};
};

const mapDispatchToProps = (dispatch) => {
return {
    
    toggleModal: (modalStatus) => dispatch(modal(modalStatus)),
    loadSessions: () => dispatch(load()),

};
};

export default connect(mapStateToProps, mapDispatchToProps)(Session);