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
      bpm: 120,
    };
  }

  handleBpmChange (bpm) {
    this.setState ({bpm});
  }

  render () {
    console.log (this.state.bpm, 'bpm');
    return (
      <div className="main-div">
        <Button counting={this.state.counting} bpm={this.props.bpm} />
        <Bpm bpm={this.props.bpm} handleBpmChange={this.handleBpmChange} />
      </div>
    );
  }
}

export default App;
