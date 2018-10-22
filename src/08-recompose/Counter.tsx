import React, { SFC } from 'react'
import { compose, withState, withHandlers } from 'recompose'

interface IOuterProps {
  initialValue: number
}

interface IWithState {
  value: number
  setValue: (value: number) => void
}

interface IHandlers {
  handleIncrement: () => void
  handleDecrement: () => void
}

type InnerProps = IOuterProps & IWithState & IHandlers

const Counter: SFC<InnerProps> = ({ value, handleIncrement, handleDecrement }) => (
  <div>
    <button onClick={handleIncrement}>+</button>
    <span>{value}</span>
    <button onClick={handleDecrement}>-</button>
  </div>
)

export default compose<InnerProps, IOuterProps>(
  withState('value', 'setValue', (props: IOuterProps) => props.initialValue),
  withHandlers<InnerProps, IHandlers>({
    handleIncrement: ({ value, setValue }) => () => {
      setValue(value + 1)
    },
    handleDecrement: ({ value, setValue }) => () => {
      setValue(value - 1)
    },
  })
)(Counter)
