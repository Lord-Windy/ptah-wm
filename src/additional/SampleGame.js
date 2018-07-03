import React, { Component } from 'react'
import PolicyState from './sampleGameStates/PolicyState'
import EntryState from './sampleGameStates/EntryState'
import PeopleState from './sampleGameStates/PeopleState'
import TalkState from './sampleGameStates/TalkState'
import {view_states, read_states,initialState, Policies} from './sampleGameStates/GameKnowledge'


//<TalkState reply={this.handleReply} back={this.handleBack}/>
export default class SampleGame extends Component {

    constructor(props) {
        super(props);
        this.handleReply = this.handleReply.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleTalkTo = this.handleTalkTo.bind(this);
        this.handlePolicyReturn = this.handlePolicyReturn.bind(this);
        this.toRender = this.toRender.bind(this);
        this.state = initialState();
        
    }

    handlePolicyReturn() {
        console.log ("Hi Mum");
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
        let week = this.state.Week;
        let new_view = view_states.PEOPLE;
        let characters = this.state.Characters;

        if (answer){
            new_view = view_states.YES
            characters[this.state.CurrentCharacterID].Responses[week] = read_states.YES; 
        } else {
            new_view = view_states.NO
            characters[this.state.CurrentCharacterID].Responses[week] = read_states.NO;
        }
        console.log(characters);
        week += 1;
        this.setState({
            Week: week,
            ViewState: new_view,
            Characters: characters
        });
    }

    handleBack() {
        this.setState({
            ViewState: view_states.PEOPLE,
            DescriptionText: "Unset",
            ConversationText: "Unset",
            YesText: "Unset",
            NoText: "Unset",
            CurrentCharacterID: -1
        });
    }

    toRender() {
        let renderer = <PeopleState Characters={this.state.Characters} TalkTo={this.handleTalkTo}/>

        if (this.state.ViewState === view_states.TALK) {
            renderer = <TalkState
                conversation={this.state.ConversationText}
                description={this.state.description}
                reply={this.handleReply}
                back={this.handleBack}
                decision={true}
            />
        }
        if (this.state.ViewState === view_states.YES) {
            renderer = <TalkState
                conversation={this.state.YesText}
                description={this.state.description}
                reply={this.handleReply}
                back={this.handleBack}
                decision={false}
            />
        }
        if (this.state.ViewState === view_states.NO) {
            renderer = <TalkState
                conversation={this.state.NoText}
                description={this.state.description}
                reply={this.handleReply}
                back={this.handleBack}
                decision={false}
            />
        }

        return renderer;
    }
    //{this.toRender()}
    render() {
        //let items = ["Bitch", ["Hello", "Something", "Good"], "Please", ["Swibble", "Simply Delicious", "YAYYY"], ["Pling", "Something Else", "Funny third thing"], "I'm da best"];
        //console.log(this.state);
        
        return (
        <div> 
           <PolicyState handleChange={this.handleBack} PolicyList={Policies}/>
        </div>
        );
    }
}