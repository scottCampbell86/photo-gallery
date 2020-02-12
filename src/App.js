import React, { Component } from 'react';
import './App.css';
import images from './data.js';
import Header from './Header.js';

export default class App extends Component {
  state = { selected: null };

    render() {
      // need data
        // filter, and if true, make a return of obj.x and this.state.objSelected

      //do some kind of mapping that then renders obj in/as class?

       
      const handleChange = e => {
        this.setState({ selected: e.target.value });
    };
      return (
        <>
        <Header />
       
        <main>
          <section className="options">
            <select className="beast-type-filter" onChange={handleChange}>
              <option value="" defaultValue>
                All Types
              </option>
              <option value="rhino">Rhino Family</option>
            </select>
          </section>
        </main>

        </>
      );
    }
  }