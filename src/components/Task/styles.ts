import styled from 'styled-components'

export const Card = styled.div`
  padding: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 16px;
  font-weight: bold;
`

export const Tag = styled.span`
  display: inline-block;
  color: #fff;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  background-color: #e1a32a;
  border-radius: 8px;
  margin-right: 16px;
`

export const Description = styled.textarea`
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Actions = styled.div`
  border-top: 1px solid rgba(0,0,0, 0.1)
  padding-top: 16px;
`

export const Button = styled.button`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
