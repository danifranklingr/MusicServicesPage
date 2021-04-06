import styled from "styled-components";

export const InfoSec = styled.div`		// Holds all the segment of info article.
	color: white;
	padding: 160px 0;
	background: ${({lightBg}) => (lightBg ? "white" : "#101522")};
`;

export const InfoRow = styled.div`	// Holds an article.
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({imgStart}) => (imgStart ? "row-reverse" : "row")};	// This prop determines if section
`;															// shows the image before or after the text.

export const InfoColumn = styled.div`		// Column inside InfoRow.
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	max-width: 50%;		// For big screens, each of the two columns in InfoSection occupies a max width
	flex-basis: 50%;		// of 50% of its container.

	@media (max-width: 768px){
		max-width: 100%;				// For small screens, each column occupies the total width, obtaining
		flex-basis: 100%;				// columns placed one on top of the other, and centered.
		display: flex;
		justify-content: center;	
	}
`;

export const TextWrapper = styled.div`		// It holds all of the article's text.
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;

	@media (max-width: 768px){
		padding-bottom: 65px;
	}
`;

export const TopLine = styled.div`		// Short pre-title to announce source or author.
	color: ${({lightTopLine}) => (lightTopLine ? "#a9b3c1" : "#4b59f7")};
	font-size: 18px;
	line-height: 16px;
	letter-spacing: 1.4px;
	margin-bottom: 16px;
`;

export const Heading = styled.h1`	// Main Title.
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	color: ${({lightText}) => (lightText ? "#f8f9fa" : "#1c2237")};
`;

export const Subtitle = styled.p`	// Description of article's content.
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: ${({lightTextDesc}) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

export const ImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	justify-content: ${({start}) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;

