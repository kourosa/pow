import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Container from "./Components/Container";

@inject("Store")
@observer
class App extends Component {
  componentWillMount() {
    this.props.Store.addContainer("Root");
  }

  render() {
    return (
      <div>
        {this.props.Store.Items.filter(mapItem => mapItem.pID === "Root").map(
          mapItem => (
            <Container
              key={mapItem.ID}
              items={this.props.Store.Items}
              item={mapItem}
              onAddBox={this.handleAddBox}
              onAddContainer={this.handleAddContainer}
              onChangeColor={this.handleChangeColor}
              onDeleteItem={this.handleDelete}
            />
          )
        )}
      </div>
    );
  }

  handleAddBox = parentID => {
    this.props.Store.addBox(parentID);
  };

  handleAddContainer = parentID => {
    this.props.Store.addContainer(parentID);
  };

  handleDelete = itemID => {
    this.props.Store.deleteItem(itemID);
  };

  handleChangeColor = event => {
    event.target.style.background =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  };
}
export default App;
