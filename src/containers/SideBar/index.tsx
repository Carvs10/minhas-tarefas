import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import * as S from './styles'
import { changeSearch } from '../../store/reducers/filter'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/Tarefa'

import { Field } from '../../styles'
const SideBar = () => {
  const dispatch = useDispatch()
  const { search } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <Field
          type="text"
          placeholder="Buscar"
          value={search}
          onChange={(e) => dispatch(changeSearch(e.target.value))}
        />
        <S.Filters>
          <CardFilter
            value={enums.Status.PENDING}
            type="status"
            subtitle="pendentes"
          />
          <CardFilter
            value={enums.Status.CLOSED}
            type="status"
            subtitle="concluídas"
          />
          <CardFilter
            value={enums.Priority.URGENT}
            type="priority"
            subtitle="urgentes"
          />
          <CardFilter
            value={enums.Priority.IMPORTANT}
            type="priority"
            subtitle="importantes"
          />
          <CardFilter
            value={enums.Priority.NORMAL}
            type="priority"
            subtitle="normal"
          />
          <CardFilter type="todas" subtitle="todas" />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
