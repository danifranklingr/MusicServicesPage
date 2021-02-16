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

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	@media screen and (max-width: 960px){
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 80px;
		left: ${({Click}) => (Click ? 0 : "-100%")};	// Click se recibe como prop.
						// true para mostrar (desde la izquierda) y false para ocultarlo (todo a la izquierda).
		opacity: 1;
		transition: all 0.5s ease;
		background: #101522;
	}	
`;

export const NavItem = styled.li`
	height: 80px;
	border-bottom: 2px solid transparent;
	&:hover{
		border-bottom: 2px solid #4b59f7;
	}
	@media screen and (max-width: 960px){
		width: 100%;
		&:hover{
			border: none;
		}
	}
`;

export const NavLinks = styled(Link)`
	color: white;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	@media screen and (max-width: 960px){
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover{
			color: #4b59f7;
			transition: all 0.3 ease;
		}
	}
`;







