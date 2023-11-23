import * as S from './styles'

const Task = () => (
  <S.Card>
    <S.Title>Nome da tarefas</S.Title>
    <S.Tag>importante</S.Tag>
    <S.Tag> pendente</S.Tag>
    <S.Description />
    <S.Actions>
      <S.Button>Editar</S.Button>
      <S.Button>Remover</S.Button>
    </S.Actions>
  </S.Card>
)

export default Task
