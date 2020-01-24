import React, {Component} from "react";
import ItemRow from "./itemRow.js";

class Item extends Component {

    constructor(props){
        super(props);
        this.state = {
            totalIn: 0,
            totalSold: 0,
            gross: 0
        }
    }

    // calculation for determining total in value based on countIn and add values.
    // this method should be triggered when a change has been made to countIn or add. 
    calculateTotalIn = (sizeData) => {
        const totalIn = sizeData.countIn + sizeData.add;
        return totalIn;
    }

    //calculation for determining total items sold based on total in, countOut, and comp values. 
    // this method should be triggered when either of the values are changed. 
    calculateTotalSold = (sizeData) => {
        const totalSold = this.calculateTotalIn(sizeData) - sizeData.countOut - sizeData.comp;
        return totalSold;
    }

    // calculation for determining gross total based on total items sold and the unit price. 
    // this should be called when total sold is changed but not when price is changed due to units already being sold at original price.
    calculateGross = (sizeData) => {
        const grossTotal = this.calculateTotalSold(sizeData) * sizeData.price;
        // this.state.gross = grossTotal;
        return grossTotal.toFixed(2);
    }

    buildHeaders = () => {
        return (
            <thead>
                <tr>
                    <th className="borderless" scope="col"></th>
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
        );
    }

    buildTotalsRow = (item) => {
        let totalIn = 0;
        let comp = 0;
        let countOut = 0;
        let totalSold = 0;
        let gross = 0;
        item.sizes.map((size) => {
            totalIn = parseInt(totalIn) + parseInt(size.totalIn);
            comp = comp + size.comp;
            countOut = countOut + size.countOut;
            totalSold = totalSold + size.totalSold;
            gross = gross + size.grossTotal;
        })
        item.comp = comp;
        item.totalIn = totalIn;
        item.totalSold = totalSold;
        item.grossTotal = gross;


        return(
            <tr>
                <td className="price borderless"></td>
                <td colSpan="2" className="more borderless">
                    <button type="button" className="btn btn-lg moreButton">More</button> 
                </td>
                <td></td>
                <td>{totalIn}</td>
                <td>{comp}</td>
                <td>{countOut}</td>
                <td>{totalSold}</td>
                <td >{gross}</td>
            </tr>
        );
    }

    render(){
        const imgURL = `${this.props.item.img}`
        return(
            <div className="container d-flex">
                <div className="imagePreview">
                    <label>
                        {this.props.item.id}
                        <img className="itemImage" src={`${process.env.PUBLIC_URL}/assets/images/` + imgURL} alt="samplePoster" />
                    </label>
                </div>
                <table>
                    {this.buildHeaders()}
                    <tbody>
                        {this.props.item.sizes.map((size, index) => {
                            return(
                                <ItemRow 
                                    key={size.size + index + ""}
                                    handleChange= {this.handleChange}
                                    sizeData={size} 
                                    grossTotal={this.calculateGross} 
                                    totalSold={this.calculateTotalSold} 
                                    totalIn={this.calculateTotalIn} 
                                />
                            );
                        })}
                        {this.buildTotalsRow(this.props.item)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Item;