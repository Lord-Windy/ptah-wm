import React, { Component } from 'react';
import EntryState from './sampleGameStates/EntryState'
import PeopleState from './sampleGameStates/PeopleState'


export default class SampleGame extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
        <div> 
            <PeopleState/>
        </div>
        );
    }
}