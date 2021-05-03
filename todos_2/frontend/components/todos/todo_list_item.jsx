import React from "react";


class TodoListItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){

        return(
            <div>
               <li>`${this.props.todo.title}`</li>
            </div>
        )
    }
}