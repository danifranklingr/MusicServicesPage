import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaDrum} from "react-icons/fa";

const MediaQueryMax820px = `@media (max-width: 820px)`;

export const FooterContainer = styled.div`
	background-color: #101522;
	padding: 4rem 0 2rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const FooterSubscription = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 24px;
	padding: 24px;
	color: #fff;
`;

export const FooterSubHeading = styled.p`
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	margin-bottom: 24px;
	font-size: 24px;
`;

export const FooterSubText = styled.p`
	margin-bottom: 24px;
	font-size: 20px;
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;

	${MediaQueryMax820px}{
		flex-direction: column;
		width: 80%;
	}
`;

export const FormInput = styled.input`
	padding: 10px 20px;
	border-radius: 2px;
	margin-right: 10px;
	outline: none;
	border: none;
	font-size: 16px;
	border: 1px solid #fff;

	&::placeholder{
		color: "#242424";
	}

	${MediaQueryMax820px}{
		width: 100%;
		margin: 0 0 16px 0;
	}
`;

export const FooterLinksContainer = styled.div`
	width: 100%;
	max-width: 1000px;
	display: flex;
	justify-content: center;

	${MediaQueryMax820px}{
		padding-top: 32px;
	}
`;

export const FooterLinksWrapper = styled.div`
	display: flex;
	
	${MediaQueryMax820px}{
		flex-direction: column;
	}
`;

export const FooterLinksItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 16px;
	text-align: left;
	width: 160px;
	box-sizing: border-box;
	color: #fff;
	
	@media (max-width: 420px){
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`;

export const FooterLinkTitle = styled.h2`
	margin-bottom: 16px;
	color: wheat;
`;

export const FooterLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	margin-bottom: 0.5rem;

	&:hover {
		color: #0467fb;
		transition: 0.2s ease-out;
	}
`;

export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`;

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	max-width: 1000px;
	margin: 40px auto 0 auto;

	${MediaQueryMax820px}{
		flex-direction: column;
	}
`;

export const SocialLogo = styled(Link)`
	color: wheat;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
`;

export const SocialIcon = styled(FaDrum)`
	margin-right: 10px;
`;

export const WebSiteRights = styled.small`
	color: #fff;
	margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a`
	color: wheat;
	font-size: ${({bigger}) => (bigger ? "26px" : "24px")};

	&:hover{
		color: ${({hovColor}) => hovColor};
	}
`;

