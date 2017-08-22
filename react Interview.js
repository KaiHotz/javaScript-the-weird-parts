/*eslint-disable */
import React, { Component } from 'react'

class MyComponent extends Component {
  constructor (props) {
    this.state = {
      clicks: 0
    }
  }

  componentDidMount () {
    this.refs.myComponentDiv.addEventListener('click', this.clickHandler)
  }

  componentWillUnmount () {
    this.refs.myComponentDiv.removeEventListener('click', this.clickHandler)
  }

  clickHandler () {
    this.setState({
      clicks: this.clicks + 1
    })
  }

  render () {
    let { children } = this.props

    return (
      <div className='my-component' ref='myComponentDiv'>
        <h2>My Component ({this.state.clicks} clicks})</h2>
        <h3>{this.props.headerText}</h3>
        {children}
      </div>
    )
  }
}


//Right way
import React, { Component } from 'react'

class Test extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clicks: 0
    }
  }

  clickHandler = () => {
    this.setState((prevState, props) => {
      return {clicks: prevState.clicks + 1}
    })
  }

  render () {
    let { children } = this.props

    return (
      <div className='my-component' onClick={this.clickHandler}>
        <h2>My Component ({this.state.clicks} clicks})</h2>
        <h3>{this.props.headerText}</h3>
        {children}
      </div>
    )
  }
}
