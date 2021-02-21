import React from 'react';

import {FaFacebook, FaYoutube, FaTwitter} from 'react-icons/fa';
// import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa';
import {AiFillInstagram} from "react-icons/ai";

import {Button} from '../../globalStyles';
import	{FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput,
				FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink,
				SocialMedia, SocialMediaWrap, SocialLogo, WebSiteRights, SocialIcons, SocialIcon, SocialIconLink,
			} from "./Footer.elements";

function Footer() {
	return (
		<FooterContainer>
			<FooterSubscription>
				<FooterSubHeading>
					Join our exclusive membership to receive the latest news and trends	
				</FooterSubHeading>
				<FooterSubText>
					You can unsubscribe at any time.
				</FooterSubText>
				<Form>
					<FormInput name="email" type="email" placeholder="Your Email"/>
					<Button fontBig> Subscribe </Button>
				</Form>
			</FooterSubscription>
			<FooterLinksContainer>
				<FooterLinksWrapper>
					<FooterLinksItems>
						<FooterLinkTitle> About Us </FooterLinkTitle>
						<FooterLink to="/sign-up"> How it works </FooterLink>
						<FooterLink to="/"> Testimonials </FooterLink>
						<FooterLink to="/"> Careers </FooterLink>
						<FooterLink to="/"> Investors </FooterLink>
						<FooterLink to="/"> Terms of service </FooterLink>
					</FooterLinksItems>
					<FooterLinksItems>
						<FooterLinkTitle> Contact Us </FooterLinkTitle>
						<FooterLink to="/sign-up"> How it works </FooterLink>
						<FooterLink to="/"> Testimonials </FooterLink>
						<FooterLink to="/"> Careers </FooterLink>
						<FooterLink to="/"> Investors </FooterLink>
						<FooterLink to="/"> Terms of service </FooterLink>
					</FooterLinksItems>
				</FooterLinksWrapper>
				<FooterLinksWrapper>
					<FooterLinksItems>
						<FooterLinkTitle> Videos </FooterLinkTitle>
						<FooterLink to="/sign-up"> How it works </FooterLink>
						<FooterLink to="/"> Testimonials </FooterLink>
						<FooterLink to="/"> Careers </FooterLink>
						<FooterLink to="/"> Investors </FooterLink>
						<FooterLink to="/"> Terms of service </FooterLink>
					</FooterLinksItems>
					<FooterLinksItems>
						<FooterLinkTitle> Social Media </FooterLinkTitle>
						<FooterLink to="/sign-up"> How it works </FooterLink>
						<FooterLink to="/"> Testimonials </FooterLink>
						<FooterLink to="/"> Careers </FooterLink>
						<FooterLink to="/"> Investors </FooterLink>
						<FooterLink to="/"> Terms of service </FooterLink>
					</FooterLinksItems>
				</FooterLinksWrapper>
			</FooterLinksContainer>
			<SocialMedia>
				<SocialMediaWrap>
					<SocialLogo to="/">
						<SocialIcon/>
						DANI
					</SocialLogo>
					<WebSiteRights> DANI 2021 </WebSiteRights>
					<SocialIcons>
						<SocialIconLink href="/" target="_blank" aria-label="Facebook" hovColor="#0d599f">
							<FaFacebook/>
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Instagram" hovColor="#ffb1ff" bigger>
							<AiFillInstagram/>
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Youtube" hovColor="#d43c3c">
							<FaYoutube/>
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Twitter" hovColor="#50ccf5">
							<FaTwitter/>
						</SocialIconLink>				
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	)
}

export default Footer;
