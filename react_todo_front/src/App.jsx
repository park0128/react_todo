//03.06
import Header from './components/commons/Header';
import { Route, Routes } from 'react-router-dom';
import TodoListPage from './pages/TodoListPage';
import TodoRegistPage from './pages/TodoRegistPage';
import TodoView from './pages/TodoView';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/userList" element={<TodoListPage />} />
        <Route path="/regist" element={<TodoRegistPage />} />
        <Route path="/todo/:todoNo" element={<TodoView />} />
      </Routes>
    </div>
  );
}

export default App;
