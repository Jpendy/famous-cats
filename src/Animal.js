import React, { Component } from 'react'

export default class Animal extends Component {
    render() {
        return (
            <li>
                <div className="title">
                    <h2>{ this.props.hornType.title }</h2>
                </div>

                <div className="image-container">
                    <img alt={ this.props.hornType.url }
                         src={  this.props.hornType.url } />

                </div>

                <p className="description"> { this.props.hornType.description }</p>
                <p className="horns">Horns: { this.props.hornType.horns }</p>

            </li>
        )
    }
}
