import React, { Component } from 'react'

export default class ForumCustom extends Component {
    state = {
        value: "",
        type: "password",
        isActive: false
        // message: "5 simvoldan azdir"
    }
    getCheck = () => {
        if (!this.state.isActive) this.setState({ isActive: true, type: "text" })
        else this.setState({ isActive: false, type: "password" })
    }
    getInputValue = (e) => {
        this.setState({ value: e.target.value })

        // if (e.target.value.length > 5) {
        //     this.setState({ message: " " })
        // }
    }


    render() {
        const { value, isActive, type } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form>
                            {/* <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Enter email"
                                />
                                <small id="emailHelp" className="form-text text-muted">
                                    We'll never share your email with anyone else.
                                </small>
                            </div> */}

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">{value.length < 5 ? "5 simvoldan azdir" : null}</label>
                                <input
                                    type={type}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="password"
                                    value={value}
                                    onChange={this.getInputValue}
                                />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" checked={isActive} onChange={this.getCheck} className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                    Check me out
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
