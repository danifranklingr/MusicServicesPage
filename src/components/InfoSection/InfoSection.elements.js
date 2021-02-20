import styled from "styled-components";

export const InfoSec = styled.div`		// Contenedor de todo el segmento de artículo de información.
	color: white;
	padding: 160px 0;
	background: ${({lightBg}) => (lightBg ? "white" : "#101522")};
`;

export const InfoRow = styled.div`	// Contenedor de un artículo.
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({imgStart}) => (imgStart ? "row-reverse" : "row")};	// Esta prop determina si el
`;															// section mostrará la imagen antes o después del texto.

export const InfoColumn = styled.div`		// Columna dentro del contenedor InfoRow.
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	max-width: 50%;		// Al tener la pantalla grande, cada una de las columnas (son dos) en InfoSection
	flex-basis: 50%;		// ocupa un ancho máximo del 50% de su contenedor.	

	@media (max-width: 768px){
		max-width: 100%;				// Al tener la pantalla pequeña, cada columna ocupa el total del ancho,
		flex-basis: 100%;				// logrando así que el contenido se ubique una "columna" encima de la
		display: flex;					// otra.
		justify-content: center;	// Y centrado.
	}
`;

export const TextWrapper = styled.div`		// Contenedor de todo el texto del artículo.
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;

	@media (max-width: 768px){
		padding-bottom: 65px;
	}
`;

export const TopLine = styled.div`		// Breve pre-título del artículo para indicar la fuente o autor.
	color: ${({lightTopLine}) => (lightTopLine ? "#a9b3c1" : "#4b59f7")};
	font-size: 18px;
	line-height: 16px;
	letter-spacing: 1.4px;
	margin-bottom: 16px;
`;

export const Heading = styled.h1`	// Título per sé del artículo.
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	color: ${({lightText}) => (lightText ? "#f8f9fa" : "#1c2237")};
`;

export const Subtitle = styled.p`	// Descripción del contenido del artículo.
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: ${({lightTextDesc}) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

export const ImgWrapper = styled.div`	// 
	max-width: 555px;
	display: flex;
	justify-content: ${({start}) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`	// 
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;

