import React, { Component } from "react";
class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleDecrement = this.handleDecrement.bind(this);
  //   //    this.handleIncrement = this.handleIncrement.bind(this);
  //   // console.log(this.hadleIncrement)
  // }
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"],
    tagCount: []
  };

  buttonDec = (
    <button
      className=" btn btn-secondary p-4 m-2 btn-lg d-inline"
      onClick={() => this.handleDecrement({ id: 1 })}
    >
      -
    </button>
  );

  buttonInc = (
    <button
      onClick={() => this.handleIncrement({ id: 1 })}
      className="btn btn-secondary p-4 m-2 btn-lg d-inline"
    >
      +
    </button>
  );

  render() {
    return (
      <React.Fragment>
        <ul className="list-group m-0 overflow-hidden p-0 ml-5 mr-5">
          {this.getElements()}
        </ul>
      </React.Fragment>
    );
  }

  formatCount = () => {
    var { count } = this.state;
    return count === 0 ? "ZERO" : count;
  };

  getBadgeClasses = () => {
    let classes = "badge m-2 p-4 d-inline badge-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  };

  getElements = () => {
    return this.state.tags.map(t => (
      <li key={t} className="list-group-item p-2 m-auto">
        <h2 className="d-inline mr-3">{t}</h2>

        {this.buttonDec}

        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>

        {this.buttonInc}
      </li>
    ));
  };

  indexing = t => {
    console.log("debug", t);
  };

  handleIncrement = product => {
    console.log(product.id);
    this.setState({ count: this.state.count + 1 });
    //console.log(this.state.count);
  };
  handleDecrement = product => {
    this.setState({ count: this.state.count > 0 ? this.state.count - 1 : 0 });
    console.log(product.id);
  };
}

export default Counter;
