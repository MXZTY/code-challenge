import React, {Component} from "react";

class ItemRow extends Component {

    // state = {
    //     totalIn: this.props.totalIn, 
    //     totalSold: this.props.totalSold,
    //     grossTotal: this.props.grossTotal
    // };
 
    handleChange = (e) => {
        console.log(
            e
        );
    }

    buildTableRow = () => {
        const sizeData = this.props.sizeData;
        return (
            <tr key={sizeData.size}>
                <td key={Math.random(100)}className="price borderless">
                    {/* ${this.props.sizeData.price.toFixed(2)} */}
                    <input readOnly="readonly" onBlur={this.handleChange(this)} value={"$" + this.props.sizeData.price.toFixed(2)}/>
                </td>
                <td key={Math.random(100)} className="qty borderless">
                    <input 
                        type="text"
                        readOnly="readonly" 
                        defaultValue={this.props.sizeData.quantityAvailable}
                    />
                </td>
                <td key={Math.random(100)} className="countIn bordered">
                    <input 
                        type="text" 
                        onBlur={this.handleChange(this)} 
                        defaultValue={sizeData.countIn}
                    />
                </td>
                <td key={Math.random(100)} className="add bordered text-success">
                    <input 
                        type="text" 
                        onBlur={this.handleChange(this)} 
                        defaultValue={sizeData.add}
                    />
                </td>
                <td key={Math.random(100)} className="totalIn bordered text-primary">
                    <input 
                        type="text" 
                        readOnly="readonly"
                        defaultValue={this.props.totalIn(sizeData)} 
                    />
                </td>
                <td className="comp bordered">
                    <input 
                        className="text-danger" 
                        type="text" 
                        onBlur={this.handleChange(this)}
                        defaultValue={sizeData.comp}
                    />
                </td>
                <td className="countOut bordered">
                    <input 
                        type="text" 
                        onBlur={this.handleChange(this)} 
                        defaultValue={sizeData.countOut}
                    />
                </td>
                <td className="totalSold bordered text-primary">
                    <input 
                        type="text" 
                        readOnly="readonly"
                        defaultValue={this.props.totalSold(sizeData)} 
                    />
                </td>
                <td className="gross bordered text-primary" colSpan="2" >
                    <input 
                        type="text" 
                        readOnly="readonly"
                        className="text-primary" 
                        value={this.props.grossTotal(sizeData)} 
                    />
                </td>
            </tr>
        );
    }

    render() {
        return(
            this.buildTableRow()
        )
    }
}
export default ItemRow;