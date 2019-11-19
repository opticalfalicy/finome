import React from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import Bpm from './components/Bpm';
import './index.sass';
import Sound from 'react-sound';
import soundfile from './goodfellas.6.wav';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.handleBpmChange = this.handleBpmChange.bind (this);
    this.state = {
      counting: false,
      bpm: 60000 / 120,
      initState: true,
    };
  }

  handleBpmChange (bpm) {
    // let eV = e.target.value;
    // e.preventDefault ();
    this.setState ({
      bpm: bpm,
      initState: false

    });

    // const re = /^[0-9\b]+$/;
    // if (eV === '' || (re.test (eV) && eV <= 300)) {
    // }
    // this.setState ({bpm});
  }

  render () {
    console.log (this.state.bpm, 'bpm');
    return (
      <div className="main-div">
        <Button counting={this.state.counting} bpm={this.state.bpm} initState={this.state.initState} />
        <Bpm bpm={this.state.bpm} handleBpmChange={this.handleBpmChange} />
      </div>
    );
  }
}

export default App;
