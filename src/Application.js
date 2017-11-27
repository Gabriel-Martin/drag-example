import React, { Component } from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";

const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left"
};

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name
    };
  }
};

class Application extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  render() {
    const { name, isDragging, connectDragSource } = this.props;

    return connectDragSource(
      <div style={{ ...style, color: "black" }}>{name}</div>
    );
  }
}

export default DragSource(
  props => props.type,
  boxSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(Application);
