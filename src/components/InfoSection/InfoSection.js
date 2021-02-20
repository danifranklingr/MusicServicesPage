import React from 'react';
import {Link} from "react-router-dom";
import {Container, Button} from "../../globalStyles";
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, 
			Heading, Subtitle, ImgWrapper, Img } from "./InfoSection.elements";

					// Plantilla para las secciones de información al centro de la página.
function InfoSection({primary, lightBg, imgStart, lightTopLine, topLine, lightText, 
							lightTextDesc, buttonLabel, description, headline, img, alt, start})
{						// Para recibir todas estas props se arma un objeto que se le pasa a este Componente.
	return (
		<InfoSec lightBg={lightBg}>
			<Container>
				<InfoRow imgStart={imgStart}>
					<InfoColumn>
						<TextWrapper>
							<TopLine lightTopLine={lightTopLine}> {topLine} </TopLine>
							<Heading lightText={lightText}> {headline} </Heading>
							<Subtitle lightTextDesc={lightTextDesc}> {description} </Subtitle>
							<Link to="/sign-up">
								<Button big fontBig primary={primary}> {buttonLabel}</Button>
							</Link>
						</TextWrapper>
					</InfoColumn>
					<InfoColumn>
						<ImgWrapper start={start}>
							<Img src={img} alt={alt}/>
						</ImgWrapper>
					</InfoColumn>
				</InfoRow>
			</Container>			
		</InfoSec>
	)
}

export default InfoSection
