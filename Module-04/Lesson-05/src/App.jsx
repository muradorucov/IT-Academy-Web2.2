import React from 'react'

export default class App extends React.Component {
  state = {
    onKey: null
  }
  onKeypress = (e) => {
    this.setState({ onKey: e.key })
    console.log(e.key);

  }
  // getData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ data: data })
  //       console.log(data)
  //     })
  // }
  // this.getData()
  componentDidMount() {
    window.addEventListener("keypress", this.onKeypress)
   
  }

  componentWillUnmount(){
    window.removeEventListener("keypress",this.onKeypress)
  }





  render() {
    const { onKey } = this.state
    return (
      <></>
      // <span style={{ fontSize: "45px" }}>{onKey}</span>
    )
  }
}
