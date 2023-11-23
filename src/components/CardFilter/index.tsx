import * as S from './styles'

export type Props = {
  active?: boolean
  counter: number
  subtitle: string
}

const CardFilter = ({ active, counter, subtitle }: Props) => (
  <S.Card active={active}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{subtitle}</S.Label>
  </S.Card>
)

export default CardFilter
