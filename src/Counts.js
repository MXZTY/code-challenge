import React, { Component } from 'react';
import './App.css';
import Items from './components/items.js';
import Totals from './components/totals.js';
import inventory from './sampleItems.json';


class Counts extends Component {
  constructor(props){
    super(props);
    //set the state items to the imported items from sampleItems.json
    this.state = {
      inventory : inventory
    }
  }
  
  render(){
    return (
      <div className="App">
        {/* pass inventory to the item.js class to be converted to objects. */}
          <Items inventory={this.state.inventory} />

        {/* render total section */}
          < Totals />

      </div>
    );
  }
}

export default Counts;
