import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({items, removeItem}) => {
  return <div className="grocery-list">
    {items.map((item) => {
      const {id, title} = item;
      return <article key={id} className="grocery-item">
        <p className="title">{title}</p>
        <button type="button" className="edit-btn">
          <FaEdit />
        </button>
        <button 
          type="button"
          className="delete-btn"
          onClick={() => removeItem(id)} >
          <FaTrash />
        </button>
      </article>
    })}
  </div>
}

export default List
