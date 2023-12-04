import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

export type Props = {
  subtitle: string
  type: 'priority' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const CardFilter = ({ subtitle, type, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const isActive = () => {
    const sameType = filter.type === type
    const sameValue = filter.value === value

    return sameType && sameValue
  }

  const count = () => {
    if (type === 'todas') return tasks.items.length
    if (type === 'priority') {
      return tasks.items.filter((item) => item.priority === value).length
    }
    if (type === 'status') {
      return tasks.items.filter((item) => item.status === value).length
    }
  }

  const filtering = () => {
    dispatch(
      changeFilter({
        type,
        value
      })
    )
  }

  const counter = count()
  const active = isActive()
  return (
    <S.Card active={active} onClick={filtering}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  )
}

export default CardFilter
