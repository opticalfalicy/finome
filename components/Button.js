import React from 'react';
import './Button.sass';
import Sound from 'react-sound';

// let Sound = require ('react-sound');

// Sound.setCategory ('Playback');

let block = new Sound ('block.mp3', Sound.LIBRARY, error => {
  if (error) {
    console.log ('failed to load the sound', error);
    return;
  }

  // loaded successfully
  console.log (
    'duration in seconds: ' +
      block.getDuration () +
      'number of channels: ' +
      block.getNumberOfChannels ()
  );
});

class Button extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      // False Initially
      counting: Boolean,
      // 120 Initially.
      bpm: this.props.bpm,
    };
  }

  counterHandler = () => {
    const ubpm = this.props.bpm;
    this.setState ({
      counting: !this.state.counting,
    });
    if (this.state.counting == true) {
      console.log (block, 'block');
      let counting = setInterval (function () {
        block.play (success => {
          console.log ('successfully finished playing');
        });
      }, ubpm);
    } else if (this.state.counting == false) {
      clearInterval (counting);
    }
  };

  componentDidMount () {
    this.setState ({
      counting: !this.props.counting,
      bpm: this.props.bpm,
    });
  }
  render () {
    let textToggle;

    if (this.state.counting == true) {
      textToggle = <h1 className="button-text">Touch To Start</h1>;
    }
    if (this.state.counting == false) {
      textToggle = <h1 className="button-text">Touch To Stop</h1>;
    }
    return (
      <div className="button-div" onClick={this.counterHandler}>
        {textToggle}
      </div>
    );
  }
}

export default Button;
