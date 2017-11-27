import React, { Component } from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";

const style = {
  // height: "12rem",
  width: "12rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left"
};

const columnTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem());
  }
};

class ApplicationStatusColumn extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
    lastDroppedItem: PropTypes.object,
    onDrop: PropTypes.func.isRequired
  };

  render() {
    const { value, label, accepts, options, connectDropTarget } = this.props;

    return connectDropTarget(
      <div style={{ ...style, border: "1px solid black" }}>
        <h1 style={{ color: "black" }}>{label}</h1>
        {options}
      </div>
    );
  }
}

export default DropTarget(
  props => props.accepts,
  columnTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget()
  })
)(ApplicationStatusColumn);
