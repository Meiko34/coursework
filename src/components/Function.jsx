import React, { Component } from "react";

export class Function extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Чай Улун",
          img: "oolong.jpg",
          desc: "Самый лучший чай",
          characteristics: "Выращен на чудо поле.",
          category: "green",
          price: "300 руб.",
        },
        {
          id: 2,
          title: "Чай Рубин Цейлона",
          img: "ruby.jpg",
          desc: "Самый лучший чай",
          category: "black",
          price: "300 руб.",
        },
        {
          id: 3,
          title: "Чай Сенча",
          img: "sencha.jpg",
          desc: "Самый лучший чай",
          category: "green",
          price: "300 руб.",
        },
        {
          id: 4,
          title: "Дянь Хун",
          img: "dianhong.jpg",
          desc: "Самый лучший чай",
          category: "red",
          price: "300 руб.",
        },
      ],
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
    return <div>function</div>;
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
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

    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default Function;
