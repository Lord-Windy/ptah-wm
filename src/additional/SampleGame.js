import React, { Component } from 'react';
import EntryState from './sampleGameStates/EntryState'
import PeopleState from './sampleGameStates/PeopleState'
import TalkState from './sampleGameStates/TalkState'
import {initialState} from './sampleGameStates/GameKnowledge'


//<TalkState reply={this.handleReply} back={this.handleBack}/>
export default class SampleGame extends Component {

    constructor(props) {
        super(props);
        this.handleReply = this.handleReply.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleTalkTo = this.handleTalkTo.bind(this);
        this.state = initialState();
    }

    handleTalkTo(personID) {
        let person = this.state.Characters[personID];
        console.log(person.Func(person, this.state));
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
            <PeopleState Characters={this.state.Characters} TalkTo={this.handleTalkTo}/>
        </div>
        );
    }
}