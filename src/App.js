import './App.css'
import React, { useState } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: true, mg: '', type: ''});
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
  }

  return <section className="section-center">
      <div className="grocery-container">
        <form className="grocery-form" onSubmit= {handleSubmit}>
          {alert.show && <Alert />}
        </form>
        <List />
        <button className="clear-btn">Clear Items</button>
      </div>
    </section>
}

export default App;
