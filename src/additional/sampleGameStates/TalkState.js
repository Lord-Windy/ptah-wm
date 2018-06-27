import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export default class TalkState extends Component {

    constructor(props) {
        super(props);
        this.replyYes = this.replyYes.bind(this);
        this.replyNo = this.replyNo.bind(this);
        this.back = this.back.bind(this);
    }

    replyYes() {
        this.props.reply(true);
    }

    replyNo() {
        this.props.reply(false);
    }

    back() {
        this.props.back();
    }

    render(){
        return(
            <div>
                <div className="talk-column"> 
                    <p>{this.props.conversation}</p>
                </div>
                <div className="picture-column"> 
                    <p> {this.props.description}</p>
                </div>
                <button onClick={this.back}> Back </button>
                <button onClick={this.replyNo}> No </button>
                <button onClick={this.replyYes}> Yes </button>
            </div>
        );
    }
}

TalkState.propTypes = {
    conversation: PropTypes.string,
    description: PropTypes.string,
    reply: PropTypes.func.isRequired,
    back: PropTypes.func.isRequired,
}

TalkState.defaultProps = {
    conversation: "Hello",
    description: "Boyyyyyyyy"
}



