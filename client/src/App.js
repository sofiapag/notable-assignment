import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { physicians: [], appointments: [], selectedPhysician: {} };
  }

  getPhysicians() {
    fetch("http://localhost:9000/physicians")
      .then(res => res.json())
      .then(res => this.setState({ physicians: res }))
      .catch(err => err);
  };

  getAppointments(physicianId){
    fetch(`http://localhost:9000/appointments/${physicianId}`)
      .then(res => res.json())
      .then(res => this.setState({ appointments: res }))
      .catch(err => err);
    this.setState({ selectedPhysician: this.state.physicians.find(physician => physician.id === physicianId) });
  }

  componentDidMount() {
    this.getPhysicians();
  }

  render () {
   return (
      <div className="App">
        <header className="App-header">
          Notable App
        </header>
        <div className="sections">
          <div className="physicians">
            <h2>Physicians</h2>
            <ul>
              {
                this.state.physicians?.map(physician => {
                  return (
                    <li key={physician.id} onClick={() => {this.getAppointments(physician.id)}}>
                      {physician.lastName}, {physician.firstName}
                    </li>
                  )
                })
              }
            </ul>
            <button>Logout</button>
          </div>
          <div className="appointments">
            <h2>{this.state.selectedPhysician?.title} {this.state.selectedPhysician?.firstName} {this.state.selectedPhysician?.lastName}</h2>
            <h4>{this.state.selectedPhysician?.email}</h4>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Kind</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.appointments?.map(appt => {
                    return (
                      <tr>
                        <td>{appt.number}</td>
                        <td>{appt.patientName}</td>
                        <td>{appt.time}</td>
                        <td>{appt.kind}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
