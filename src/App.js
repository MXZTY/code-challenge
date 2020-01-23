import React, { Component } from 'react';
import './App.css';
import ItemsSection from './components/itemsSection.js';
import TotalsSection from './components/totalsSection.js';
// import poster from '../poster.jpg';


class App extends Component {
  constructor(props){
    super(props);
    //set the total Units sold, and create a temporary lineItem 
    this.state = {
      totalUnits: 0, 
      lineItem: {
        imgSrc: './images/poster.jpg', 
        countIn: 12, 
        add: 0,
        comp: 0, 
        countOut: 5,
      }
    }
  }

  render(){
    console.log(this.state.lineItem);
    return (
      <div className="App">
        {/* render line items */}
          <  ItemsSection lineItem={this.state.lineItem}/>

        {/* render total section */}
          < TotalsSection />

      </div>
    );
  }
}

export default App;
