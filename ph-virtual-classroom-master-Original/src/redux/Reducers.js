import { combineReducers } from 'redux';
import { SET_USER, LOBBY_VIEW, LOAD_SESSIONS, LOAD_CLASSROOM, TOGGLE_VIDEO_CHAT, TOGGLE_MODAL  } from "./Constants";

const initialState = []

// SET USER REDUCER //
const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
};

// LOAD SESSIONS REDUCER //
const loadSessions = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SESSIONS:
      return action.sessions;
    default:
      return state;
  }
};

// LOBBY VIEW REDUCER //
const lobbyView = (state = initialState, action) => {
  switch (action.type) {
    case LOBBY_VIEW:
      return action.selected;
    default:
      return state;
  }
};

// LOAD CLASSROOM REDUCER //
const classroom = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CLASSROOM:
      return action.session;
    default:
      return state;
  }
};

// VIDEO CHAT TOGGLE REDUCER //
const videoChat = (state = 1, action) => {
  switch (action.type) {
    case TOGGLE_VIDEO_CHAT:
      return action.videoChatStatus - (action.videoChatStatus * 2);
    default:
      return state;
  }
};

// MODAL TOGGLE REDUCER //
const modal = (state = 1, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return action.modalStatus - (action.modalStatus * 2);
    default:
      return state;
  }
};

// COMBINE REDUCERS //
export default combineReducers({
  user,
  loadSessions,
  lobbyView,
  videoChat,
  modal
});
