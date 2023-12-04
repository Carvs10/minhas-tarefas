import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remove } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({ title, priority, description, status, id }: Props) => {
  const dispatch = useDispatch()
  const [editing, setIsEditing] = useState(false)

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
      <S.Description value={description} />
      <S.Actions>
        {editing ? (
          <>
            <S.SaveButton>Salvar</S.SaveButton>
            <S.CancelButton onClick={() => setIsEditing(false)}>
              Cancelar
            </S.CancelButton>
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
