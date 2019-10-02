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
      counting: false,
      // playing: false,
      // 120 Initially.
      bpm: this.props.bpm,
      play: false,
      pause: true,
    };
    let audio = new Audio (soundfile);
    this.audio = audio;
  }
  // audio = new Audio ('tempblock.mp3');

  play = () => {
    this.setState ({play: true, pause: false});
    this.audio.play ();
  };

  counterHandler = event => {
    event.preventDefault ();
    // block.play ();
    let counting;
    const ubpm = this.props.bpm;
    // this.setState ({
    //   counting: !this.state.counting,
    //   play: !this.state.play,
    //   pause: !this.state.pause,
    // });
    let aud = this.audio;
    let inter;
    this.setState ({
      counting: !this.state.counting,
      // play: true,
      // pause: false,
    });
    console.log (this.state.counting);

    // if (this.state.counting === false) {
    // this.playHandler ();
    // console.log (block, 'block');
    // inter = setInterval (function () {
    // return this.audio.play ();
    // aud.play ();
    // return Sound.status.PLAYING;
    // block.play (success => {
    //   console.log ('successfully finished playing');
    // });
    // }, ubpm);
    // clearInterval (inter);
    // } else if (this.state.counting !== false) {
    // }
    // else if (this.state.counting === true) {
    //   // console.log (inter, 'elseinter');
    //   this.setState ({
    //     counting: !this.state.counting,
    //     //   play: false,
    //     //   pause: true,
    //   });
    //   console.log (this.state.counting);
    //   // aud.pause ();
    //   // return Sound.status.STOPPED;
    // }
    // let playing;
    // playing = !this.state.playing;
    // console.log (playing);
    // return playing;

    // this.setState
  };

  playHandler = () => {
    let counting = this.state.counting;
    let countOn;
    const ubpm = this.props.bpm;
    let aud = this.audio;
    // console.log (counting);
    // if (counting !== true) {
    // console.log (block, 'block');
    countOn = setInterval (function () {
      // return console.log ('playing');
      // return this.audio.play ();
      aud.play ();
      // block.play (success => {
      //   console.log ('successfully finished playing');
      // });
    }, 120);
    console.log ('playing');
    // }
    // else if (counting !== false) {
    //   console.log ('pausing', countOn);
    //   aud.pause ();
    //   return clearInterval (countOn);
    // }
  };

  pauseHandler = () => {
    let aud = this.audio;
    let counting = this.state.counting;
    // if (counting !== false) {
    aud.pause ();
    // }
  };

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
      // counting: false,
      bpm: this.props.bpm,
    });
  }
  render () {
    console.log (this.props.counting, 'mount');
    let textToggle;
    let playTog = this.state.counting;

    if (this.state.counting === true) {
      textToggle = (
        <div className="button-control button-play" onClick={this.pauseHandler}>
          <h1 className="button-text">Touch To Stop</h1>
        </div>
      );
    }
    if (this.state.counting === false) {
      textToggle = (
        <div
          onClick={this.playHandler}
          className="button-control button-pause "
        >
          <h1 className="button-text">Touch To Start</h1>
        </div>
      );
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
