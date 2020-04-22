import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo
} from '..actions/todos'
import List from './List'

class Todos extends React{
  addItem = (e)=>{
    e.preventDefault()
    this.props.dispatch(handleAddTodo(
      this.input.value,
      () => this.input.value = ''
    ))
  }

  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo))
  }

  toggleItem = (id) =>{
    this.props.dispatch(handleToggleTodo(id))
  }
  
  render(){
    return(
      <div>
      <h1> Todos</h1>
      <input
        type = 'text'
        placeholder = 'Add Todo'
        ref={(input)=> this.input = input}
      />
      <button onClick={this.addItem}>Add Todo</button>
      <List 
        items = {this.props.todos}
        remove = {this.removeItem}
        toggle = {this.toggleItem}
      />
      </div>
    )
  }
}

export default connect((state)=>({
  todos: state.todos
}))(Todos)