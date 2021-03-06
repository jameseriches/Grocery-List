import React, { Component } from "react";
import List from "./List";
import GroceryForm from "./GroceryForm";
import "./App.css";

class App extends Component {
  state = {
    groceries: [
      { id: 1, name: "Bread", complete: false },
      { id: 2, name: "Fruit", complete: false },
      { id: 3, name: "Eggs", complete: false },
      { id: 4, name: "Corn", complete: false },
      { id: 5, name: "Donuts", complete: false },
      { id: 6, name: "Milk", complete: false },

    ],
    filter: "All",
  };

  filterGroceries = () => {
    const { groceries, filter } = this.state;
    switch (filter) {
      case "Active":
        return groceries.filter((t) => !t.complete);
      case "Complete":
        return groceries.filter((t) => t.complete);
      default:
        return groceries;
    }
  };

  addItem = (groceryName) => {
    console.log();
    const newGrocery = { id: `${Math.random()}`, name: groceryName, complete: false };
    const newGroceries = [newGrocery, ...this.state.groceries];
    this.setState({
      groceries: newGroceries,
    });
  };

  handleClick = (id) => {
    console.log("click");
    console.log(id);
    const { groceries } = this.state;
    const newGroceries = groceries.map((grocery) => {
      if (grocery.id !== id) return grocery;
      return { ...grocery, complete: !grocery.complete };
    });
    this.setState({
      groceries: newGroceries,
    });
  };
  render() {
    return (
      <div >
        <h1 class="header">Shopping Forget-Me-Nots</h1>
        <div class="form">
        <GroceryForm addItem={this.addItem} />
        </div>
        <br/>
        <div class = "list">
        <List 
          groceryClick={this.handleClick}
          name={"Your List"}
          items={this.filterGroceries()}
          />
          </div>
          <div>
          <div class = "pic">
          </div>
          <div class="ratings">
            <p>
              <br />
              <br />
              "5 Stars App" -Harlan
            
            </p>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
