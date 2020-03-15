import React, { Component } from 'react'

export default class Login extends Component {
    

    render() {
        return (
            <div onClick={this.props.auth.login}>
                Login
            </div>
        )
    }
}
