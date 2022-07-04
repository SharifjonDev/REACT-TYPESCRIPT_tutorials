import React from "react";
import "./style.css";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  complatedTodos: Todo[];
  setComplatedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  complatedTodos,
  setComplatedTodos,
}) => {
  return (
    <div className="container">
      <div className="todos ">
        <span className="todos__heading">Active Tasks</span>
        {todos.map((todo, index) => (
          <SingleTodo
            index={index}
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
