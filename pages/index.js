import React from 'react';
import Head from 'next/head';
import Button from '../components/Button';
import Bpm from '../components/Bpm';
import './index.sass';

class Main extends React.Component {
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
    return (
      <div className="main-div">
        <Button counting={this.state.counting} bpm={this.props.bpm} />
        <Bpm bpm={this.props.bpm} handleBpmChange={this.handleBpmChange} />
      </div>
    );
  }
}

export default Main;
