import React from 'react'

interface IOuterProps {
  name: string
  age: number
}

const UserInfo = ({ name, age }) => (
  <div>
    <h1>{name}</h1>
    <input type="number" value={age} />
  </div>
)

export default UserInfo
