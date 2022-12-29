import './App.css'
import React, { useState } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editD, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, mg: '', type: ''});

  return <section className="section-center">
      <div className='grocery-container'>
        <Alert />
        <List />
      </div>
    </section>
}

export default App;
