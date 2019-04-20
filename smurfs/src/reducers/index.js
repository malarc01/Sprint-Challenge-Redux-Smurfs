import {GET_FETCH,GETTING_SMURF,GET_FAIL,POST_CREATE,CREATING_SMURF} from '../actions'

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs:[],
  fetchingSmurfs:false,
  addingSmurf:false,
  error:'',
};

function rootReducer (state=initialState, action){
  switch(action.type){
    case GET_FETCH:
    return{
      ...state, 
      smurfs: action.payload,
      fetchingSmurfs:false,
    };
    case GETTING_SMURF:
    return{
      ...state, 
      
      fetchingSmurfs:true,
    };
    case GET_FAIL:
    return{
      ...state, 
      fetchingSmurfs:false,
      addingSmurf:false,
      error:action.payload,
    };
    case POST_CREATE:
    return{
      ...state,
      smurfs:action.payload,
      addingSmurf:false,
    }
    case CREATING_SMURF:
    return{
      ...state,
      addingSmurf:true,
    }
    default:
      return state;
  }
}

export default rootReducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
