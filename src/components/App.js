import React, {Component} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import ConnectedGoals from './Goals'
import ConnectedTodos from './Todos'

class App extends Component{

  componentDidMount(){
    const { dispatch } = this.props

    // store.subscribe(()=> this.forceUpdate())
    dispatch(handleInitialData())
  }

  render(){
    if(this.props.loading){
      return <h3>Loading</h3>
    }

    return(
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    )
  }
}

export default connect((state)=>({
  loading: state.loading
}))(App)
