import React from 'react';
import './Breed.css';
const emptyState = './1.png';

const Breed = (props) => {

    const testClick = () => {
        console.log(props.breed.id)
    }

    return (

        <li className="breed">
            <img className="breed__img" src={emptyState} alt="" />
            <p className="breed__p">id: {props.breed.id}</p>
            <h1 className="breed__title">Name: {props.breed.name}</h1>
            <p className="breed__p">life span: {props.breed.life_span}</p>
            <p className="breed__p">origin: {props.breed.origin}</p>
            <button className="breed__btn" onClick={() => props.deleteBreed(props.breed.id)}>Delete</button>
        </li>

    )
};


export default Breed;