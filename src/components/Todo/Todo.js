import React from "react";
import "./Todo.css";
const Todo = ({title, author, priority, id, status, removeFormList, editStatusTask})=>{
  


  return (
    <div className="Todo">
      <div onClick={() => editStatusTask(id)}>
        {/* Не правильно работатют классы */}
        <p className={`Todo__name ${status && "done"}`}>{title}</p>
        <p className={`Todo__priority ${status && "done"}`}>{priority}</p>
        <p className={`Todo__author ${status && "done"}`}>{author}</p>
      </div>
      <span onClick={() => removeFormList(id)} className="Todo__remove" >
       X
      </span>
    </div>
  );
};

export default Todo;

// ${status && "done"}