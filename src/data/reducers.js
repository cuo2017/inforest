import { combineReducers } from 'redux';
import { UPDATE_HOME } from './actions';

function home(state=[],action){
	if(action.type==="UPDATE_HOME"){
		return [...state, {
	      data: action.data,
	    }];
	}
	else{
		return state;
	}
}

const frontApp = combineReducers({
  home
});

export default frontApp;