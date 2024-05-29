import styled from "styled-components"
import Sobre1 from "../../imagens/Sobre1.jpeg"
import Sobre2 from "../../imagens/Sobre2.jpeg"
import logo from "../../imagens/Logo.png"

const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #DCDCDC;
  margin: 80px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const Title = styled.h1`
  color: #000;
`;
const Subtitle = styled.h2`
  color: #000;
  max-width: 1200px;
`;
const Text = styled.p`
  color: #000;
  line-height: 1.6;
  max-width: 900px;
  text-align: center;
`;
const Image = styled.img`
  max-width: 100%;
  height: 400px;
  border-radius: 15px;
  margin-top: 20px;
`;
const ImageDiv = styled.div`
display: flex;
flex-direction: row;
gap: 30px;
padding-bottom: 30px;`
function AboutUs(){
    return(
        <Container>
        <Title>Sobre Nós</Title>
        <Subtitle>Somos a Associação Protetora e Amiga dos Animais de Jaraguá, transformando histórias reais em finais felizes!</Subtitle>
        <ImageDiv>
        <Image src={Sobre1} alt="Fotos da ONG"/>
        <Image src={logo} alt="Logo da APA"/>
        <Image src={Sobre2} alt="Fotos da ONG"/>
        </ImageDiv>
        <Text>
        Somos a APA-Jaraguá - Associação Protetora dos Animais, uma organização sem fins lucrativos formada por pessoas apaixonadas e comprometidas com a saúde e o bem-estar de animais abandonados. Nossa missão é resgatar, reabilitar e encontrar lares amorosos para esses animais, proporcionando-lhes uma nova oportunidade de viver com dignidade e carinho.

Desde nossa fundação, temos trabalhado incansavelmente para oferecer cuidados médicos, alimentação adequada e abrigo seguro para cães, gatos e outros animais que foram deixados à própria sorte. Cada animal que resgatamos recebe o tratamento necessário, incluindo vacinas, esterilização e qualquer outro cuidado veterinário essencial para garantir sua saúde.

Além do resgate e da reabilitação, promovemos campanhas de conscientização sobre a importância da adoção responsável e da esterilização, visando reduzir o número de animais abandonados nas ruas. Organizamos eventos de adoção, onde apresentamos nossos animais a possíveis adotantes, e buscamos garantir que cada adoção seja feita com responsabilidade e compromisso.

Para continuar com nosso trabalho e cobrir os custos do abrigo, como alimentação, cuidados veterinários, manutenção das instalações e outros gastos operacionais, dependemos do apoio da comunidade e de doações. Cada contribuição, seja financeira ou através de voluntariado, faz uma enorme diferença na vida desses animais.

Convidamos você a se juntar a nós nessa causa nobre. Sua ajuda é fundamental para que possamos continuar salvando vidas e proporcionando um futuro melhor para os animais abandonados. Juntos, podemos fazer a diferença e transformar a realidade de muitos animais que esperam por uma segunda chance.
        </Text>
      </Container>
    )
}

export default AboutUs;