import styled, { createGlobalStyle } from 'styled-components'
import { Button } from '../components/Task/styles'
import variables from './variables'

const GlobalStyle = createGlobalStyle`

  * {
    margin : 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Result = styled.h2`
  display: block;
  margin-bottom: 40px;
  margin-top: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Field = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`

export default GlobalStyle
