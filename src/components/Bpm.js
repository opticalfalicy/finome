import React from 'react';
import './Bpm.sass';

export default class Bpm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      bpm: this.props.bpm,
      dispBpm: 120,
    };
    // this.checkChange = this.checkChange.bind (this);
  }

  componentDidMount () {
    this.setState ({
      bpm: this.props.bpm,
    });
  }

  // getVal (val) {
  //   let dispVal = val;
  //   val = 60000 / val;
  //   this.setState ({
  //     bpm: val,
  //     dispBpm: dispVal,
  //   });
  // }

  _handleKeyDown = e => {
    let eV = e.target.value;
    let val = eV;
    let dispVal = val;
    const re = /^[0-9\b]+$/;
    if (e.key === 'Enter') {
      e.preventDefault ();
      val = 60000 / val;
      this.setState ({
        bpm: val,
        dispBpm: dispVal,
      });
      console.log (val, dispVal, 'ye');
      // this.setState ({
      //   bpm: e.target.value,
      // });
    }
  };

  handleChange = e => {
    let eV = e.target.value;

    const re = /^[0-9\b]+$/;
    if (eV === '' || (re.test (eV) && eV <= 300)) {
      this.setState ({dispBpm: eV});
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
    return (
      <div className="bpm-div">
        {/* <h1 className="bpm-text">{this.state.dispBpm}</h1> */}
        <h1 className="bpm-text">BPM</h1>
        <form className="bpm-form">
          <input
            // value={120}
            // onInput={this._handleKeyDown}
            onKeyPress={this._handleKeyDown}
            onChange={this.handleChange}
            value={this.state.dispBpm}
            // onValueChange={value => this.getVal (value)}
            className="bpm-val"
            placeholder={this.state.dispBpm}
          >
            {/* {this.state.dispBpm} */}
            {/* 120 */}
          </input>
        </form>
      </div>
    );
  }
}
