import React, { Component } from 'react';
import Breed from './Breed/Breed'
import './App.css';
import Data from './Data';

class App extends Component {
    constructor() {
        super();
        this.state = {
            breeds: Data
        }
    }

    deleteElement = (id) => {
        console.log(' hdshuy')
        const updatedState = this.state.breeds.filter(el => el.id !== id)
        this.setState({ breeds: updatedState })

    }

    render() {
        const breedElements = this.state.breeds.map(el => < Breed key = { el.id }
            breed = { el }
            deleteBreed = { this.deleteElement }
            />)
            return ( <
                ul className = "breedHolder" > { breedElements } <
                / ul>
            );
        }
    }

    export default App;