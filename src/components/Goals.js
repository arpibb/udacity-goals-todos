import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  handleAddGoal,
  handleDeleteGoal,
} from '../actions/goals'
import List from './List'

class Goals extends Component{
      
  addItem = (e)=>{
    e.preventDefault()
    this.props.dispatch(handleAddGoal(
      this.input.value,
      () => this.ipnut.value = ''
    ))
  }

  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal))
  }


  render(){
    return(
      <div>
        <h1>Goals</h1>
        <input
        type = 'text'
        placeholder = 'Add Todo'
        ref={(input)=> this.input = input}
      />
      <button onClick={this.addItem}>Add Goal</button>
        <List 
          items = {this.props.goals}
          remove = {this.removeItem}
        />
      </div>
    )
  }
}

export default connect((state)=>({
  goals: state.goals
}))(Goals)