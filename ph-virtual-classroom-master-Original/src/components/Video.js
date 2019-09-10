import React from 'react';
import videojs from 'video.js';
import 'videojs-youtube';

// APHRODITE //
import { StyleSheet, css } from 'aphrodite';

// REDUX //
import { connect } from 'react-redux';
import { videoChat } from '../redux/Actions';


class VideoPlayer extends React.Component {

componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {    });
}

componentWillUnmount() {
    if (this.player) {
        this.player.dispose()
    }
}

render() {

var videoChatDisplay;
if( this.props.videoChat === 1 ){ videoChatDisplay = 'flex'; } else { videoChatDisplay = 'none'; }
const setup = JSON.stringify({"techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": this.props.youTube }], "youtube": { "customVars": { "modestbranding": 1, "show_info":0,  "iv_load_policy": 3 } } });

return (

<div className={css(styles.videoBox)} data-vjs-player>
    <video
        ref={ node => this.videoNode = node }
        className="video-js vjs-default-skin"
        style={{pointerEvents:'none'}}
        autoPlay
        data-setup={setup}
        >
    </video>
    <div onClick={() => this.props.toggleVideoChat(this.props.videoChat)} title={'Classroom Chat'} className={css(styles.videoChat)}>
        <img className={css(styles.chatIcon)} src={'./assets/img/chat-icon.svg'} />
    </div>
    <div style={{display: videoChatDisplay}} className={css(styles.videoChatWindow)}>

    </div>
</div>

)
}
}

// STYLES //
const styles = StyleSheet.create({

    videoChat: {
        position: 'absolute',
        bottom: 15,
        right: 20,
        zIndex: 1,
        pointerEvents: 'all',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor:'#dddddd',
        borderStyle:'solid',
        width: 48,
        height: 48,
        transition:'all .3s ease-in-out',
        ':hover': {
            backgroundColor:'rgb(200, 200, 200) !important'
        }
    },
    chatIcon: {
        height: 16,
        width: 16,
    },
    videoChatWindow: {
        position:'absolute',
        height:'calc(100% - 90px)',
        width:320,
        backgroundColor:'#f0f0f0',
        right:20,
        bottom:70,
        boxShadow:'0px 10px 20px rgba(0,0,0,.15)'
    }
});

// REDUX FUNCTIONS //
const mapStateToProps = (state) => {
return {
    videoChat: state.videoChat
};
};

const mapDispatchToProps = (dispatch) => {
return {
    toggleVideoChat: (status) => dispatch(videoChat(status))
};
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);