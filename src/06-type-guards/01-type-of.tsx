import React, { SFC, Fragment, ReactNode } from 'react'

type RenderFn = () => ReactNode

interface IOuterProps {
  content: string | RenderFn
}

const MyComponent: SFC<IOuterProps> = ({ content }) => (
  <div>
    {}
  </div>
)

/* TESTING */

export const App = () => (
  <Fragment>
    <MyComponent content="Hello World" />
    <MyComponent content={() => <b>Hello world!</b>} />
  </Fragment>
)
