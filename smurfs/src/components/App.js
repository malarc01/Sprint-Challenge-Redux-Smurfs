import React, { Component } from 'react';
import './App.css';
import  {connect} from 'react-redux';
import {getSmurfs} from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

componentDidMount(){
  console.log('inside CDM & getSmurf fx');
  this.props.getSmurf()
}




  render() {
    console.log(this.props)
    console.log(this.props.smurfs)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm/>
        <ul>{this.props.smurfs.map(
      smurf=>{return (<Smurf 
      name={smurf.name}
       id={smurf.id} 
       age={smurf.age} 
       height={smurf.height} 
       key={smurf.id}/>);})}
       </ul>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  smurfs:state.smurfs,
  fetchingSmurfs:state.fetchingSmurfs,
  addingSmurf:state.addingSmurf,
  error:state.error,
})

export default connect(mapStateToProps,{getSmurfs})(App) ;
