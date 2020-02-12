import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
export default class ImageList extends Component {
  render() {
    return (
          <ul>
          {this.props.imagesArray.filter(image => {
          if (!this.props.selected) return true;
          return image.keyword === this.props.selected;
        })
          .map(image => <ImageItem image={image} />
            
          )       
        }
        </ul>)   
  }
}