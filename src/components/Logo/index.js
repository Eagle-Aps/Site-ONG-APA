import logo from '../../imagens/Logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoStyled = styled.img `
text-decoration: none;
    max width: 100%
    height: 60 px;
    padding: 10px 0 0 10px;
    cursor: pointer;
` 
const LogOrg = styled.div `
    padding: 0 0 5px 0;
    height: 100 px;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    width: 580px;
`
const TextLogo = styled.div `
    padding-bottom: 20%;
    cursor: pointer;
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

function Logo (){
    return (
            <LogOrg>
                    <LogoStyled src = {logo} alt = 'Logo'/>
                <StyledLink to='/'>
                <TextLogo>
                    <p>Associação Protetora dos Animais</p>
                </TextLogo>
                </StyledLink>
            </LogOrg>
    )    
}

export default Logo;