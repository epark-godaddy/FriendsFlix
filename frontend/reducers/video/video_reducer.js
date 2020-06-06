import {
    RECEIVE_VIDEO,
    RECEIVE_VIDEOS
} from '../../actions/video/video_action';
import { REMOVE_USER } from '../../actions/session/session_actions';

const _nullState = {}

const videoReducer = (state = _nullState, action)=>{
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_VIDEOS:
            return Object.assign({}, state, action.videos);
        case RECEIVE_VIDEO:
            return Object.assign({}, state, action.video);
        //quick fix to remove the catergories on user logout
        case REMOVE_USER:
            return _nullState;
        default:
            return state;
    }
}

export default videoReducer;