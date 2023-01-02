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
      // deal with edit
      showAlert(true, 'Item edited successfully', 'success')
    }
    else{
      // Item entered alert
      showAlert(true, 'Item entered successfully', 'success')
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type})
  }

  const clearList = () => {
    showAlert(true, 'List emptied', 'danger');
    setList([]);
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
          <List items={list} />
          <button className="clear-btn" onClick={clearList}>Clear Items</button>
        </div>
      )}
    </section>
  )
}

export default App;
