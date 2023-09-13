import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todoApi"


export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1);

  // const {data: todos = [], isLoading} = useGetTodosQuery();
  const {data: todo, isLoading} = useGetTodoQuery(todoId);

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading { isLoading ? 'true' : 'false' }</h4>

      <pre>{ JSON.stringify(todo) }</pre>
    
      <button onClick={() => (todoId === 1) ? null : setTodoId(todoId - 1)}>
        Prev todo
      </button>
      <button onClick={() => setTodoId(todoId + 1)}>
        Next todo
      </button>

      {/* <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              <strong>{ todo.completed ? 'DONE: ' :'PENDING: ' }</strong>
              { todo.title }
            </li>
          ))
        }
      </ul> */}

    </>
  )
}
