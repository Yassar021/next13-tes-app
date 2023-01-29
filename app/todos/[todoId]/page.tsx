import React from 'react'

type PageProps = {
    params: {
        todoId: string;
    }
}


const fetchTodo = async (todoId: string) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
    
    const todo = await res.json();
    return todo;    
};


async function TodoPage({params : {todoId} }: PageProps) {
    const todo = await fetchTodo(todoId);
  return (
    <div className='p-10 m-2 bg-yellow-200 border-2 shadow-lg'>
        <p>#{todo.id}: {todo.title}</p>
        <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        <p className='mt-5 text-right border-t border-black'>By User: {todo.userId}</p>
    </div>
  )
}

export default TodoPage