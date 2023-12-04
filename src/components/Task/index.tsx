import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remove, save } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

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

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
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
            <S.SaveButton
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
            </S.SaveButton>
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
