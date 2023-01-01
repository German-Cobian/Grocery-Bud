import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name){ 
      // No item entered alert
      showAlert(true, 'Please enter item','danger')
    }
    else if(name && isEditing) {
      // Edit item alert
      setList(
        list.map((item) => {
          if(item.id === editID) {
          return {...item, title: name };
        }
        return item;
      })
      )
    setName('');
    setEditID(null);
    setIsEditing(false);
    showAlert(true, 'Item edited', 'success')
    } else{
      // Item entered alert
      showAlert(true, 'Item entered successfully', 'success')
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type});
  }

  const clearList = () => {
    showAlert(true, 'List emptied', 'danger');
    setList([]);
  }

  const removeItem = (id) => {
    showAlert(true, 'Item removed', 'danger');
    setList(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const specificItem =list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id)
    setName(specificItem.title)
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>Clear Items</button>
        </div>
      )}
    </section>
  )
}

export default App;
