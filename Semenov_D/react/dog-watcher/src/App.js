import React, { Component } from 'react';
import Breed from './Breed/Breed'
import './App.css';
// import Data from './Data';

class App extends Component {
    constructor() {
        super();
        this.state = {
            breeds: []
        }
    }

    componentDidMount() {
        fetch("https://api.thedogapi.com/v1/breeds")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        breeds: true,
                        breeds: result.breeds
                    });
                },
                // Примітка: важливо обробляти помилки саме тут,
                // а не в блоці catch (), щоб не перехоплювати
                // виключення з помилок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    deleteElement = (id) => {
        console.log('this  is good work')
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
                /ul>
            );
        }
    }

    export default App;