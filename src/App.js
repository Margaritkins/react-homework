
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import UserList from './Pages/UserListPage/UserList';
import TodoList from './Pages/TodoPage/TodoList';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserList/>} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
