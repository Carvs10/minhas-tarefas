import Task from '../../components/Task'
import { Container, Result } from './styles'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const TaskList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)

  const { search, type, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTask = () => {
    let filteredTasks = items
    if (search !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.title.toLowerCase().search(search.toLowerCase()) >= 0
      )
      if (type === 'priority') {
        filteredTasks = filteredTasks.filter((item) => item.priority === value)
      } else if (type === 'status') {
        filteredTasks = filteredTasks.filter((item) => item.status === value)
      }

      return filteredTasks
    }

    return items
  }

  const tasks = filterTask()

  const showResult = (quantity: number) => {
    let message = ''
    const complement =
      search !== undefined && search.length > 0 ? ` e "${search}"` : ''
    if (type === 'todas') {
      message = `${quantity} tarefa(s) encontrada(s) como: todas ${complement}`
    } else {
      message = `${quantity} tarefa(s) encontrada(s) como : "${`${type} = ${value}`}" ${complement}`
    }

    return message
  }

  return (
    <Container>
      <Result>{showResult(tasks.length)}</Result>

      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
              title={t.title}
              description={t.description}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TaskList
