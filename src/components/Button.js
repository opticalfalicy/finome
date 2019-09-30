import React from 'react';
import './Button.sass';
import Sound from 'react-sound';
import soundfile from './tempblock.mp3';

// import ReactPlayer from 'react-player';

// let Sound = require ('react-sound');
//
// Sound.setCategory ('Playback');

// let block = new Sound ('block.mp3', error => {
//   if (error) {
//     console.log ('failed to load the sound', error);
//     return;
//   }

//   // loaded successfully
//   console.log (
//     'duration in seconds: ' +
//       block.getDuration () +
//       'number of channels: ' +
//       block.getNumberOfChannels ()
//   );
// });

// let block = new Audio ('tempblock.mp3');

// let a = new Audio ();
class Button extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      // False Initially
      // counting: false,
      // playing: false,
      // 120 Initially.
      bpm: this.props.bpm,
    };
    audio = new Audio (soundfile);
  }
  // audio = new Audio ('tempblock.mp3');

  counterHandler = () => {
    // block.play ();
    let counting;
    const ubpm = this.props.bpm;
    this.setState ({
      counting: !this.state.counting,
    });

    if (this.state.counting == true) {
      // console.log (block, 'block');
      let counting = setInterval (function () {
        return Sound.status.PLAYING;
        // block.play (success => {
        //   console.log ('successfully finished playing');
        // });
      }, ubpm);
    } else if (this.state.counting == false) {
      clearInterval (counting);
      return Sound.status.STOPPED;
    }
    let playing;
    playing = !this.state.playing;
    console.log (playing);
    return playing;

    // this.setState
  };

  // playHandler = () => {
  //   let counting = this.state.counting;
  //   const ubpm = this.props.bpm;
  //   console.log (counting);
  //   if (counting === true) {
  //     // console.log (block, 'block');
  //     counting = setInterval (function () {
  //       // return console.log ('playing');
  //       return Sound.status.PLAYING;
  //       // block.play (success => {
  //       //   console.log ('successfully finished playing');
  //       // });
  //     }, 1);
  //   }
  //   if (counting == false) {
  //     clearInterval (counting);
  //     return Sound.status.STOPPED;
  //   }

  //   console.log (Sound.status);
  //   // if (counting == true) {
  //   //   return Sound.status.STOPPED;
  //   // }
  //   // if (counting == false) {
  //   //   return Sound.status.PLAYING;
  //   // }
  // };

  componentDidMount () {
    this.setState ({
      counting: this.props.counting,
      bpm: this.props.bpm,
    });
  }
  render () {
    let textToggle;
    let playTog = this.state.counting;

    if (this.state.counting === true) {
      textToggle = <h1 className="button-text">Touch To Stop</h1>;
    }
    if (this.state.counting === false) {
      textToggle = <h1 className="button-text">Touch To Start</h1>;
    }
    return (
      <div className="button-div" onClick={this.counterHandler}>
        {/* {textToggle} */}
        {textToggle}
        {/* <Sound
          url={soundfile}
          autoLoad={true}
          playStatus={this.playHandler}
          loop={true}
        /> */}
      </div>
    );
  }
}

export default Button;
