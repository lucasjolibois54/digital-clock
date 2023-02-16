import React, { Component } from 'react'


export default class TimerTwo extends Component {
    
    state={
        time : new Date(),
      }


      componentDidMount() {
        this.interval = setInterval(() => Date(), 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
      
      render(){
        return (
          <div className="App">
            <p>Current Time : {this.state.time.toLocaleTimeString("en-US")}</p>
          </div>
        );
      }
    }
