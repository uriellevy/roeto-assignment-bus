import { useState } from 'react';
import './App.css'
import Form from './components/Form'
import List from './components/List'
import { IBusStation } from './interfaces/interfaces';

function App() {
  const [busStations,setBusStations] = useState<IBusStation[]>([]);

  return (
    <div className='app'>
      <Form setBusStations={setBusStations}/>
      <List busStations={busStations}/>
    </div>
  )
}

export default App
