import React, { Component } from "react";
import Categories from "./Categories";
import Items from "./Items";
import Header from "./Header";
import { product } from "./products";
import LeadersOfSells from "./LeadersOfSells/LeadersOfSells";

// import Order from "./Order";

import ShowFullItem from "./ShowFullItem";
import AboutUs from "./AboutUs";
// import Function from "./Function";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: product,
      // items: [
      //   {
      //     id: 1,
      //     title: "Чай Улун",
      //     img: "oolong.jpg",
      //     desc: "Самый лучший чай",
      //     characteristics: "Выращен на чудо поле.",
      //     category: "green",
      //     price: "300 руб.",
      //   },
      //   {
      //     id: 2,
      //     title: "Чай Рубин Цейлона",
      //     img: "ruby.jpg",
      //     desc: "Самый лучший чай",
      //     category: "black",
      //     price: "300 руб.",
      //   },
      //   {
      //     id: 3,
      //     title: "Чай Сенча",
      //     img: "sencha.jpg",
      //     desc: "Самый лучший чай",
      //     category: "green",
      //     price: "300 руб.",
      //   },
      //   {
      //     id: 4,
      //     title: "Дянь Хун",
      //     img: "dianhong.jpg",
      //     desc: "Самый лучший чай",
      //     category: "red",
      //     price: "300 руб.",
      //   },
      // ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <div className="presentation"></div>

        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}

        <LeadersOfSells />

        <AboutUs />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  deleteEverything() {
    this.setState({ orders: [] });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
    // this.setState({ orders: [] });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    // нужно избавиться от object
    localStorage.setItem("order", this.state.orders);
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default Home;
