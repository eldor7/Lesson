import styled from "styled-components";

export const Container = styled.div`
`

export const Navbar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 100px;
background-color: #000;
`

export const Leftcon = styled.div`
flex: 1;
margin-left: 5%;
`


export const Logo = styled.img`
height: 60px;
width: 60px;
cursor: pointer;

`

export const Right = styled.div`
`

export const Menu = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: space-between;
margin-right: 5%;
li{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    flex: none;
    order: 1;
    flex-grow: 0;
    text-decoration: none;
    list-style-type: none;
    :hover{
        cursor: pointer;
    }
}


`



export const Home = styled.div`
display: flex;
align-items: center;
justify-content: space-between
h1{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 87px;
    color: #FFFFFF;
}
`

export const PhotoR = styled.div`
flex: 1;
`

export const Photo = styled.img`
`

