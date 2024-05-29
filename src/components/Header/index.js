import Logo from "../Logo";
import Topics from "../HeaderTopics";
import styled from "styled-components";

const HeaderComponents = styled.header `
height: 100px;
padding: 0 0 10px;
text-decoration: none;
background-color: #DCDCDC;
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