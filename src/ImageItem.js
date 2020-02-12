import React, { Component } from 'react'


export default class ImageItem extends Component {
    render() {
        return (
            <div className="image-container">
                <li>
                    <h2>{this.props.image.title}</h2>
                    <p>{this.props.image.keyword}</p>
            
                    <img
                        alt={this.props.image.url}
                        src={this.props.image.url} />
                </li>
            </div>

            
        )    
    }
}