import styled, { css } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background-color: ${props => props.theme.color.c_secondary}
`