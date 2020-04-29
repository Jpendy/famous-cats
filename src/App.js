import React, { Component } from 'react'
import images from './data'
import Animal from './Animal'
import Header from './Header'
import './App.css'

export default class App extends Component {
    state = { selected: null };

    handleChange = (e) => {
      this.setState({ selected: e.target.value });
    };

   
  render() {
    return (
      <div> 
          <Header/>

         <main>
                    <section className = "dropdown-section">
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
                            <option value="1" >1 horn</option>
                            <option value="2" >2 horns</option>
                            <option value="3" >3 horns</option>
                            <option value="100" >100 horns</option>
                                   
                         </select>

                            
                    </section>

                    <section className="list-section">
                      <ul className="animals">
                        {
                          images
                            .filter(animal => {
                              if(!this.state.selected) return true;
            
                              else if (isNaN(Number(this.state.selected))) {
                                 return (animal.keyword) === this.state.selected;
                                 } 
                                 else {
                                                
                                return animal.horns === Number(this.state.selected); }
                                 
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
