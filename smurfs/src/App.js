import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  component() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState(() => ({ smurfs: res.data }));
      })
      .catch(err => {
        console.error('Problem smurfing your smurf', err)
      })
  }

  addSmurf = (smurf) => {
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
        console.log(res)
        alert('A new Smurf has entered the vilage!')
        this.setState({ smurfs: res.data })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <Route path='/' component={NavBar} />
        <Route path='/SmurfForm' render={(props) => {
          return (<SmurfForm {...props} addSmurf={this.addSmurf} />
          )
        }} />
        <Route exact path='/' render={(props) => {
          return (<Smurfs smurfs={this.state.smurfs} />
          )
        }} />
      </div>
    );
  }
}

export default App;