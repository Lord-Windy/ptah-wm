import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export class Policy extends Component {

    constructor(props){
        super(props);
        let selected = [];
        let zero = 0;
        for (let i = 0; i < this.props.Policies.length; i++) {
            selected.push(zero.toString());
        }

        this.state = {
            Selected: selected
        }
        //this.renderPolicy = this.renderPolicy.bind(this);

    }

    handleChange(selectID, event){
        console.log(selectID);
        console.log(event.target.value);
        let selected = this.state.Selected;
        selected[selectID] = event.target.value;
        this.setState ({
            Selected: selected
        })
        
    }

    renderSelectItem(Item, IDNumber) {
        return <option value={IDNumber}> {Item} </option>
    }

    renderSelected(ItemList, selectID) {
        let iList = [];

        for (let i = 0; i < ItemList.length; i++) {
            iList.push(this.renderSelectItem(ItemList[i], i));
        }
        
         
        return (<select value={0} onChange={this.handleChange.bind(this, selectID)}> {iList} </select>);
    }

    renderPolicy() {

        let returnList = [];
        console.log(this.props.Policies);
        if (this.props.Content.length != this.props.Policies.length +1) {
            console.log("You need to include at least 1 more string length than policy options, otherwise this will crash. It is very particular")
        }

        returnList.push(<span> {this.props.Content[0]} </span>)
       

        for (let i = 0; i < this.props.Policies.length; i++) {
            returnList.push(this.renderSelected(this.props.Policies[i], i));
            returnList.push(<span> {this.props.Content[i+1]} </span>)
        }

        console.log(returnList);

        return (returnList);
    }

    render() {
        console.log(this.state);
        return (<span>
            {this.renderPolicy()}
        </span>);
    }
}


//Content should be 1+ the number of policies
Policy.propTypes = {
    Type: PropTypes.number.isRequired,
    Policies: PropTypes.array.isRequired,
    Content: PropTypes.array.isRequired,
}

export default class PolicyState extends Component {

    render() {
        return(
            <div>
                <p>Example</p>
            </div>
        );
    }
}