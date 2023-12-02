import Task from '../../components/Task'
import { Container } from './styles'

const tasks = [
  {
    title: 'Estudar React',
    description: 'Ver Aula 3',
    priority: 'importante',
    status: 'pendente'
  },
  {
    title: 'Pagar a internet',
    description: 'Ver no e-mail',
    priority: 'urgente',
    status: 'concluída'
  },
  {
    title: 'Ir para a academia',
    description: 'Treino B',
    priority: 'importante',
    status: 'pendente'
  }
]
const TaskList = () => (
  <Container>
    <p>2 tarefas marcadas como : &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
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

export default TaskList
