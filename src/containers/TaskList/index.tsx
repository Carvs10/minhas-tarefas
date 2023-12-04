import Task from '../../components/Task'
import { Container } from './styles'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const TaskList = () => {
  const { tasks } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>
        2 tarefas marcadas como : &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
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
