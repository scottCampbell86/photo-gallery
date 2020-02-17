import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
export default class ImageList extends Component {
  render() {
    return (
        <ul> 
        {
          this.props.imagesArray.map(image => <ImageItem key={image.title} image={image} />)
           
         

        }
        {console.log(this.props.imagesArray)}
        </ul>)   
  }
}