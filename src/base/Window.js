import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

const ribbonLength = 7;

export default class Window extends Component {

  constructor(props) {
    super(props);

    this.state = {
      offsetX: 0,
      offsetY: 0,
      topRibbon: false,
      leftRibbon: false,
      rightRibbon: false,
      headerMouseDown: false,
      buttonMouseDown: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleCloseButtonDown = this.handleCloseButtonDown.bind(this);
    this.handleCloseButtonUp = this.handleCloseButtonUp.bind(this);
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
    this.handleMaximiseButtonClick = this.handleMaximiseButtonClick.bind(this);

    // Bind the mousemove and mouseup events to the entire page
    // Otherwise the 'dragging' will stop if the mouse leaves the header
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown(event) {
    let windowRect = this.refs.window.getBoundingClientRect();

    let top = false;
    let left = false;
    let right = false;

    let Top = event.clientY -windowRect.top;
    let Left = event.clientX - windowRect.left;
    let Right =  windowRect.right - event.clientX;

    console.log("Top Spot = " + Top + ", Left Spot: " + Left + ", Right Spot: " + Right);
    //check if inside ribbon

    // top
    if (Top <= ribbonLength) {
      top = true;
    }

    // left
    if (Left <= ribbonLength) {
      left = true;
    }

    // right
    if (Right <= ribbonLength) {
      right = true;
    }

    // Save the mouse's offest relative to the top left of the window
    this.setState({
      offsetX: event.clientX - windowRect.left,
      offsetY: event.clientY - windowRect.top,
      topRibbon: top,
      leftRibbon: left,
      rightRibbon: right,
      headerMouseDown: true,
    });
  }

  handleMouseUp(event) {
    this.setState({
      topRibbon: false,
      leftRibbon: false,
      rightRibbon: false,
      headerMouseDown: false,
      buttonMouseDown: false
    });
  }

  handleMouseMove(event) {
    // If the header is being dragged and we're not holding a header button
    if (this.state.headerMouseDown && !this.state.buttonMouseDown) {
      if (this.state.rightRibbon || this.state.leftRibbon || this.state.topRibbon) {
        if (this.state.rightRibbon) {
          let expand = event.clientX - (this.props.x + this.props.width);
          this.props.onExpandRight(this.props.id, expand);
        }

        if (this.state.leftRibbon) {
          let expand = this.props.x - event.clientX;
          this.props.onExpandLeft(this.props.id, expand);
        }

        if (this.state.topRibbon) {
          let expand = this.props.y - event.clientY;
          this.props.onExpandUp(this.props.id, expand);
        }
      } else {

        // started
        let windowRect = this.refs.window.getBoundingClientRect();
        let x = event.clientX - this.state.offsetX;
        let y = event.clientY - this.state.offsetY;
        this.props.onMove(this.props.id, x, y);
      }
    }
  }

  handleCloseButtonDown(event) {
    this.setState({
      buttonMouseDown: true
    });
  }

  handleCloseButtonUp(event) {
    this.setState({
      buttonMouseDown: false
    });
  }

  handleCloseButtonClick(event) {
    if (this.props.onClose) {
      this.props.onClose(this.props.id);
    }
  }

  handleMaximiseButtonClick(event) {
    if (this.props.onMaximise) {
      this.props.onMaximise(this.props.id);
    }
  }

  style() {
    return {
      top: `${this.props.y}px`,
      left: `${this.props.x}px`,
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      zIndex: `${this.props.z}`
    };
  }

  render() {
    return (
      <div
        className="window"
        style={this.style()}
        ref="window">
        <div
          className="header"
          onMouseDown={this.handleMouseDown}>
          {this.props.title}
          {(this.props.onClose)
            ? <button
                className="header-btn"
                onMouseDown={this.handleCloseButtonDown}
                onMouseUp={this.handleCloseButtonUp}
                onClick={this.handleCloseButtonClick}>
                &#x2715;
              </button>
            : null}
          {(this.props.onMaximise)
            ? <button
                className="header-btn"
                onClick={this.handleMaximiseButtonClick}>
                &#9744;
              </button>
            : null}
      </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Window.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  space: PropTypes.object
}

Window.defaultProps = {
  title: 'Window',
  width: 640,
  height: 480
};
