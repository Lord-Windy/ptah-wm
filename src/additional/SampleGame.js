import React, { Component } from 'react';
import EntryState from './sampleGameStates/EntryState'
import PeopleState from './sampleGameStates/PeopleState'
import TalkState from './sampleGameStates/TalkState'
import {view_states, initialState} from './sampleGameStates/GameKnowledge'


//<TalkState reply={this.handleReply} back={this.handleBack}/>
export default class SampleGame extends Component {

    constructor(props) {
        super(props);
        this.handleReply = this.handleReply.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleTalkTo = this.handleTalkTo.bind(this);
        this.toRender = this.toRender.bind(this);
        this.state = initialState();
    }

    handleTalkTo(personID) {
        let person = this.state.Characters[personID];
        let result = person.Func(person, this.state);

        this.setState({
            DescriptionText: result.Description,
            ConversationText: result.Conversation,
            YesText: result.YesReply,
            NoText: result.NoReply,
            ViewState: view_states.TALK,
            CurrentCharacterID: personID
        });
    }

    handleReply(answer){
        if (answer){
            this.setState({
                ViewState: view_states.YES
            });
        } else {
            this.setState({
                ViewState: view_states.NO
            });
        }
    }

    handleBack() {
        console.log("back");
    }

    toRender() {
        let renderer = <PeopleState Characters={this.state.Characters} TalkTo={this.handleTalkTo}/>

        if (this.state.ViewState === view_states.TALK) {
            renderer = <TalkState
                conversation={this.state.ConversationText}
                description={this.state.description}
                reply={this.handleReply}
                back={this.handleBack}
            />
        }
        if (this.state.ViewState === view_states.YES) {
            renderer = <TalkState
                conversation={this.state.YesText}
                description={this.state.description}
                reply={this.handleReply}
                back={this.handleBack}
            />
        }
        if (this.state.ViewState === view_states.NO) {
            renderer = <TalkState
                conversation={this.state.NoText}
                description={this.state.description}
                reply={this.handleReply}
                back={this.handleBack}
            />
        }

        return renderer;
    }

    render() {
        return (
        <div> 
           {this.toRender()}
        </div>
        );
    }
}