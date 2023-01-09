import React, { Component } from 'react'
import List from './components/List'
import "swiper/css/bundle";
import Slider from './components/Slider';


export default class App extends Component {
    render() {
        return (
            <>
                <List />
                {/* <div className="container">
                    <div className="row">
                        <Slider/>
                    </div>
                </div> */}
            </>
        )
    }
}
