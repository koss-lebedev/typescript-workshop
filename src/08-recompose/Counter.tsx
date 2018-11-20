import React, { SFC } from 'react'
import { compose, withState, withHandlers } from 'recompose'

interface IOuterProps {
  initialValue: number
}

const Counter: SFC = ({ value, handleIncrement, handleDecrement }) => (
  <div>
    <button onClick={handleIncrement}>+</button>
    <span>{value}</span>
    <button onClick={handleDecrement}>-</button>
  </div>
)

export default compose(
  withState('value', 'setValue', (props: IOuterProps) => props.initialValue),
  withHandlers({
    handleIncrement: ({ value, setValue }) => () => {
      setValue(value + 1)
    },
    handleDecrement: ({ value, setValue }) => () => {
      setValue(value - 1)
    },
  })
)(Counter)
