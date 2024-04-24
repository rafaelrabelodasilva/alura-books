import styled from 'styled-components'
import perfil from '../../image/perfil.svg'
import sacola from '../../image/sacola.svg'

const Icones = styled.ul`
  display: flex;
  align-items: center;
`

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

const icones = [perfil, sacola]

function IconesHeader() {
  return (
    <Icones Icones>
      {icones.map((icone) => (
        <Icone><img src={icone}></img></Icone>
      ))}
    </Icones>
  )
}

export default IconesHeader;