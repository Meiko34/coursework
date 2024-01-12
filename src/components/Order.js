import React, { Component } from "react";
import { MdDeleteOutline } from "react-icons/md";

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img alt="" src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        {/* <p>{this.props.item.desc}</p> */}
        <p>{this.props.item.price}</p>

        <MdDeleteOutline
          className="delete-icon"
          onClick={() => this.props.onDelete(this.props.item.id)}
        />
      </div>
    );
  }
}

export default Order;
