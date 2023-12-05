import { MainContainer, Result, SaveButton } from '../../styles'
import { Field } from '../../styles'
import { Form, Options } from './styles'
const FormContainer = () => (
  <MainContainer>
    <Result>Nova Tarefa</Result>
    <Form>
      <Field type="text" placeholder="Titulo" />
      <Field as="textarea" placeholder="Descrição da tarefa" />
      <Options>
        <p>Prioridade</p>
        <input name="priority" type="radio" id="urgente" />{' '}
        <label htmlFor="urgente">Urgente</label>
        <input name="priority" type="radio" id="importante" />{' '}
        <label htmlFor="importante">Importante</label>
        <input name="priority" type="radio" id="normal" />{' '}
        <label htmlFor="normal">Normal</label>
      </Options>
      <SaveButton type="submit">Cadastrar</SaveButton>
    </Form>
  </MainContainer>
)

export default FormContainer
