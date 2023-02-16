import React, { Component } from "react";

export default class TimerTwo extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date().toLocaleTimeString(),
    });
  }

  /*state={
        time : new Date().toLocaleTimeString("en-US"),
      }


      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }*/

  render() {
    return (
      <div>
        <p className="bottom-5 absolute mb-2 right-5 developer mt-10 italic font-normal mr-10">
          Developed by{" "}
          <a
            className="underline text-gray-500 italic font-normal"
            href="https://www.lucasjolibois.com/"
            target="_blank"
            rel="noreferrer"
          >
            Lucas Jolibois
          </a>
        </p>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-5xl sm:text-7xl font-semibold text-gray-200">
            {this.state.date}
          </p>
          <p className=" text-gray-300 max-w-sm">
            <b>Made using:</b> Constructor, ComponentDidMount, ComponentDidUnmount, render
          </p>
        </div>
      </div>
    );
  }
}
