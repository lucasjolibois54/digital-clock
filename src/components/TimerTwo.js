import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class TimerTwo extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date().toLocaleTimeString(),
    showTime: true, };
  }


  toggleTime = () => {
    this.setState(prevState => ({
      showTime: !prevState.showTime
    }));
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
    const { showTime } = this.state;
    return (
      <div>
        <p className="bottom-5 absolute mb-2 right-5 developer mt-10 italic font-normal mr-10">
          Visit the:{" "}
          <Link to="/" className="underline text-gray-500 italic font-normal">
            Functional Component version
          </Link>
        </p>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {showTime && (<p className="text-5xl sm:text-7xl font-semibold text-gray-200">
            {this.state.date}
          </p> )}
          <p className=" text-gray-300 max-w-sm">
            <b>Made using:</b> Constructor, ComponentDidMount,
            ComponentDidUnmount, render
          </p>
          <button className='border-blue-400 text-blue-400 border-2 w-40 py-1 mt-4 rounded-lg' onClick={this.toggleTime}>
              {showTime ? 'Hide Time' : 'Show Time'}
            </button>
        </div>
        <Outlet />
      </div>
    );
  }
}
