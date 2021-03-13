import React, { useState } from "react";
import "./todolist.css";

const TodoList = (props) => {
    const [NewTodo, setNewTodo] = useState("");
    const [AllTodos, setAllTodos] = useState([]);

    function inputChangeHandler(e) {
        e.preventDefault();
        setNewTodo(e.target.value);
    }
    function onSubmitHandler(e) {
        e.preventDefault();
        if (NewTodo === "") return;
        setAllTodos([...AllTodos, { id: Date.now(), text: NewTodo }]);
    }
    return (
        <div>
            <form>
                <input
                    placeholder="Enter Todo!!"
                    onChange={inputChangeHandler}
                ></input>
                <button onClick={onSubmitHandler}>Submit</button>
                <ul>
                    {AllTodos.map((todo) => (
                        <li key={todo.id}>{todo.text}</li>
                    ))}
                </ul>
            </form>
        </div>
    );
};
export default TodoList;
