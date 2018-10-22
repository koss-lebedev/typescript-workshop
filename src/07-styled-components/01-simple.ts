import styled from 'styled-components'

export const Container = styled.div<{ isVisible: boolean }>`
  display: ${props => props.isVisible ? 'block' : 'none'};
`

interface IAvatarProps {
  src: string
  size: number
}

export const Avatar = styled.div<IAvatarProps>`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: ${props => props.size}rem;
  height: ${props => props.size};
`
