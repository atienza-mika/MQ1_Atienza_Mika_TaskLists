import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
const DATA = [
  {id: "todo-0", name:"Eat",completed: true},
  {id: "todo-1", name:"Sleep",completed: false},
  {id: "todo-2", name:"Code ReactJs",completed: false}
]

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
