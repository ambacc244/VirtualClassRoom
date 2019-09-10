// LOAD CONSTANTS //
import { SET_USER, LOBBY_VIEW, LOAD_SESSIONS, LOAD_CLASSROOM, TOGGLE_VIDEO_CHAT, TOGGLE_MODAL } from './Constants';

// SET USER ACTIONS //
export const setUser = (user) => ({ type: SET_USER, userId: user});
export const set = (userId) => {
    return (dispatch) => {
        dispatch(setUser(userId));
    }
}

// LOAD SESSIONS ACTIONS //
export const loadSessions = (sessions) => ({ type: LOAD_SESSIONS, sessions });
export const load = () => {
    return (dispatch) => {
        fetch('./assets/json/sessionsTest.json')
            .then((response) => {
              
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) =>  dispatch(loadSessions(items)))
            .catch((e) =>  console.log(e));
    }; 
}

// LOBBY VIEW ACTIONS //
export const viewLobbySelect = (view) => ({ type: LOBBY_VIEW, selected: view});
export const viewLobby = (view) => {
    return (dispatch) => {
        dispatch(viewLobbySelect(view));
    }
}

// LOAD CLASSROOM ACTIONS //
export const loadClassroom = (id) => ({ type: LOAD_CLASSROOM, session: id });
export const classroom = (id) => {
    return (dispatch) => {
        dispatch(loadClassroom(123))
           
    }; 
}

// TOGGLE VIDEO CHAT ACTIONS //
export const toggleVideoChat = (status) => ({ type: TOGGLE_VIDEO_CHAT, videoChatStatus: status });
export const videoChat = (status) => {
    return (dispatch) => {
        dispatch(toggleVideoChat(status))
           
    }; 
}

// TOGGLE MODAL ACTIONS //
export const toggleModalWindow = (modalStatus) => ({ type: TOGGLE_MODAL, modalStatus: modalStatus });
export const modal = (modalStatus) => {
    return (dispatch) => {
        dispatch(toggleModalWindow(modalStatus))
           
    }; 
}