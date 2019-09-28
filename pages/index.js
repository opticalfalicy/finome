import React from 'react';
import Head from 'next/head';
import Button from '../components/Button';
import Bpm from '../components/Bpm';
import './index.sass';

class Main extends React.Component {
  constructor () {
    super ();
  }

  render () {
    return (
      <div className="main-div">
        <Button />
        <Bpm />
      </div>
    );
  }
}

export default Main;
