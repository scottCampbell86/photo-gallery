import React, { Component } from 'react';
import './App.css';
import images from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import DropDown from './DropDown.js';

export default class App extends Component {
  state = { selected: null };

    render() {
    {console.log(images);}
    const selected = this.state.selected;     
    const handleChange = e => {
        this.setState({ selected: e.target.value });
    };
    const filteredArray = images.filter(image => {
      if (!selected) return true;
      return image.keyword === selected;
    })
    {console.log(filteredArray);}
   
    return (
      <>
        <Header />
        <main>
          <section className="options"> 
              <DropDown handleChangeCallback={handleChange}/>
          </section>
          
          <section>
              <ImageList imagesArray={filteredArray} />
          </section>
        </main>
      </>       
      );
    };
  };