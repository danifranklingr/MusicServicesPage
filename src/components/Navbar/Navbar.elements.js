import styled from "styled-components";	// Se importa la librería.
import {Container} from "../../globalStyles";
import {FaMagento} from "react-icons/fa";
import {Link} from "react-router-dom";


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

export const NavbarContainer = styled(Container)`	// Se heredan los atributos del componente Container
	display: flex;												// para construir NavbarContainer.
	justify-content: space-space-between;
	height: 80px;

	${Container}		// En esta variable se recibe el texto insertado como hijo del Componente
							//	<NavbarContainer>  |Texto|  </NavbarContainer>
`;

export const NavLogo = styled(Link)`	// Para construir NavLogo se heredan las propiedades del componente
	color: wheat;								// Link de react-router.
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
`;

export const NavIcon = styled(FaMagento)`		// Un React Icon Modificado en tamaño.
	margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`			// Este es el contenedor del icono de menú a la derecha de la barra.
	display: none;										
	@media screen and (max-width: 960px){			// Media query para que el icono solo aparezca para pantallas 
		display: block;									// más pequeñas.
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%,60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

