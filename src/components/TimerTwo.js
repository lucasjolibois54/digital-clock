import React, { Component } from 'react'


export default class TimerTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date().toLocaleTimeString()};
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date().toLocaleTimeString()
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
      
      render(){
        return (
          <div>
            <p>Current Date And Time : {this.state.date}</p>
          </div>
        );
      }
    }



