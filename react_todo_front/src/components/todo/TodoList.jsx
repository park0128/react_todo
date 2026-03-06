import styles from './TodoList.module.css';
import { Link, useNavigate } from 'react-router-dom';

const TodoList = ({ todoList }) => {
  return (
    <div className={styles.list}>
      {todoList.map((todo, i) => {
        return <TodoItem todo={todo} key={'todo-' + i} />;
      })}
    </div>
  );
};

const TodoItem = ({ todo }) => {
  const navigate = useNavigate();
  return (
    <ul
      className={styles.item}
      onClick={() => {
        navigate(`/todo/${todo.todoNo}`);
      }}
    >
      <li className={styles.content}>
        <span className={styles.todo_content}>{todo.todoContent}</span>

        <span className={styles.todo_writer}>{todo.todoWriter}</span>
      </li>

      <li>
        <span className={todo.todoDone === 0 ? styles.badge1 : styles.badge2}>
          {todo.todoDone === 0 ? '진행중' : '완료'}
        </span>
      </li>
    </ul>
  );
};

export default TodoList;
