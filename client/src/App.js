import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { physicians: [] };
  }

  getPhysicians() {
    fetch("http://localhost:9000/physicians")
        .then(res => res.text())
        .then(res => this.setState({ physicians: res }))
        .catch(err => err);
  };


  getAppointments(physicianId) {
    fetch(`http://localhost:9000/appointments/${physicianId}`)
    .then(res => res.text())
    .then(res => this.setState({ physicians: res }))
    .catch(err => err);
  }

  componentDidMount() {
    this.getPhysicians()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Notable App
        </header>
        <p className="App-intro">{this.state.physicians}</p>
        <div>
          {/* {
            JSON.parse(`{"data": ${this.state.physicians}}`).data.forEach( physician => {
              return (
                <p>{physician.firstName}</p>
              )
            })
          } */}

        </div>
      </div>
    );
  }
}

export default App;
