import styled from "styled-components";	// Library imported.
import {Link} from "react-router-dom";
import {Container} from "../../globalStyles";
import {FaDrum} from "react-icons/fa";


const MediaQueryMax960px = `@media (max-width: 960px)`;
const DaniBlue = "#779cff";


export const Nav = styled.nav`		// Html element for Navigation Bar.
	background: #101522;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;				// Always fixed on screen, even when scrolling.
	top: 0;
	z-index: 999;				// Always on top on z axis.
`;

export const NavbarContainer = styled(Container)`	// Container Component attributes are inherited
	display: flex;												// to build NavbarContainer.
	justify-content: space-between;	// This flex implementation allows items and images to be placed on
	height: 80px;							// the extreme points of the navigation bar.

	${Container}		// Iserted text is received in this variable as a Component's child.
							//	<NavbarContainer>  |Texto|  </NavbarContainer>
`;

export const NavLogo = styled(Link)`	// To create NavLogo react-router's Link Component properties
	cursor: pointer;							// are inherited.
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

export const NavIcon = styled(FaDrum)`		// A size-modified React Icon.
	margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`		// Container for menu icon at the right of the bar.
	display: none;										

	${MediaQueryMax960px}{		// Media Query to handle changes for small screens.
		display: block;		
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%,60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;


export const NavMenu = styled.ul`		// This list holds each link to the various page's routes
	display: flex;
	align-items: center;		// All centered along the bar for big screen mode.
	list-style: none;
	text-align: center;

	${MediaQueryMax960px}{			// All in a dynamic side bar for mobile mode.
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 80px;
		left: ${({Click}) => (Click ? 0 : "-100%")};	// Click is received as a prop.
						// true to show (from left) and false to hide (all to left).
		opacity: 1;
		transition: all 0.5s ease;
		background: #101522;
	}	
`;


export const NavItem = styled.li`			// Container for each link on the bar.
	height: 80px;
	border-bottom: 2px solid transparent;

	&:hover{				// Border added to hover.
		border-bottom: 2px solid ${DaniBlue};
	}

	${MediaQueryMax960px}{
		width: 100%;			// With this width links are placed one on top of the other.
		&:hover{
			border: none;		// For side menu the border dissapears.
		}
	}
`;


export const NavLinks = styled(Link)`		// Link text directly.
	color: wheat;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;

	&:hover{						// It's painted in blue on hover.
		color: ${DaniBlue};
	}

	${MediaQueryMax960px}{
		text-align: center;
		padding: 2rem;
		display: table;			// Table with 100% width is what leaves text centered.
		width: 100%;

		&:hover{
			color: ${DaniBlue};
			transition: all 0.3 ease;
		}
	}
`;

export const NavItemBtn = styled.li`
	${MediaQueryMax960px}{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
	}
`;

export const NavBtnLink = styled(Link)`	// Sign up button.
	display: flex;									// Button style comes from GlobalStyles.
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;

