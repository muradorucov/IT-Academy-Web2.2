// import React, { Component } from 'react'

// export default class ForumCustom extends Component {
//     // state = {
//     //     password: "salam",
//     //     email: "oruc@gmail.com",
//     //     type: "password",
//     //     isActive: false
//     // }
//     // getCheck = () => {
//     //     if (!this.state.isActive) this.setState({ isActive: true, type: "text" })
//     //     else this.setState({ isActive: false, type: "password" })
//     // }
//     // getPassword = (e) => {
//     //     this.setState({ password: e.target.value })
//     //     console.log(this.state.password);
//     // }
//     // getEmail = (e) =>{
//     //     this.setState({ email: e.target.value })
//     //     console.log(this.state.email);
//     // }


//     // handleSubmit = (e) => {
//     //     e.preventDefault()

//     //     this.setState({
//     //         password: e.target.password.value,
//     //         email: e.target.email.value
//     //     })

//     //     console.log({
//     //         email: e.target.email.value,
//     //         password: e.target.password.value
//     //     });
//     // }


//     state = {
//         data: [],
//         street:"Azadliq kuc"
//     }

//     getData = () => {
//         fetch("https://northwind.vercel.app/api/suppliers")
//             .then(res => res.json())
//             .then(data => {
//                 this.setState({ data: data })
//             })
//     }

//     componentDidMount() {
//         this.getData()
//     }

//     render() {
//         const { data,street } = this.state
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">


//                         <table className="table">
//                             <thead>
//                                 <tr>
//                                     <th>id</th>
//                                     <th>companyName</th>
//                                     <th>contactTitle</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     data.map(item => (
//                                         <tr key={item.id}>
//                                             <td>{item.id}</td>
//                                             <td>{item.contactTitle? item.contactTitle : "Salam" }</td>
//                                             <td>{item.address.street || street}</td>
//                                         </tr>
//                                     ))
//                                 }
//                             </tbody>
//                         </table>

//                         {/* <form onSubmit={this.handleSubmit}>
//                             <div className="form-group">
//                                 <label htmlFor="exampleInputEmail1">Email address</label>
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     id="exampleInputEmail1"
//                                     placeholder="Enter email"
//                                     name="email"
//                                     onChange={this.getEmail}
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="exampleInputPassword1">{password.length < 5 ? "5 simvoldan azdir" : null}</label>
//                                 <input
//                                     onChange={this.getPassword}
//                                     type={type}
//                                     className="form-control"
//                                     id="exampleInputPassword1"
//                                     placeholder="password"
//                                     name="password"
//                                 />
//                             </div>
//                             <div className="form-check">
//                                 <input type="checkbox" checked={isActive}
//                                     onChange={this.getCheck}
//                                     className="form-check-input" id="exampleCheck1" />
//                                 <label className="form-check-label" htmlFor="exampleCheck1">
//                                     Check me out
//                                 </label>
//                             </div>
//                             <button type="submit" className="btn btn-primary">
//                                 Submit
//                             </button>
//                         </form> */}
//                     </div>
//                 </div>
//             </div>

//         )
//     }
// }
