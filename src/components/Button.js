import React from 'react';
import './Button.sass';
import Sound from 'react-sound';
import soundfile from './block-2.wav';

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
      // bpm: this.props.bpm,
      play: false,
      pause: true,
      playing: true,
      initState: this.props.initState,
    };
    let audio = new Audio (soundfile);
    this.audVal = null;
    this.audio = audio;
    this.inval = null;
  }
  // audio = new Audio ('tempblock.mp3');
  
  // play = () => {
    //   this.setState ({play: true, pause: false});
    //   while(this.state.play == true){
      //     this.audVal = setInterval(() => {
        //       this.audio.play ();
        //       this.audio.pause();
  //     }, this.state.bpm);
  //   }
  // };
  
  counterHandler = () => {
    console.log('props', this.props.bpm)
    const ubpm = this.props.bpm;
    let aud = this.audio;
    let inter;
    
    if (this.state.counting !== true) {
      this.setState ({
        counting: !this.state.counting,
      });
      // while(this.state.playing == true){
        this.inval = setInterval (function () {
          // aud.playbackRate = ubpm;
          // aud.loop = true;
          aud.play ();
        }, ubpm);
        // this.setState({
          //   playing: !this.state.playing
          // })
          // clearInterval(this.inval)
          // aud.pause();
          // }
        } else if (this.state.counting !== false) {
          this.setState ({
            counting: !this.state.counting,
          });
          clearInterval (this.inval);
          aud.pause ();
        }
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
  
  componentWillMount () {
    this.setState ({
      counting: this.props.counting,
      // bpm: this.props.bpm,
    });
  }
  render () {
    let textToggle;
    let playTog = this.state.counting;

    // if(this.props.initState === true){
    //   textToggle= <h1 className="button-text"> </h1>
    // }
    if (this.state.counting === true && this.props.initState === false) {
      textToggle = <h1 className="button-text">Touch To Stop</h1>;
    }
    if (this.state.counting === false && this.props.initState === false) {
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
