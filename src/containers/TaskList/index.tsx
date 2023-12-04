import Task from '../../components/Task'
import { Container } from './styles'

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

  return (
    <Container>
      <p>
        2 tarefas marcadas como : &quot;categoria&ldquo; e &quot;{search}&ldquo;
      </p>
      <ul>
        <li>{search}</li>
        <li>{type}</li>
        <li>{value}</li>
      </ul>
      <ul>
        {filterTask().map((t) => (
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
