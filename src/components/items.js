import React, {Component} from "react";
import Item from "./item.js";

class Items extends Component {

    render(){
        console.log(this.props);
        return ( 
            this.props.inventory.items.map((item) => {
                console.log(item)
                return < Item key={item.id} item={item} />
              })
        
        );
    }
}
export default Items;