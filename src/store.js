// ===== Redux ===== //
import {createStore} from 'redux';

let {subscribe, dispatch, getState} = createStore(reducer);
const store = createStore(fn);

const state = store.getState();



// ===== Redux Actions ===== //
const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux',
};

// ===== Action Creator ===== //
const ADD_TODO = '添加 TODO';

function addTodo(text){
  return {
    type: ADD_TODO,
  }
}
const action = addToDo('Learn Redux');

// ===== Dispatch ===== //
store.dispatch({
  type:'ADD_TODO',
  payload: 'Learn Redux'
});