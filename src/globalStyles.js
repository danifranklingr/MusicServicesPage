import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {										// El * es el selector universal, así que este estilo aplica a todos los
	box-sizing: border-box;			// elementos del Global Style.
	margin: 0;
	padding: 0;
	font-family: "Source Sans Pro", sans-serif;
}
`;

export const Container = styled.div`		// Container es un div que ocupa el 100% del ancho de su elemento
	z-index: 1;										// contenedor, pero hasta 1300px.
	width: 100%;
	max-width: 1300px;
	margin-left: auto;
	margin-right: auto;
	padding-right: 50px;
	padding-left: 50px;

	@media screen and (max-width: 991px){		// Se inserta una media query en este Container.
		padding-right: 30px;						// Reduce el padding para las pantallas más pequeñas.
		padding-left: 30px;
	}
`;

export const Button = styled.button`
	border-radius: 4px;
	background: ${({primary}) => (primary ? "#4b59f7" : "#0467fb")};
	white-space: nowrap;
	padding: ${({big}) => (big ? "12px 64px" : "10px 20px")};
	color: #fff;
	font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
	outline: none;
	border: none;
	cursor: pointer;

	&:hover{
		transition: all 0.3 ease-out;
		background: #fff;
		background: ${({primary}) => (primary ? "#0467fb" : "#4b59f7")};
	}

	@media (max-width: 960px){
		width: 100%;
	}
`;


export default GlobalStyle;

