import styled from "styled-components"
import ajuda from "../../imagens/ajude.jpg"
import racao from "../../imagens/ração.jpg"
import piedade from "../../imagens/piedade.jpg"

const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-image: linear-gradient(90deg, #DCDCDC, #D8D8D8);
  margin: 50px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
`;
const Title = styled.h1`
  color: #000;
`;
const Subtitle = styled.h2`
  color: #000;
  width: 900px;
`;
const Text = styled.p`
  color: #000;
  line-height: 1.6;
  max-width: 800px;
  text-align: center;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 20px;
`;
const DoacaoTexto = styled.p`
width: 250px;
`
const DoacoesOrganization = styled.div`
display: flex;
flex-direction: row;
gap: 40px;`

const DoacaoImagem = styled.img `
height: 250px;
border-radius: 50%;
`
const DoacoesContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;`
function Doacoes(){
    return(
        <Container>
        <Title>Ajude-nos a salvar vidas!</Title>
        <Subtitle>Somos a Associação Protetora e Amiga dos Animais de Jaraguá, transformando histórias reais em finais felizes!</Subtitle>
        <Text>
          A APA resgata e cuida de cachorros abandonados e maltratados, 
        proporcionando-lhes cuidados médicos, abrigo e amor até que encontrem um lar definitivo.
        Porém, não podemos fazer isso sozinhos. Precisamos da sua ajuda para continuar esse trabalho.
        </Text>
        <DoacoesOrganization>
          <DoacoesContainer>
            <DoacaoImagem src={ajuda} alt="humano seguranda a pata de um cão"/>
            <DoacaoTexto>Entre em contato conosco! Qualquer tipo de ajuda é bem vinda!</DoacaoTexto>
          </DoacoesContainer>
          <DoacoesContainer>
            <DoacaoImagem src={racao} alt="cão pedindo comida"/>
            <DoacaoTexto><strong>Ajude doando ração</strong>: Nosso amiguinhos estão sempre com fome!</DoacaoTexto>
          </DoacoesContainer>
          <DoacoesContainer>
            <DoacaoImagem src={piedade} alt="Cão com cara de piedade"/>
            <DoacaoTexto><strong>Seja membro!</strong> Contribua com um valor mensal! Tenha certeza que será bem aplicado!</DoacaoTexto>
          </DoacoesContainer>
        </DoacoesOrganization>
        

      </Container>
    )
}

export default Doacoes;