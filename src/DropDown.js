import React, { Component } from 'react';

export default class App extends Component {
  render () {
   
    return (
          <div>
            <select className="beast-type-filter" onChange={this.props.handleChangeCallback}>
              <option value="" defaultValue>All Types
                </option>
                  <option value="narwhal">Uniwhal</option>
                  <option value="rhino">Rhino Family</option>
                  <option value="unicorn">Unicorn Head</option>
                  <option value="unilego">Unilego</option>
                  <option value="narwhal">Basically a unicorn</option>
                  <option value="narwhal">#truth</option>
                  <option value="rhino">Baby Rhino</option>
                  <option value="triceratops">Cera</option>
                  <option value="narwhal">Narwhal costume</option>
                  <option value="rhino">Rhino costume</option>
                  <option value="unicorn">Believe</option>
                  <option value="markhor">Markhor</option>
                  <option value="markhor">Baby Markhor</option>
                  <option value="addax">Mouflon</option>
                  <option value="keyword">Addax</option>
                  <option value="chameleon">Happy Jackson's Chameleon</option>
                  <option value="chameleon">Serious Jackson's Chameleon</option>
                  <option value="lizard">Horned Lizard</option>
            </select>
          </div>
           

    );
    
  }
}