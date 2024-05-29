import styled from "styled-components";
import jurubeba from "../../imagens/jurebeba.png"
import Rex from '../../imagens/Rex.png'
import Pipoca from '../../imagens/Pipoca.jpg'
import Orelha from '../../imagens/Orelha.jpg'

const GeneralBox = styled.div`
background-color: #DCDCDC;
align-items: center;
border-radius: 10px;
border-color: 000;
display: flex;
flex-direction: column;
margin: 2% auto;
max-width: 200px;
padding: 25px 20px;
justify-content: space-around;
width: 100%; 
height: 200px; 
`
const BoxImage = styled.img`
width: 150px;
border-radius: 5px;
max-height: 90px;

`
const BoxTitle = styled.p`
font-size: 18px;
color: white;
text-align: center;
padding: 0;
width: 200px;
margin: 5px 0 0 0;
background-color: #2c2c2c;
border-radius: 15px;
`
const Idade = styled.h1`
font-size: 11px;
max-width: 300px;
font-weight: 600; 
`
const BoxText = styled.div `
display:flex;
align-items: center;
flex-direction: column;
margin: 0px 10px 0px 10px;
`
const BoxDescription = styled.h2 `
font-size: 9px;
font-weight: 600; 
text-align: center;
`
const BoxesOrganization = styled.div`
display: flex;
flex-direction: row;
gap: 80px;
margin-top: 30px;
justify-content: center;
padding: 0;`

const BoxesGeneralOrganization = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
margin-top: 20px;
justify-content: center;
padding-bottom: 40px;
`

function Adocao(){
    return(
    <BoxesGeneralOrganization>
    <BoxesOrganization>
        <div>
            <GeneralBox>
                <BoxImage src={Pipoca} alt='Foto de Canil Abandonado'/>
                <BoxText>
                <BoxTitle><strong>Pipoca</strong></BoxTitle>
                <Idade>Idade: Aproximadamente 3 meses</Idade>
                <BoxDescription> Foi resgatado desnutrido e com vários parasitas no corpo. Mas agora está bem!</BoxDescription>
                </BoxText>
            </GeneralBox>
        </div>
        <div>
            <GeneralBox>
            <BoxImage src={jurubeba} alt='Foto de Canil Abandonado'/>
            <BoxText>
            <BoxTitle><strong>Jurubeba</strong></BoxTitle>
            <Idade>Idade: Aproximadamente 3 meses</Idade>
            <BoxDescription> Foi resgatado desnutrido e com vários parasitas no corpo. Mas agora está bem!</BoxDescription>
            </BoxText>
            </GeneralBox>
        </div>
        <div>
            <GeneralBox>
            <BoxImage src={Rex} alt='Foto de Canil Abandonado'/>
            <BoxText>
            <BoxTitle><strong>Rex</strong></BoxTitle>
            <Idade>Idade: Aproximadamente 3 meses</Idade>
            <BoxDescription> Foi resgatado desnutrido e com vários parasitas no corpo. Mas agora está bem!</BoxDescription>
            </BoxText>
            </GeneralBox>
        </div>
        <div>
            <GeneralBox>
            <BoxImage src={Orelha} alt='Foto de Canil Abandonado'/>
            <BoxText>
            <BoxTitle><strong>Orelha</strong></BoxTitle>
            <Idade>Idade: Aproximadamente 3 meses</Idade>
            <BoxDescription> Foi resgatado desnutrido e com vários parasitas no corpo. Mas agora está bem!</BoxDescription>
            </BoxText>
            </GeneralBox>
        </div>
    </BoxesOrganization>
    <BoxesOrganization>
    <div>
        <GeneralBox>
            <BoxImage src={Pipoca} alt='Foto de Canil Abandonado'/>
            <BoxText>
            <BoxTitle><strong>Pipoca</strong></BoxTitle>
            <Idade>Idade: Aproximadamente 3 meses</Idade>
            <BoxDescription> Foi resgatado desnutrido e com vários parasitas no corpo. Mas agora está bem!</BoxDescription>
            </BoxText>
        </GeneralBox>
    </div>
    <div>
        <GeneralBox>
        <BoxImage src={jurubeba} alt='Foto de Canil Abandonado'/>
        <BoxText>
        <BoxTitle><strong>Jurubeba</strong></BoxTitle>
        <Idade>Idade: Aproximadamente 3 meses</Idade>
        <BoxDescription> Foi resgatado desnutrido e com vários parasitas no corpo. Mas agora está bem!</BoxDescription>
        </BoxText>
        </GeneralBox>
    </div>
    <div>
        <GeneralBox>
        <BoxImage src={Rex} alt='Foto de Canil Abandonado'/>
        <BoxText>
        <BoxTitle><strong>Rex</strong></BoxTitle>
        <Idade>Idade: Aproximadamente 3 meses</Idade>
        <BoxDescription> Foi resgatado desnutrido e com vários parasitas no corpo. Mas agora está bem!</BoxDescription>
        </BoxText>
        </GeneralBox>
    </div>
    <div>
        <GeneralBox>
        <BoxImage src={Orelha} alt='Foto de Canil Abandonado'/>
        <BoxText>
        <BoxTitle><strong>Orelha</strong></BoxTitle>
        <Idade>Idade: Aproximadamente 3 meses</Idade>
        <BoxDescription> Foi resgatado desnutrido e com vários parasitas no corpo. Mas agora está bem!</BoxDescription>
        </BoxText>
        </GeneralBox>
    </div>
    </BoxesOrganization>
    </BoxesGeneralOrganization>
    )
}

export default Adocao;