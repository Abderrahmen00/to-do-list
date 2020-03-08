import React from "react";

export default class ToDo extends React.Component {
  state = {
    todo: ["hello", "how are you"],
    text: "",
    isClicked: false
  };

  addtodo() {
    let ba = this.state.todo;
    ba.push(this.state.text);
    this.setState({ todo: ba });
    this.setState({ text: "" });
  }

  render() {
    const isOn = this.state.isClicked;
    return (
      <div className="di">
        <div className="di1">
          <input
            placeholder="Enter"
            className="inp"
            value={this.state.text}
            type="text"
            onChange={e => {
              this.setState({ text: e.target.value });
            }}
          />
          <button
            className="but"
            onClick={() => {
              this.addtodo();
            }}
          >
            Add
          </button>
          <div>
            {this.state.todo.map(a => (
              <div className={isOn ? "uc" : "u"}>
                
                <h2
                  onClick={() => {
                    this.setState({ isClicked: !isOn });
                  }}
                  className="l"
                >
                  {a}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

