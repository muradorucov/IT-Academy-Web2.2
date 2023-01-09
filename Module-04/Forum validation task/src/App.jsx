import React, { Component } from "react";

class App extends Component {
  state = {
    name: "",
    surename: "",
    email: "",
    phone: "",
    comment: "",
  };

  getstateData = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { name, surename, email, phone, comment } = this.state

    return (
      <main>
        <form onSubmit={this.getstateData} >
          <h2>Form</h2>
          <div className="Name">
            <label>Ad</label>
            <br></br>

            <input
              type="text"
              className="form-control"
              placeholder="Ad"
              required
              name="ad"
              onChange={(e) => this.setState({ ...this.state, name: e.target.value })}
            />
          </div>
          <div className="Surname">
            <label>Soyad</label>
            <br></br>

            <input
              type="text"
              className="form-control"
              placeholder="Soyad"
              required
              name="soyad"
              onChange={(e) => this.setState({ ...this.state, surename: e.target.value })}
            />
          </div>
          <div className="Email">
            <label>Email</label>
            <br></br>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              required
              onChange={(e) => this.setState({ ...this.state, email: e.target.value })}
              name="mail"
            />
          </div>

          <div className="Nömrə">
            <label>Nömrə</label>
            <br></br>

            <input
              type="tel"
              className="form-control"
              placeholder="Nömrə"
              onChange={(e) => this.setState({ ...this.state, phone: e.target.value })}
              name="number"
            />
          </div>
          <div className="Şərh">
            <label>Şərh</label>
            <br></br>
            <textarea className="form-control" rows={3} name="text"
              onChange={(e) => this.setState({ ...this.state, comment: e.target.value })}
            />
          </div>
          {
            name && surename && email && phone && comment ? <button type="submit" className="btn btn-primary" disabled={false}>
              Göndər
            </button> : <button type="submit" className="btn btn-primary" disabled={true}>
              Göndər
            </button>
          }


        </form>
      </main>
    );
  }
}

export default App;
