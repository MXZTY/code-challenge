import React, { Component } from 'react';
import './App.css';
import ItemSection from './components/itemSection.js';
import TotalsSection from './components/totalsSection.js';
import items from './sampleItems.json';
// import poster from '../poster.jpg';


class App extends Component {
  constructor(props){
    super(props);
    //set the state items to the imported items from sampleItems.json
    this.state = {
      items: items
    }
  }
  
  render(){
    return (
      <div className="App">
        {/* render line items */}
          {items.items.map((item) => {
            console.log(item)
            return < ItemSection key={item.id} item={item} />
          })}

        {/* render total section */}
          < TotalsSection />

      </div>
    );
  }
}

export default App;
