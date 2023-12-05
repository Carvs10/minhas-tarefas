import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { changeStatus, remove, save } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { SaveButton } from '../../styles'
import * as enums from '../../utils/enums/Tarefa'

type Props = TaskClass

const Task = ({
  description: descriptionOriginal,
  title,
  priority,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (descriptionOriginal.length > 0) setDescription(descriptionOriginal)
  }, [descriptionOriginal])

  function cancel() {
    setIsEditing(false)
    setDescription(descriptionOriginal)
  }

  function changeTaskStatus(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeStatus({ id, closed: event.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.CLOSED}
          onChange={changeTaskStatus}
        />
        <S.Title>
          {editing && <em>Editando:</em>}
          {title}
        </S.Title>
      </label>
      <S.Tag param="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag param="status" status={status}>
        {' '}
        {status}
      </S.Tag>
      <S.Description
        disabled={!editing}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <S.Actions>
        {editing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  save({
                    description,
                    title,
                    priority,
                    status,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </SaveButton>
            <S.CancelButton onClick={() => cancel()}>Cancelar</S.CancelButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.CancelButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.CancelButton>
          </>
        )}
      </S.Actions>
    </S.Card>
  )
}

export default Task
