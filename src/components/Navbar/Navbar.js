import React,{useState, useEffect} from 'react';
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, 
			NavLinks, NavItemBtn, NavBtnLink} from "./Navbar.elements";
import {Button} from "../../globalStyles";
import {FaTimes, FaBars} from "react-icons/fa";
import {IconContext} from "react-icons/lib";

const Navbar = () => {
	const [Click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const HandleClick = () => setClick(!Click);

	const showButton = () => {
		if(window.innerWidth <= 960){
			setButton(false);
		}
		else{
			setButton(true);
		}
	}

	useEffect(() => {
		showButton()
	},[])

	window.addEventListener("resize", showButton);

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
						<NavItemBtn>
							{button ? (
								<NavBtnLink to="/sing-up">
									<Button primary> SIGN UP </Button>
								</NavBtnLink>)
							: (
								<NavBtnLink to="/sing-up">
									<Button fontBig primary> SIGN UP </Button>
								</NavBtnLink>)
							}
						</NavItemBtn>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	)
}

export default Navbar
