import React, {Component} from 'react';
import {createSmurf} from '../actions'
import {connect} from 'react-redux';
class SmurfForm extends Component {
constructor(props){
    super(props);
    this.state = {
        name:'',
        age:'',
        height:'',
    };
}

addSmurf = event =>{
    event.preventDefault();
    console.log('addSmurf function invoked');
    let smurfObject={
        name: this.state.name,
        age: parseInt(thi.state.age,10),
        height: this.state.height
    }
    this.props.createSmurf(smurfObject)
    this.setState({
    name: '',
    age: '',
    height:"",

    });
}

handleInputChange = e =>{
    this.setState({[e.target.name]:e.target.value});
};

render(){
    console.log(this.props);
    return(
        <div className = "SmurfForm">
        <form onSubmit = {this.addSmurf}>
        <input
            onChange = {this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
        />
        <input
            onChange = {this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
        />
        <input
            onChange = {this.handleInputChange}
            placeholder="name"
            value={this.state.height}
            name="height"
        />
        <button type="submit">Add to the Village</button>
        </form>
        
        
        </div>
    )
}

}

export default connect(null,{createSmurf})(SmurfForm)