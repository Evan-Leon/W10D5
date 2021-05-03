import React from "react";
import { render } from "react-dom";

class TodoList extends React.Component {
    
    render(){
        const { todos, receiveTodo } = this.props;
        const todoItems = todos.map(todo => {
            <TodoListItem
                key = {`todo-list-item ${todo.id}`}
                todo = {todo}
                receiveTodo = {receiveTodo} />
        
        })
        return(
            <div>
               <ul className="todo-list">
                    { todoItems }
               </ul>
            </div>
        )
    }
}
    

export default TodoList;