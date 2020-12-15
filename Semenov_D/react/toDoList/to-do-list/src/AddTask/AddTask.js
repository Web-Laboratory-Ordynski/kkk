import React from 'react'
import './AddTask.css'

export default function AddTask(props) {
    return (
        <div>
            <input onChange={props.onInputChange} value={props.value} placeholder="Max 6"></input>
            <button className="addTask__label">+</button>
        </div>
    )
};
