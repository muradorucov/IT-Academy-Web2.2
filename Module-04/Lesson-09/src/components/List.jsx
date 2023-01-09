import React, { Component } from 'react'
export default class List extends Component {
    state = {
        customId: 1,
        posts: []
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    posts: data,
                })
            })
    }

    onCLickAddData = (event) => {
        event.preventDefault();
        const state = this.state.posts;
        const newState = [...state.slice(0, ),
        { id: event.target.index.value, title: event.target.title.value, body: event.target.body.value },
        ...state.slice(event.target.index.value)]
        this.setState({ posts: newState });

        console.log(newState)
    }
    getChangeAge = (event) => {
        this.setState({ customId: +event.target.value })
        console.log(this.state.customId)
    }
    onClickRemoveElem = (id) => {
        const newList = this.state.posts.filter(item => item.id != id)
        this.setState({
            posts: newList
        })
    }
    render() {
        const { posts, customId } = this.state
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <img src={amil} alt="Amil" /> */}
                            <form action="" onSubmit={this.onCLickAddData}>
                                <div class="form-group">
                                    <label htmlFor="index">Index</label>
                                    <input type="number" name="index" id="index" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" name="title" id="title" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label htmlFor="body">Body</label>
                                    <input type="text" name="body" id="body" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <input type="submit" class="btn btn-danger" value="Addded data" />
                                </div>
                            </form>

                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Title</th>
                                        <th>Body</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        posts.map(post => (
                                            <tr>
                                                <td>{post.id}</td>
                                                <td>{post.title}</td>
                                                <td>{post.body}</td>
                                                <td>
                                                    <button onClick={() => { this.onClickRemoveElem(post.id) }}>Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </>

        )
    }
}
