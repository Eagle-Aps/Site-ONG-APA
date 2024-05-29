import Adocao from "../components/Adocao"
import styled from "styled-components"

const BoxButton = styled.button`
    background-color: #F08080;
    color: #FFF;
    padding: 10px 10px;
    font-size: 5px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 50px;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
    }
`
const BoxImage = styled.img`
width: 150px;
border-radius: 5px;

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
const AnimalsContainer = styled.div`
display: flex;
flex-direction: column;
padding: 0 0 0 30px;
text-align: justify;
align-items: center;
`

function Adotar() {
    return(
        <Adocao/>
    )

  }
  export default Adotar
  