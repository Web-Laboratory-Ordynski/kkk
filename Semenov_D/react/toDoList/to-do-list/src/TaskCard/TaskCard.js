import React from 'react';
import './TaskCard.css';




const TaskCard = (props) => {
  const taskClass = props.task.isChecked ? 'task--disabled' : 'task';
  return (
    <li className={taskClass} key={props.id}>
      {props.task.task}
      <div className="switch">
        <input id={props.task.id} type="checkbox" className="switch-input" checked={props.task.isChecked} onChange={() => props.checkboxToggle(props.task.id)} />
        <label htmlFor={props.task.id} className="switch-label"></label>
      </div>
      { props.children}
    </li>
  )
}

export default TaskCard;