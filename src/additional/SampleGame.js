import React, { Component } from 'react';
import EntryState from './sampleGameStates/EntryState'
import PeopleState from './sampleGameStates/PeopleState'
import TalkState from './sampleGameStates/TalkState'


export default class SampleGame extends Component {

    constructor(props) {
        super(props);
        this.handleReply = this.handleReply.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleReply(answer){
        console.log("Hello");
    }

    handleBack() {
        console.log("back");
    }

    render() {
        return (
        <div> 
            <TalkState reply={this.handleReply} back={this.handleBack}/>
        </div>
        );
    }
}