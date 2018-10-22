import React, { InputHTMLAttributes, SFC } from 'react'

interface IOuterProps extends InputHTMLAttributes<HTMLInputElement> {
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
      onChange={event => console.log(event.target.value)}
    />
  </div>
)

export default App
