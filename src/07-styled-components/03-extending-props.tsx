import React, { SFC } from 'react'

interface IOuterProps {
  label: string
}

const LabeledInput: SFC<IOuterProps> = ({ label }) => (
  <div>
    <label>{label}</label>
    <input type="text" />
  </div>
)

const App = () => (
  <div>
    <h1>Sign in</h1>
    <LabeledInput
      label="Your email"
    />
  </div>
)

export default App
