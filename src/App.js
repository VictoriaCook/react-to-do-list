import './App.css';
import React, {useState} from 'react';
import Title from './Title';
import todos from './mock-todos.json';

function App() {
  
  const [ toDo, setToDo] = useState(todos)

  return (
    <div className="App">
      <Title/>
    </div>
  );
}

export default App;
