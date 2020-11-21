import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { physicians: [], appointments: [] };
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
    .then(res => this.setState({ appointments: res }))
    .catch(err => err);
  }

  componentDidMount() {
    this.getPhysicians()
    this.getAppointments('b2');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Notable App
        </header>
        <p className="App-intro">{this.state.physicians}</p>
        <div className="sections">
          {/* {
            JSON.parse(`{"data": ${this.state.physicians}}`).data.forEach( physician => {
              return (
                <p>{physician.firstName}</p>
              )
            })
          } */}
          <div>
            <h2>Physicians</h2>
            <p
              // onClick={this.getAppointments('b2')}
            >Krieger, Algernop</p>
          </div>
          <div>
            <h2>Appointments</h2>
            <p>{this.state.appointments}</p>
            <table>
              <tr>
                1
                <td>Sterling Archer</td>
                <td>8:00AM</td>
                <td>New Patient</td>
              </tr>
            </table>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
