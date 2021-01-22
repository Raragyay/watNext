import './App.css';
import { TaskCard } from './components/taskCard.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() { 
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRes = async () => {
      const res = await axios({
      method: 'get',
      url: 'http://localhost:4000/1b'
    })
    setData(res.data);
    }
    getRes();
  }, []);

  const GenerateDeck = () => data.map(e => <TaskCard name={e.name} type={e.type} class={e.class} endTime={e.endTime} />)


  return (
    <div>
      <GenerateDeck />
    </div>
  );
}

export default App;
