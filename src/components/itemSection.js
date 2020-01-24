import React, {Component } from "react";

class ItemSection extends Component {

// can edit count In, Add, Comp, Count Out
// Formula for Total In ->      count in + add column
// Formula for total sold ->    Total In - Count out - comp
// pressing "Settle" in TotalsSection will lock these inputs.


    constructor (props){
        super(props);
        this.state = {
            id : props.item.id,
            img : props.item.img,
            price : props.item.price,
            quantityAvailable : props.item.quantityAvailable,
            countIn : props.item.countIn,
            add : props.item.add,
            comp : props.item.comp,
            countOut : props.item.countOut,
            totalIn: 0,
            totalSold: 0,
            gross: 0
        }
    }

    handleChange = (e) => {
        console.log(e.value);
    }

    // calculation for determining total in value based on countIn and add values.
    // this method should be triggered when a change has been made to countIn or add. 
    calculateTotalIn = () => {
        //add calculation here
        const totalIn = parseInt(this.state.countIn) + parseInt(this.state.add);
        this.state.totalIn = totalIn;
        return totalIn;
    }

    //calculation for determining total items sold based on total in, countOut, and comp values. 
    // this method should be triggered when either of the values are changed. 
    calculateTotalSold = () => {
        const totalSold = parseInt(this.state.totalIn) - parseInt(this.state.countOut) - parseInt(this.state.comp);
        //add calculation here
        this.state.totalSold = totalSold;
        return totalSold;
    }

    // calculation for determining gross total based on total items sold and the unit price. 
    // this should be called when total sold is changed but not when price is changed due to units already being sold at original price.
    calculateGross = () => {
        //add calculation here
        const grossTotal = parseInt(this.state.totalSold) * parseInt(this.state.price);
        this.state.gross = grossTotal;
        return grossTotal.toFixed(2);
    }

    render(){
        const imgURL = `${this.state.img}`
        console.log(this.state.id);
        return (
            <div className="container d-flex">
                <div className="imagePreview">
                    <label>{this.state.id}
                        <img className="itemImage" src={`${process.env.PUBLIC_URL}/assets/images/` + imgURL} alt="samplePoster" />
                    </label>
                </div>
                <div className="price flex-column align-self-center">
                    <p>${this.state.price}</p>
                    </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="borderless" scope="col">QTY Avail.</th>
                            <th scope="col">Count In</th>
                            <th scope="col">Add</th>
                            <th scope="col">Total In</th>
                            <th scope="col">Comp</th>
                            <th scope="col">Count Out</th>
                            <th scope="col">Total Sold</th>
                            <th scope="col" colSpan="2">Gross</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="qty borderless">
                                {this.state.quantityAvailable}
                            </td>
                            <td className="countIn bordered">
                                <input type="text" onChange={this.handleChange(this)} defaultValue={this.state.countIn}/>
                            </td>
                            <td className="add bordered text-success">
                                <input type="text" defaultValue={this.state.add}/>
                            </td>
                            <td className="totalIn bordered text-primary">
                                {this.calculateTotalIn()}
                            </td>
                            <td className="comp bordered">
                                <input className="text-danger" type="text" defaultValue={this.state.comp}/>
                            </td>
                            <td className="countOut bordered">
                                <input type="text" defaultValue={this.state.countOut}/>
                            </td>
                            <td className="totalSold bordered text-primary">
                                {this.calculateTotalSold()}
                            </td>
                            <td className="gross bordered text-primary" colSpan="2" >
                                {this.calculateGross()}
                            </td>
                        </tr>
                        <tr>
                            <td className="borderless"></td>
                            <td colSpan="2" className="more borderless">
                                 <button type="button" className="btn btn-lg moreButton">More</button> 
                            </td>
                            <td>{this.state.totalIn}</td>
                            <td>{this.state.comp}</td>
                            <td>{this.state.countOut}</td>
                            <td>{this.state.totalSold}</td>
                            <td colSpan="2">${this.state.gross.toFixed(2)}</td>
                        </tr>
                    </tbody>
                    </table>
            
            </div>
        );
    }
}

export default ItemSection