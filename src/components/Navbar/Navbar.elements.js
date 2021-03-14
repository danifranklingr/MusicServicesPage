import styled from "styled-components";	// Se importa la librería.
import {Link} from "react-router-dom";
import {Container} from "../../globalStyles";
import {FaDrum} from "react-icons/fa";


const MediaQueryMax960px = `@media (max-width: 960px)`;
const DaniBlue = "#779cff";


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
	justify-content: space-between;	// Para que el logo y los enlaces estén en los extremos
	height: 80px;							// de la barra de navegación.

	${Container}		// En esta variable se recibe el texto insertado como hijo del Componente
							//	<NavbarContainer>  |Texto|  </NavbarContainer>
`;

export const NavLogo = styled(Link)`	// Para construir NavLogo se heredan las propiedades del componente
	cursor: pointer;							// Link de react-router.
	color: wheat;
	justify-self: flex-start;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;

	&:hover{
		color: ${DaniBlue};
	}
`;

export const NavIcon = styled(FaDrum)`		// Un React Icon Modificado en tamaño.
	margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`			// Este es el contenedor del icono de menú a la derecha de la barra.
	display: none;										

	${MediaQueryMax960px}{		// Media Query para manejar los cambios que solo se verán en pantallas pequeñas.
		display: block;		
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%,60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;


export const NavMenu = styled.ul`		// Esta es la lista que almacena cada enlace hacia
	display: flex;								// las distintas rutas de la página
	align-items: center;		// Todo centrado a los largo de la barra para la versión de navegador.
	list-style: none;
	text-align: center;

	${MediaQueryMax960px}{			// Todo en una barra lateral dinámica para la versión movil.
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


export const NavItem = styled.li`				// Es el contenedor de cada enlace de la barra de navegación.
	height: 80px;
	border-bottom: 2px solid transparent;

	&:hover{				// Al hover se le añade un borde.
		border-bottom: 2px solid ${DaniBlue};
	}

	${MediaQueryMax960px}{
		width: 100%;		// Con este ancho los enlaces quedan uno bajo el otro.
		&:hover{
			border: none;		// Para el menú lateral desplegable desaparece el borde del hover.
		}
	}
`;


export const NavLinks = styled(Link)`		// Son los textos de enlace directamente.
	color: wheat;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;

	&:hover{						// Se pintan de azul al hover.
		color: ${DaniBlue};
	}

	${MediaQueryMax960px}{
		text-align: center;
		padding: 2rem;
		display: table;			// Tabla con ancho de 100% es lo que deja al texto en el centro.
		width: 100%;

		&:hover{
			color: ${DaniBlue};
			transition: all 0.3 ease;
		}
	}
`;

export const NavItemBtn = styled.li`		// El contenedor del botón de SIGN UP al final de la barra.
	${MediaQueryMax960px}{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
	}
`;

export const NavBtnLink = styled(Link)`	// El botón de sign up.
	display: flex;									// El diseño del Botón viene de GlobalStyles.
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;

