import React, { Component } from 'react';

// APHRODITE //
import { StyleSheet, css } from 'aphrodite';

// REDUX //
import { connect } from 'react-redux';
import { load } from './redux/Actions';

// ROUTER //
import { Route, Switch, HashRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// VIEWS //
import Lobby from './views/Lobby';
import Session from './views/Session';
import Error404 from './views/Error404';

// COMPONENTS //
import {Header, Footer, GA} from 'react-starter';

class Application extends Component {

constructor(props) {
    super(props);
    this.state = {
    };
}

componentDidMount(){
    this.props.loadSessions();
    history.pushState(null, null, location.href);
    window.onpopstate = function(event) {
        history.go(1);
    };    
}

render() {
return (
<HashRouter>
<div className={'mainView'}>
    <Route
        render={({ location }) => {
        const { pathname } = location;
        return (
            <TransitionGroup>
                <CSSTransition key={pathname} classNames="page" timeout={{ enter: 400, exit: 400}}>
                    <Route location={location} render={() => (
                        <Switch>
                            <Route exact path='/' component={Lobby}/>
                            <Route path='/classroom/:sessionId/:breakoutId?' component={Session}/>
                            <Route component={Error404}/>
                      </Switch>
                    )}
                    />
                </CSSTransition>
            </TransitionGroup>
        );
    }}/>  
</div>
</HashRouter>
);
}
}

// STYLES //
const styles = StyleSheet.create({
    mainView: {
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    topView: {
        width:'100%',
        height:'25%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },

    botView: {
        width:'100%',
        height:'75%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
});

// REDUX FUNCTIONS //
const mapStateToProps = (state) => {
return {
    // experience: state.experience
};
};

const mapDispatchToProps = (dispatch) => {
return {
    loadSessions: () => dispatch(load()),
    // getExperience: (id) => dispatch(set(id))
};
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);