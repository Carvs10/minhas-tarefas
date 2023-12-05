import { FormEvent, useState } from 'react'
import { MainContainer, Result, SaveButton } from '../../styles'
import { useNavigate } from 'react-router-dom'

import { Field } from '../../styles'
import { Form, Options, Option } from './styles'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Tarefa'
import { add } from '../../store/reducers/tasks'
import Task from '../../models/Task'

const FormContainer = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addTask = (event: FormEvent) => {
    event.preventDefault()
    const taskToAdd = new Task(
      title,
      priority,
      enums.Status.PENDING,
      description,
      9
    )
    dispatch(add(taskToAdd))
    navigate('/')
  }

  return (
    <MainContainer>
      <Result>Nova Tarefa</Result>
      <Form onSubmit={addTask}>
        <Field
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Field
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                onChange={({ target }) =>
                  setPriority(target.value as enums.Priority)
                }
                defaultChecked={priority === enums.Priority.NORMAL}
                id={priority}
              />{' '}
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </Form>
    </MainContainer>
  )
}

export default FormContainer
