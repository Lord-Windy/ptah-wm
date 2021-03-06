import React, { Component } from 'react';
import BallSpace from './base/BallSpace';
import Explain from './base/Explain';
import SampleGame from './additional/SampleGame';

export default class Launcher extends Component {

  constructor(props){
    super(props);
    this.state = {
      appMenu: false
    };
    this.handleAppMenu = this.handleAppMenu.bind(this);

    this.handleMakeExplain();

  }

  handleAppMenu(){
    let toChange = true;
    if (this.state.appMenu){
      toChange = false;
    }

    this.setState({
      appMenu: toChange
    });
  }

  handleMakeExplain(){
    let space = Launcher.getExplain();

    let app = {
      id: -1, //no need to worry about this, WindowManager will fix it
      winX: 2,
      winY: 52,
      winZ: 0, //another one WindowManager will handle
      winWidth: 410,
      winHeight: 370,
      space: space
    };

    this.props.addApp(app);

  }

  handleMakeBall(){
    let space = Launcher.getBallspace();

    let app = {
      id: -1, //no need to worry about this, WindowManager will fix it
      winX: 150,
      winY: 100,
      winZ: 0, //another one WindowManager will handle
      winWidth: 300,
      winHeight: 330,
      space: space
    };

    this.props.addApp(app);

  }

  handleMakeSampleGame() {

    let space = Launcher.getSampleGame();

    let app = {
      id: -1, //no need to worry about this, WindowManager will fix it
      winX: 150,
      winY: 100,
      winZ: 0, //another one WindowManager will handle
      winWidth: 800,
      winHeight: 600,
      space: space
    }

    this.props.addApp(app);

  }

  static getExplain(){
    return (
      <Explain className="textWindow"/>
    );
  }

  static getBallspace(){
    return (
      <BallSpace />
    );
  }

  static getSampleGame(){
    return (
      <SampleGame />
    );
  }

  //&#9883;
  render() {
    return (
      <div className="launcher">
        <button
          className="launcher-btn"
          onClick={this.handleAppMenu}>
          &#9812;
        </button>

        {(this.state.appMenu)
          ? <span>
            <button
              title="Explain"
              className="launcher-btn"
              onClick={this.handleMakeExplain.bind(this)}>
              E
            </button>
            <button
              title="Bouncing Ball"
              className="launcher-btn"
              onClick={this.handleMakeBall.bind(this)}>
              O
            </button>
            <button
              title="Business Simulator"
              className="launcher-btn"
              onClick={this.handleMakeSampleGame.bind(this)}>
              B
            </button>
            </span>
          : null
        }
      </div>
    );
  }
}
