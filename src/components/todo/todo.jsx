import React, { Component } from "react";
import ListOfItems from "./listofitems";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      message: ""
    };
    this.handleSubmtit = this.handleSubmtit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleSubmtit(e) {
    const input = this.first.value;
    let isInclude = this.state.items.includes(input);
    if (input !== "") {
      if (isInclude) {
        this.setState({ message: "The item is already on the list" });
      } else {
        this.setState(prevState => {
          return {
            items: prevState.items.concat(input),
            message: ""
          };
        });
      }
    }
    this.first.value = "";
    e.preventDefault();
  }

  deleteItem(element) {
    let filterItem = this.state.items.filter(item => {
      return item !== element;
    });
    this.setState({
      items: filterItem
    });
  }

  render() {
    return (
      <div className="main">
        <span>
          <i class="fas fa-tasks" />
          <h2 className="title">ToDo App</h2>
        </span>
        <div className="todo">
          {this.state.message !== "" ? (
            <div className="alert alert-danger" role="alert">
              {this.state.message}
            </div>
          ) : (
            ""
          )}

          <form onSubmit={this.handleSubmtit} className="fo">
            <input
              className="form-control"
              type="text"
              ref={input => (this.first = input)}
            />
            <button
              type="submit"
              className="btn btn-primary"
              placeholder=" Add tasks here..."
            >
              Add Task{" "}
            </button>
          </form>
          <ListOfItems entries={this.state.items} delete={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default ToDo;
