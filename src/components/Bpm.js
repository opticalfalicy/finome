import React from 'react';
import './Bpm.sass';

export default class Bpm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      bpm: Number,
      dispBpm: 120,
    };
    // this.checkChange = this.checkChange.bind (this);
  }

  componentDidMount () {
    this.setState ({
      bpm: this.props.bpm,
    });
  }

  getVal (val) {
    let dispVal = val;
    val = 60000 / val;
    this.setState ({
      bpm: val,
      dispBpm: dispVal,
    });
  }

  _handleKeyDown = e => {
    const re = /^[0-9\b]+$/;
    if (
      (e.key === 'Enter' && e.target.value === '') ||
      re.test (e.target.value)
    ) {
      this.setState ({
        bpm: e.target.value,
      });

      console.log (this.state.bpm, 'bpm');
    }
  };

  // checkChange (e) {
  //   const re = /^[0-9\b]+$/;
  //   if (e.target.value === '' || re.test (e.target.value)) {
  //     this.setState ({value: e.target.value});
  //   }
  // }

  render () {
    let bpm = this.state.bpm;
    // console.log (bpm, 'bpm');
    return (
      <div className="bpm-div">
        {/* <h1 className="bpm-text">{this.state.dispBpm}</h1> */}
        <h1 className="bpm-text">BPM</h1>
        <input
          // value={120}
          onInput={this._handleKeyDown}
          onKeyDown={this._handleKeyDown}
          onChange={value => this.getVal (value)}
          className="bpm-val"
        />
      </div>
    );
  }
}
