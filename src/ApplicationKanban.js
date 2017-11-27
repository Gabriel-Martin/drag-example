import React, { Component } from "react";

import { DragDropContext } from "react-dnd";
import HTML5Backend, { NativeTypes } from "react-dnd-html5-backend";

import ApplicationStatusColumn from "./ApplicationStatusColumn";
import Application from "./Application";

const statuses = [
  {
    value: "APPLIED",
    label: "Applied",
    accepts: ["ITEM"]
  },
  {
    value: "INTERESTED",
    label: "Interested",
    accepts: ["ITEM"]
  },
  {
    value: "PROCESSING",
    label: "Processing",
    accepts: ["ITEM"]
  },
  {
    value: "HIRED",
    label: "Hired",
    accepts: ["ITEM"]
  }
];

class ApplicationKanban extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statuses,
      applications: [
        { name: "Jack", type: "ITEM" },
        { name: "Joe", type: "ITEM" },
        { name: "Jill", type: "ITEM" }
      ]
    };
  }

  handleDrop = (index, item) => {
    console.log("make request to update app", index, item);
  };

  render() {
    const { applications, statuses } = this.state;

    return (
      <div>
        {statuses.map(({ accepts, label }, index) => (
          <ApplicationStatusColumn
            key={index}
            label={label}
            accepts={accepts}
            onDrop={item => this.handleDrop(index, item)}
            options={applications.map(({ name, type }, index) => (
              <Application key={index} name={name} type={type} />
            ))}
          />
        ))}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ApplicationKanban);
