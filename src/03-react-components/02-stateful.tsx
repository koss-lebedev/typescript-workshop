import React, { Component } from 'react'

interface IOuterProps {}

interface IState {
  value: number
}

export default class Counter extends Component<IOuterProps, IState> {
  state = {
    value: 0,
  }

  constructor(props: IOuterProps) {
    super(props)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement() {
    this.setState({ value: this.state.value + 1 })
  }

  handleDecrement() {
    this.setState({ value: this.state.value - 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <span>{this.state.value}</span>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}
