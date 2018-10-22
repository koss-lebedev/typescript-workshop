import React, { SFC } from 'react'
import { connect } from 'react-redux'
import { IState } from './helpers/state'

const mapStateToProps = (state: IState) => ({
  username: state.user.username,
  fullName: `${state.user.firstName} ${state.user.lastName}`,
})

type InnerProps = Readonly<ReturnType<typeof mapStateToProps>>

const UserProfile: SFC<InnerProps> = ({ username, fullName }) => (
  <div>
    <h1>{username}</h1>
    <h2>{fullName}</h2>
  </div>
)

export default connect(mapStateToProps)(UserProfile)
