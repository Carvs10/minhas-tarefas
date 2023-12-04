import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

type Props = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
}

const Task = ({ title, priority, description, status }: Props) => {
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
            <S.CancelButton>Remover</S.CancelButton>
          </>
        )}
      </S.Actions>
    </S.Card>
  )
}

export default Task
