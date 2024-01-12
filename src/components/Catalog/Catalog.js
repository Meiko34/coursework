import React, { Component } from "react";
// import Item from "./Item";
// import ShowFullItem from "./ShowFullItem";
import Categories from "../Categories";
import { product } from "../products";
import "./Catalog.css";

function WayToTeach(props) {
  return (
    // <li>
    //   <h2>{props.title}</h2>
    //   <p>{props.desc}</p>
    // </li>

    <div className="item">
      <img
        alt=""
        src={"./img/" + props.img}
        onClick={() => this.props.onShowItem(this.props.item)}
      />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
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

export class Catalog extends Component {
  render() {
    return (
      <main>
        <div>
          <h3>Каталог</h3>
          <Categories chooseCategory={this.chooseCategory} />
        </div>

        <div className="catalog">
          <WayToTeach
            title={product[0].title}
            // desc={product[0].desc}
            price={product[0].price}
            img={product[0].img}
          />
          <WayToTeach
            title={product[1].title}
            // desc={product[1].desc}
            price={product[1].price}
            img={product[1].img}
          />
          <WayToTeach
            title={product[2].title}
            // desc={product[2].desc}
            price={product[2].price}
            img={product[2].img}
          />
          <WayToTeach
            title={product[3].title}
            // desc={product[3].desc}
            price={product[3].price}
            img={product[3].img}
          />
          <WayToTeach
            title={product[4].title}
            // desc={product[4].desc}
            price={product[4].price}
            img={product[4].img}
          />
          <WayToTeach
            title={product[5].title}
            // desc={product[5].desc}
            price={product[5].price}
            img={product[5].img}
          />
          <WayToTeach
            title={product[6].title}
            // desc={product[6].desc}
            price={product[6].price}
            img={product[6].img}
          />
        </div>
      </main>
    );
  }
}

export default Catalog;
