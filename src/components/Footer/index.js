import styled from "styled-components";
import { Link } from "react-router-dom";
import instagram from "../../imagens/instagram-logo.png";
import facebook from "../../imagens/facebook-logo.png";

const FooterComponents = styled.footer `
height: 80px;
width: 100%;
padding-bottom: 0;
margin: 0;
background-color: #DCDCDC;
display: flex;
justify-content:center;
flex- direction: row;
gap: 20%;
`
const DoacaoComponent = styled.div`
font-size: 30px;
cursor: pointer;
padding-top: 16px;
`
const StyledLink = styled(Link)`
color: inherit;
text-decoration: none;
display: inline-block;

&:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
}
`
const FooterTelefone = styled.p`
font-size: 10px;
text-align: center;
margin: 0;
`
const FaleConosco = styled.div`
width: 250px;
display: flex;
flex-direction: column;
gap: 2px;
margin: 0;
padding-top: 5px;
align-items: center;
`
const FooterTitle = styled.h1`
font-size: 15px;
padding: 0;
margin: 0;`

const FooterImagens = styled.img`
width: 50px;
`
const DivImagens = styled.div`
display: flex;
flex-direction: row;
gap: 5px;`

const RedesSociais = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
align-items: center; 
padding-top: 5px;
padding-bottom: 5px;`
const RedesLink = styled.a`
text-decoration: none;`

function Footer (){
    return (
        <FooterComponents>
                <DoacaoComponent>
                    <StyledLink to='/Doacao'>
                    Faça uma doação!
                    </StyledLink>
                </DoacaoComponent>
                <FaleConosco>
                <FooterTitle><strong>Fale Conosco</strong></FooterTitle>
                <FooterTelefone>Associação de Proteção aos Animais de Jaraguá-Go.</FooterTelefone>
                <FooterTelefone>(62) 98482-3504</FooterTelefone>
                <FooterTelefone>apajaragua@gmail.com</FooterTelefone>
                </FaleConosco>
                <RedesSociais>
                  <FooterTitle>Encontre-nos nas redes sociais!</FooterTitle>
                  <DivImagens>
                  <RedesLink href="https://www.instagram.com/apa_jaragua/">
                  <FooterImagens src={instagram} alt="Logo do Instagram"/>
                  </RedesLink>
                  <RedesLink href="https://www.facebook.com/people/APA-Jaragu%C3%A1/100080371324273/?sk=photos&locale=pt_BR">
                  <FooterImagens src={facebook} alt="Logo do Facebook"/>
                  </RedesLink>
                  </DivImagens>
                </RedesSociais>
          </FooterComponents>
        
    )
}

export default Footer