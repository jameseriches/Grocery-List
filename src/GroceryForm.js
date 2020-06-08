import React from "react";

class GroceryForm extends React.Component {
  state = { groceryName: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.groceryName);
    this.setState({ groceryName: "" });
  };
  handleChange = (e) => {
    console.log(e);
    this.setState({ groceryName: e.target.value });
  };

  render() {
    const { groceryName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={groceryName}
          name="groceryName"
          onChange={this.handleChange}
          required
          placeholder="Add a Item"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default GroceryForm;
