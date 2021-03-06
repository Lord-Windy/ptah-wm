import React, { Component } from 'react';
import Window from './Window';
import Launcher from '../Launcher';

export default class WindowManager extends Component {

  //App object = id, winX, winY, winZ, winWidth, winHeight, space

  constructor(props){
    super(props);

    let Apps = [];
    console.log(Apps);
    this.state = {
      Apps: Apps,
      curID: 1,
      Launcher: null,
      testApp: 'true'
    };

    this.handleResizeWindow = this.handleResizeWindow.bind(this);
    this.handleWindowMove = this.handleWindowMove.bind(this);
    this.handleWindowClose = this.handleWindowClose.bind(this);
    this.handleWindowMaximise = this.handleWindowMaximise.bind(this);
    this.handleAddApp = this.handleAddApp.bind(this);

    this.handleExpandWindowLeft = this.handleExpandWindowLeft.bind(this);
    this.handleExpandWindowRight = this.handleExpandWindowRight.bind(this);
    this.handleExpandWindowUp = this.handleExpandWindowUp.bind(this);
  }


  /**
 * Callback for windows to allow resizing of their windows.
 * @param {Number} id of the app being changed
 * @param {Number} height
 * @param {Number} width
 */
  handleResizeWindow(id, height, width){
    let app = this.findApp(id);

    app.winWidth = width;
    app.winHeight = height;

    this.updateApp(id, app);
  }

  /**
 * Callback for windows to allow moving of their windows.
 * @param {Number} id of the app being changed
 * @param {Number} x
 * @param {Number} y
 */
  handleWindowMove(id, x, y) {
    // Move the window
    let app = this.findApp(id);

    app.winX = x;
    app.winY = y;

    this.updateApp(id, app);
  }

  /**
  * Callback for windows to allow maximising of their windows.
  * @param {Number} id of the app being changed
  */
  handleWindowMaximise(id) {
    let app = this.findApp(id);

    app.winX = 0;
    app.winY = 0;
    app.winWidth = window.innerWidth;
    app.winHeight = window.innerHeight;

    this.updateApp(id, app);
  }

  handleExpandWindowLeft(id, expand) {
    let app = this.findApp(id);
    app.winX = app.winX - expand;
    app.winWidth = app.winWidth + expand;

    this.updateApp(id, app);
  }

  handleExpandWindowRight(id, expand) {
    let app = this.findApp(id);
    app.winWidth = app.winWidth + expand;
    this.updateApp(id, app);
  }

  handleExpandWindowUp(id, expand) {
    let app = this.findApp(id);
    app.winY = app.winY - expand;
    app.winHeight = app.winHeight + expand;
    this.updateApp(id, app);
  }

  /**
 * Callback for windows to allow to destroy themselves
 * @param {Number} id of the app being changed
 */
  handleWindowClose(id) {
    // Close the window
    this.deleteApp(id);
  }

  /**
  * Callback for windows to allow creation of new app.
  * @param {Object: App} App
  */
  handleAddApp(app) {
    //App object = id, winX, winY, winWidth, winHeight, space
    console.log(app);
    console.log(this.state.Apps)
    app.id = this.state.curID;
    let newID = this.state.curID + 1;
    app.winZ = this.state.Apps.length + 1;
    let Apps = this.state.Apps;
    Apps.push(app);

    this.setState({
      Apps: Apps,
      curID: newID
    });
  }

  /**
  * Callback for windows to allow resizing of their windows.
  * @param {Number} id of the app being found
  */
  findApp(id) {
    for (let i = 0; i < this.state.Apps.length; i++){
      let app = this.state.Apps[i];
      if (app.id === id){
        return app;
      }
    }
    return null;
  }

  /**
  * Deletes the app by the given ID
  * @param {Number} id of the app being changed
  */
  deleteApp(id){
    let apps = this.state.Apps;
    for (let i = 0; i < apps.length; i++){
      let app = apps[i];

      if (app.id === id){
        apps.splice(i,1);
        console.log(apps);
        this.setState({
          Apps: apps
        });
        return;
      }
    }
    return null;
  }

  /**
  * Updates the Z position of the calling app to bring it to the foreground.
  * @param {Number} pos in the array
  * @param {Array: Apps} apps
  */
  updateZ(pos, apps){
    //already at the end of the list

    if (apps[pos].winZ === apps.length){
      return apps;
    }

    for (let i = 0; i < apps.length; i++){
      if (i === pos){
        apps[i].winZ = apps.length;
      } else {
        apps[i].winZ = apps[i].winZ - 1;
      }
    }
    return apps;
  }

  /**
  * Updates the state with a new version of the app.
  * @param {Number} id of the app being changed
  * @param {Object: App} toUpdate
  */
  updateApp(id, toUpdate){
    let apps = this.state.Apps;
    for (let i = 0; i < apps.length; i++){
      let app = apps[i];

      if (app.id === id){
        apps[i] = toUpdate;
        apps = this.updateZ(i, apps);
        this.setState({
          Apps: apps
        });
        return;
      }
    }
    return null;
  }

  /**
  * Creates a window component for the render function
  * @param {Number} id
  */
  renderByID(id){
    let app = this.findApp(id);
    if (app === null){
      return null;
    }

    return (
      <div>
        <Window
            title={'Window ' + app.id}
            id={app.id}
            x={app.winX}
            y={app.winY}
            z={app.winZ}
            width={app.winWidth}
            height={app.winHeight}
            children={app.space}
            onResize={this.handleResizeWindow}
            onMove={this.handleWindowMove}
            onClose={this.handleWindowClose}
            onMaximise={this.handleWindowMaximise}
            onExpandLeft={this.handleExpandWindowLeft}
            onExpandUp={this.handleExpandWindowUp}
            onExpandRight={this.handleExpandWindowRight} />
      </div>
    );
  }

  /**
  * Generates an array of components to render
  */
  renderApps(){
    let components = [];

    for (let i = 0; i < this.state.Apps.length; i++){
      components.push(this.renderByID(this.state.Apps[i].id));
    }

    return components;

  }

  render() {
    return (
      <div>
       {this.renderApps()}
       <Launcher
          addApp = {this.handleAddApp}/>
      </div>
    );
  }
}
