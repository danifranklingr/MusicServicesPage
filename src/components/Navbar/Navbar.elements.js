import styled from "styled-components";	// Se importa la librería.

export const Nav = styled.nav`		// Se crea un elemento html de Barra de Navegación.
	background: #101522;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;				// Siempre fija en la pantalla aún cuando se hace scroll.
	top: 0;
	z-index: 999;				// Siempre más al frente.
`;

export const NavbarContainer = styled(Container)`	// Se hereda del componente Container.
	display: flex;
	justify-content: space-space-between;
	height: 80px;

	/* $(Container) */
`;



