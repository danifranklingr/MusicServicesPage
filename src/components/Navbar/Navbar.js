import React,{useState} from 'react';
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, 
			NavLinks} from "./Navbar.elements";

import {FaTimes, FaBars} from "react-icons/fa";
import {IconContext} from "react-icons/lib";

const Navbar = () => {
	const [Click, setClick] = useState(false);

	const HandleClick = () => setClick(!Click);

	return (
		<IconContext.Provider value={{color:"wheat"}}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon/>
						DANI
					</NavLogo>
					<MobileIcon	onClick={HandleClick}>
						{Click ? <FaTimes/> : <FaBars/>}
					</MobileIcon>
					<NavMenu	onClick={HandleClick} Click={Click}>
						<NavItem>
							<NavLinks to="/"> Home </NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/services"> Services </NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/products"> Products </NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	)
}

export default Navbar
