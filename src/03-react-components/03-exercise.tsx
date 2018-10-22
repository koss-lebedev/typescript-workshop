import React, { SFC, Fragment } from 'react'

const SIZES = { small: 24, medium: 48, large: 96 }

interface IAvatarProps {
  size: 'small' | 'medium' | 'large'
  src: string
}

const Avatar: SFC<IAvatarProps> = ({ src, size }) => (
  <img
    src={src}
    width={SIZES[size]}
    height={SIZES[size]}
    alt="avatar"
  />
)

/* TESTING */

export const TestApp = (
  <Fragment>
    <Avatar size="large" src="/images/placeholder.svg" />
    <Avatar size="medium" src="/images/placeholder.svg" />
    <Avatar size="small" src="/images/placeholder.svg" />
  </Fragment>
)
