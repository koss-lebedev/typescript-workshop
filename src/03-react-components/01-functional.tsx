import React, { SFC } from 'react'

interface IOuterProps {
  name: string
  age: number
}

const UserInfo: SFC<IOuterProps> = ({ name, age }) => (
  <div>
    <h1>{name}</h1>
    <input type="number" value={age} />
  </div>
)

export default UserInfo
