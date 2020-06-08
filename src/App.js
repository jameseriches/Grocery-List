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
    //step  1 create the new object(grocery)
    const newGrocery = { id: `${Math.random()}`, name: groceryName, complete: false };
    // step 2 create a new groceries array with new object in it
    const newGroceries = [newGrocery, ...this.state.groceries];
    //step 3 setState
    this.setState({
      groceries: newGroceries,
    });
  };

  handleClick = (id) => {
    console.log("click");
    console.log(id);
    // i have an id and need to find the matching id and toggle the complete in that object
    // editing my state map
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
          // items={this.state.groceries}
          items={this.filterGroceries()}
          />
          </div>
          <div>
          <div class = "pic">
          </div>
          <div class="ratings">
            <p>
              "5 Stars App" -Harlan
            
            </p>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
