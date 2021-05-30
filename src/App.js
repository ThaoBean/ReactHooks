import { useEffect, useState } from 'react';
import queryString from 'query-string';
import './App.scss';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import PostFiltersForm from './components/PostFiltersForm';
import Clock from './components/Clock';
import MagicBox from './components/MagicBox';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' }
  ]);

  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page : 1,
    _limit : 10,
    _totalRows : 11,
  });

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });

  const [showClock, setShowClock] = useState(true);

  useEffect(() => {
    try {
      async function fetchPostList(){
        const paramsString = queryString.stringify(filter);
        const url = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log({responseJson});
        const {data, pagination} = responseJson;
        setPostList(data);
        setPagination(pagination);
      }

      console.log('PostList effect');
      fetchPostList();
    } catch (error) {
      console.log('Error', error.message);
    }
  },[filter]);

  useEffect(() => {
    console.log('TodoList effect');
  });

  function handlePageChange(newPage){
    setFilter({
      ...filter,
      _page : newPage,
    });
  }

  function handleFiltersChange(newFilters){
    console.log('New filters', newFilters);
    setFilter({
      ...filter,
      page: 1,
      title_like : newFilters.searchTerm,
    });
  }

  function handleTodoClick(todo){
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if(index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues){
    console.log('Form sm: ', formValues);
    const newTodo = {
      id : todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  
  return (
    <div className="app">
      <h1>React hooks - PostList</h1>
      {/* <TodoForm  onSubmit = {handleTodoFormSubmit}/> */}
      {/* <TodoList todos = {todoList} onTodoClick = {handleTodoClick}/> */}
      {/* <PostFiltersForm onSubmit = {handleFiltersChange}/>
      <PostList posts = {postList}/>
      <Pagination pagination = {pagination} onPageChange = {handlePageChange}/> */}
      {/* {showClock && <Clock/>}
      <button onClick = {() => setShowClock(false)}> HideClock</button> */}

      <MagicBox/>
    </div>
  );
}

export default App;
