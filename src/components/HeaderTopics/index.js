import styled from "styled-components";
import { Link } from "react-router-dom";

const TopicsEnvironment = styled.ul `
    display: flex;
    text decoration: none;
    padding: 0 150px 0;
    height: 70px;
`

const TopicsS = styled.li`
    text-decoration: none;
    font-size: 16px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 5px 0;
    cursor: pointer;
`
const StyledLink = styled(Link)`
  color: inherit;
  padding-top: 28px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Topics (){
    return (
        <TopicsEnvironment>
            <StyledLink to='/Sobre'>
                <TopicsS>SOBRE NÓS</TopicsS>
            </StyledLink>
            <StyledLink to='/Adotar'>
                <TopicsS>ANIMAIS PARA ADOÇÃO</TopicsS>
            </StyledLink>
            <StyledLink to='/Doacao'>
            <TopicsS>DOAÇÕES</TopicsS>
            </StyledLink>
        </TopicsEnvironment>
    )
}

export default Topics