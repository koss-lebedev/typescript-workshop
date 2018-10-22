import React, { Component, ComponentType } from 'react'

interface IPollingOptions<Props> {
  interval: number,
  handler: (props: Props) => void
}

const withPolling = <OuterProps extends {}>({ interval, handler }: IPollingOptions<OuterProps>) =>
  (ComposedComponent: ComponentType<OuterProps>) => {
    class WithPolling extends Component<OuterProps> {
      pollingId: NodeJS.Timer

      componentDidMount() {
        this.pollingId = setInterval(() => {
          handler(this.props)
        }, interval)
      }

      componentWillUnmount() {
        clearInterval(this.pollingId)
      }

      render() {
        return <ComposedComponent {...this.props} />
      }
    }

    return WithPolling
  }

export default withPolling
