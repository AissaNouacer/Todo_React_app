import React, { Component } from "react";

class ListOfItems extends Component {
  constructor(props) {
    super(props);

    this.creatTasks = this.creatTasks.bind(this);
  }
  creatTasks(item, i) {
    i++;
    return (
      <tr key={item.toString()} onClick={() => this.delete(item)}>
        <th scope="row">{i}</th>
        <td>{item}</td>
      </tr>
    );
  }
  delete(key) {
    this.props.delete(key);
  }

  render() {
    const items = this.props.entries;

    let item = items.map(this.creatTasks);

    return (
      <table className="table  list">
        <tbody key={item.toString()}>{item}</tbody>
      </table>
    );
  }
}

export default ListOfItems;
