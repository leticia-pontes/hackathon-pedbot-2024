import {styled} from "styled-components"

export const Bloco = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 10px;
width: 100vw;
`

export const Caixa = styled.div`
border-radius: 25px;
border: 2px solid #73AD21;
margin: 5px;
max-width: 500px;
`