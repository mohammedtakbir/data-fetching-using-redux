import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/actions/todosActions';

const Todos = () => {
    const dispatch = useDispatch();
    const { isLoading, todos, error } = useSelector((state) => state);
    
    useEffect(() => {
        dispatch(getAllTodos())
    }, [dispatch])

    return (
        <div>
            <h1>Data fetching using redux</h1>
            <h2>Todos App</h2>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3 style={{ color: 'red' }}>{error.message}</h3>}
            {todos.map(todo => (
                <p key={todo.id}>
                    <small>{todo.title}</small>
                </p>
            ))}
        </div>
    );
};

export default Todos;