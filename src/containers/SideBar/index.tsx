import CardFilter from '../../components/CardFilter'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Field type="text" placeholder="Buscar" />
      <S.Filters>
        <CardFilter subtitle="pendentes" counter={1} />
        <CardFilter subtitle="concluídas" counter={2} />
        <CardFilter subtitle="urgentes" counter={3} />
        <CardFilter subtitle="importantes" counter={4} />
        <CardFilter subtitle="normal" counter={5} />
        <CardFilter subtitle="todas" counter={10} active />
      </S.Filters>
    </div>
  </S.Aside>
)

export default SideBar
