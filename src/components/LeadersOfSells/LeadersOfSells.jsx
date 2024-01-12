import React, { Component } from "react";
import { product } from "../products";
import "./LeadersOfSells.css";

function WayToTeach(props) {
  return (
    <div className="item">
      <img
        alt=""
        src={"./img/" + props.img}
        onClick={() => this.props.onShowItem(this.props.item)}
      />
      <h2>{props.title}</h2>
      {/* <p>{props.desc}</p> */}
      <b>{props.price}</b>
      <div
        className="add-to-cart "
        onClick={() => this.props.onAdd(this.props.item)}
      >
        +
      </div>
    </div>
  );
}

export class LeadersOfSells extends Component {
  render() {
    return (
      <main>
        <div>
          <h3>Лидеры продаж</h3>
        </div>

        <div className="owl-stage">
          <WayToTeach
            title={product[0].title}
            desc={product[0].desc}
            price={product[0].price}
            img={product[0].img}
          />
          <WayToTeach
            title={product[1].title}
            desc={product[1].desc}
            price={product[1].price}
            img={product[1].img}
          />
          <WayToTeach
            title={product[2].title}
            desc={product[2].desc}
            price={product[2].price}
            img={product[2].img}
          />
        </div>
      </main>
    );
  }
}

export default LeadersOfSells;
