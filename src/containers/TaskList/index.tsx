import Task from '../../components/Task'
import { Container } from './styles'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const TaskList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)
  return (
    <Container>
      <p>
        2 tarefas marcadas como : &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {items.map((t) => (
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
