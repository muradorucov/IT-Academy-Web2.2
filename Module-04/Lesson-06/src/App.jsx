import React, { Component } from 'react'
import Profile from './Profile'
import "./App.css"
export default class App extends Component {
  state = {
    melumat: []
  }

  getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(amil => {
        this.setState({
          melumat: amil
        })
      })
  }
  getHandleCLick = () => {
    if (this.state.amil == "btn") {
      this.setState({
        amil: "btn-blue"
      })
    } else {
      this.setState({
        amil: "btn"
      })
    }

  }
  render() {


    return (
      <>
        <Profile name="Murad" email="email@gmail.com" address="Nasimi reg" presonalinfo="Developer" />
        <hr></hr>
        <Profile name="Sahile" email="sahile@gmail.com" address="Narimanov reg" presonalinfo="Developer" />
        <hr></hr>
        <Profile name="Ayten" email="ayetn@gmail.com" address="Nasimi reg" presonalinfo="Teacher" />


        <button className={this.state.amil} onClick={this.getHandleCLick}>Etrafli</button>


        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row"></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td scope="row"></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}
