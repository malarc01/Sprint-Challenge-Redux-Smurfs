import axios from 'axios'

export const GET_FETCH="GET_FETCH";
export const GETTING_SMURF = 'GETTING_SMURF'
export const GET_FAIL = "GET_FAIL";

export const POST_CREATE = "POST_CREATE";
export const CREATING_SMURF = "CREATING_SMURF";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () =>dispatch =>{
  console.log('start of getSmurfs function')
  dispatch({type:GETTING_SMURF});
  axios.get('http:/localhost:3333/smurfs')
  .then(res=>dispatch({type:GET_FETCH,payload:res.data}))
  .catch(error=>{dispatch({type:GET_FAIL,payload:error})})
}

export const createSmurf = smurfObject => {
  return dispatch =>{
    dispatch({type:CREATING_SMURF});
    axios.post('http://localhost:3333/smurfs',smurfObject)
    .then()
    .catch(err=>{dispatch({type:GET_FAIL,payload:err})})
  }
}