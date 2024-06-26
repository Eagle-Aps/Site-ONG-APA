import Logo from "../Logo";
import Topics from "../HeaderTopics";
import styled from "styled-components";

const HeaderComponents = styled.header `
height: 100px;
padding: 0 0 10px;
text-decoration: none;
background-image: linear-gradient(90deg, #DCDCDC, #D8D8D8);
display: flex;
justify-content: space-between;`

function Header (){
    return (
        <HeaderComponents>
            <Logo/>
            <Topics/>
        </HeaderComponents>
    )
}

export default Header