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

export default GlobalStyle;

