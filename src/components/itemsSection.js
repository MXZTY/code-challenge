import React, {Component } from "react";

class ItemsSection extends Component {

// can edit count In, Add, Comp, Count Out
// Formula for Total In ->      count in + add column
// Formula for total sold ->    Total In - Count out - comp
// pressing "Settle" in TotalsSection will lock these inputs.


    constructor (props){
        super(props);
        //set up temporary line item passed in from app
        console.log(props)

        
    }

    render(){
        const imgURL = require( '../images/poster.jpg' );
        return (
            <div className="itemLine">
                <img src={imgURL} alt="samplePoster" />
            </div>
        );
    }
}

export default ItemsSection