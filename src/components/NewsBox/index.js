import styled from "styled-components";
import canil from '../../imagens/Canil.jpeg'

const GeneralBox = styled.div`
background-image: linear-gradient(90deg, #DCDCDC, #D8D8D8);
align-items: center;
border-radius: 10px;
display: flex;
flex-direction: column;
margin: 2% auto;
max-width: 800px;
padding: 25px 20px;
justify-content: space-around;
width: 100%; 
height: 350px; 
box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
`
const BoxButton = styled.button`
    background-color: #808080;
    color: #FFF;
    padding: 10px 10px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
    }
`
const BoxImage = styled.img`
height: 100%;
width: 400px;
border-radius: 20px;

`
const BoxTitle = styled.p`
font-size: 15px;
max-width: 300px;
text-align: center;
`
const BoxDescription = styled.h1 `
font-size: 11px;
max-width: 300px;
font-weight: 600; 
`
const NewsContainer = styled.div`
display: flex;
flex-direction: column;
padding: 0 0 0 30px;
text-align: justify;
align-items: center;
`
const ImgContainer = styled.div`
display: flex;
flex-direction: row;
`
function NewsBox(){
    return (
    <GeneralBox>
        <ImgContainer>
        <BoxImage src={canil} alt='Foto de Canil Abandonado'/>
        <NewsContainer>
            <BoxTitle><strong>APA salva filhotes de cachorros abandonados em condições críticas.</strong></BoxTitle>
            <BoxDescription> Em uma ação rápida e comovente, uma APA de proteção animal resgatou filhotes de cachorros abandonados em condições deploráveis ​​em uma área urbana. Os pequenos animais estavam famintos, desidratados e expostos a condições adversas. Com dedicação e cuidado, os voluntários da APA conseguiram garantir a segurança dos filhotes e levá-los para um abrigo onde receberão os cuidados necessários. Este resgate destaca a importância do trabalho da APA na proteção dos animais mais vulneráveis ​​e a necessidade contínua de conscientização sobre a responsabilidade de cuidar de nossos amigos de quatro patas.</BoxDescription>
            <BoxButton>Saiba Mais</BoxButton>
        </NewsContainer>
        </ImgContainer>
    </GeneralBox>

    )
    }

export default NewsBox