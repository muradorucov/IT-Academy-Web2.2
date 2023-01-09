import React, { Component } from 'react'

export default class Wine extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p>title:{this.props.title} </p>
                <p>desc:{this.props.desc} </p>
                <p>rating: </p>
            </div>
        )
    }
}
