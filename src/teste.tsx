import styled from 'styled-components'

type BotaoProps = {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const Botaoperigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <Botaoperigo as="a" principal>
        <span>Não Clique Aqui!</span>
      </Botaoperigo>
    </>
  )
}

export default Teste
