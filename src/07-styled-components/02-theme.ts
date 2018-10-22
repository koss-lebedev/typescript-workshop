import styled from 'styled-components'
import { mq, theme } from './styles'

export const Container = styled.section`
  display: flex;
  font-size: ${theme.fontSize.regular};

  ${mq.sm} {
    display: block;
  }
`
