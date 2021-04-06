import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {										// * is the universal selector, so this styles applies to all elements
	box-sizing: border-box;			// in Global Style.
	margin: 0;
	padding: 0;
	font-family: "Source Sans Pro", sans-serif;
}
`;

export const Container = styled.div`		// Container is a div that occupies 100% of the width, with the
	z-index: 1;										// max of 1300px.
	width: 100%;
	max-width: 1300px;
	margin-left: auto;
	margin-right: auto;
	padding-right: 50px;
	padding-left: 50px;

	@media screen and (max-width: 991px){		// Media Query inserted in this Container.
		padding-right: 30px;						// Padding reduced for smaller screens.
		padding-left: 30px;
	}
`;

export const Button = styled.button`		// General button.
	border-radius: 4px;
	background: ${({primary}) => (primary ? "#4b59f7" : "darkorange")};
	white-space: nowrap;
	padding: ${({big}) => (big ? "12px 64px" : "10px 20px")};
	color: #fff;
	font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
	outline: none;
	border: none;
	cursor: pointer;

	&:hover{
		background: ${({primary}) => (primary ? "darkorange" : "#4b59f7")};
		transition: 0.3s ease-out;
	}

	@media (max-width: 960px){
		width: 100%;
	}
`;


export default GlobalStyle;

