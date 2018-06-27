import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export default class PeopleState extends Component {

    constructor(props){
        super(props);

        //this.returnTalkTo = this.returnTalkTo.bind(this);

    }

    returnTalkTo(i) {
        this.props.TalkTo(i);
    }

    renderIndividualCharacter(character, i) {
        
        return(<div onClick={this.returnTalkTo.bind(this, i)}> 
            {character.Name}
        </div>);
    }

    renderCharacters() {
        let characters = [];
        for (let i = 0; i < this.props.Characters.length; i++){
            characters.push(this.renderIndividualCharacter(this.props.Characters[i], i));
        }

        return characters;
    }

    render() {
        return (
            <div>
            <div className="people-container"> 
                {this.renderCharacters()}
                
            </div>
            <button>Back</button>
            </div>
        );
    }
}

PeopleState.propTypes = {
    Characters: PropTypes.array.isRequired,
    TalkTo: PropTypes.func.isRequired,
}