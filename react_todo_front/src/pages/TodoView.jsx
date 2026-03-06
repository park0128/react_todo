import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './TodoView.module.css';

const TodoView = () => {
  const { todoNo } = useParams();

  const [todo, setTodo] = useState({
    todoWriter: '',
    todoContent: '',
    todoDate: '',
    todoDone: 0,
  });

  useEffect(() => {
    const BACKSERVER = import.meta.env.VITE_BACKSERVER;
    axios
      .get(`${BACKSERVER}/todos/${todoNo}`)
      .then((res) => {
        if (res.data) {
          setTodo(res.data);
        }
      })
      .catch((err) => {
        console.log('TodoView axios error:', err);
      });
  }, [todoNo]);

  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>TODO 상세보기</h3>
      <ul className={styles.todo_view_info}>
        <li>작성자:</li>
        <li> {todo.todoWriter}</li>
        <li>내용:</li>
        <li> {todo.todoContent}</li>
        <li>작성일:</li>
        <li> {todo.todoDate}</li>
        <li className="no-li"> {todo.todoNo}</li>
        <li className="done-li"> {todo.todoDone === 0 ? '진행중' : '완료'}</li>
      </ul>

      <div className={styles.button_wrap}>
        <button>완료됨</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoView;
