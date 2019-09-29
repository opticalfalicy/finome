import React from 'react';
import './Bpm.sass';

export default class Bpm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      bpm: Number,
      dispBpm: 120,
    };
  }

  componentDidMount () {
    this.setState ({
      bpm: this.props.bpm,
    });
  }

  getVal (val) {
    dispVal = val;
    val = 60000 / val;
    this.setState ({
      bpm: val,
      dispBpm: dispVal,
    });
  }

  render () {
    let bpm = this.state.bpm;
    return (
      <div className="bpm-div">
        <h1 className="bpm-text">{this.state.dispBpm}</h1>
      </div>
    );
  }
}
