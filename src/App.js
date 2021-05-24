import { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' }
  ]);
  sdsdss
  return (
    <div className="app">
      <h1>React hooks - TodoList</h1>

      <TodoList todos = {todoList}/>
    </div>
  );
}

export default App;
