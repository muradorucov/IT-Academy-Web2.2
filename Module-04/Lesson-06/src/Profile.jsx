import React, { Component } from 'react'
import Address from './component/Address'
import Email from './component/Email'
import Name from './component/Name'
import PersonalINfo from './component/PersonalINfo'

export default class Profile extends Component {
    render() {
        const { name, email, presonalinfo, address } = this.props
        console.log(this.props);
        return (
            <>
                <Name name={name} />
                <Email email={email} />
                <PersonalINfo info={presonalinfo} />
                <Address adrress={address} />
            </>
        )
    }
}
