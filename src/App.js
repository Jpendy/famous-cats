import React, { Component } from 'react'
import images from './data'
import Animal from './Animal'
import './App.css'

export default class App extends Component {
    state = { selected: null };

    handleChange = (e) => {
      this.setState({ selected: e.target.value });
    };

  render() {
    return (
      <div>         
         <main>
                    <section className = "dropown-section">
                         <select className="dropdown-filter" onChange={this.handleChange}>
                             <option value="">All Types</option>
                             <option value="narwhal"> narwhal </option>
                             <option value= "rhino"> rhino </option>
                             <option value="triceratops"> triceratops </option>
                             <option value ="lizard"> lizard </option>
                             <option value="markhor"> markhor </option>
                             <option value="chameleon"> chameleon </option>
                             <option value="dragon"> dragon </option>
                             <option value="mouflon"> mouflon </option>
                             <option value= "addax"> addax </option>
                             <option value="unicorn"> unicorn </option>
                             <option value= "unilego"> unilego </option>
                                   
                         </select>
                    </section>

                    <section className="list-section">
                      <ul className="animals">
                        {
                          images
                            .filter(animal => {
                              if(!this.state.selected) return true;

                              return animal.keyword === this.state.selected;
                            })
                            .map( hornAnimal => {
                              return <Animal hornType = { hornAnimal } />
                            })

                        }
                      </ul>
                    </section>
                </main>               
      </div>
    )
  }
}
