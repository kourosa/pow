import React, { Component } from "react";
import Box from "./Box";
import Tooltip from "./Tooltip";

class Container extends Component {
  render() {
    let {
      item,
      items,
      onAddBox,
      onAddContainer,
      onChangeColor,
      onDeleteItem
    } = this.props;

    return (
      <div>
        {this.props.item.type === "Box" ? (
          <Box
            item={item}
            onDelete={onDeleteItem}
            onChangeColor={onChangeColor}
          />
        ) : this.props.item.type === "Con" ? (
          <div className="conStyle">
            <Tooltip
              style={Style}
              item={item}
              onAddBox={onAddBox}
              onAddContainer={onAddContainer}
            >
              <label onDoubleClick={() => this.props.onDeleteItem(item)}>
                Add
              </label>
            </Tooltip>
            <div>
              {items
                .filter(mapItem => mapItem.pID === item.ID)
                .map(mapItem => (
                  <Container
                    key={mapItem.ID}
                    items={items}
                    item={mapItem}
                    onAddBox={onAddBox}
                    onAddContainer={onAddContainer}
                    onChangeColor={onChangeColor}
                    onDeleteItem={onDeleteItem}
                  />
                ))}
            </div>
          </div>
        ) : (
          "NO Item"
        )}
      </div>
    );
  }
}

const Style = {
  padding: "5px",
  margin: "15px",
  background: "lightgray"
};

export default Container;
