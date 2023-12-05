import styled from 'styled-components'
import variables from '../../styles/variables'
import * as enums from '../../utils/enums/Tarefa'

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  param: 'status' | 'priority'
}

function returnBgColor(props: TagProps): string {
  if (props.param === 'priority') {
    if (props.priority === enums.Priority.URGENT) return variables.red
    if (props.priority === enums.Priority.IMPORTANT) return variables.yellow_2
  } else {
    if (props.status === enums.Status.PENDING) return variables.yellow
    if (props.status === enums.Status.CLOSED) return variables.green
  }

  return '#ccc'
}

export const Card = styled.div`
  padding: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  color: #fff;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => returnBgColor(props)};
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

export const CancelButton = styled(Button)`
  background-color: ${variables.red};
`
