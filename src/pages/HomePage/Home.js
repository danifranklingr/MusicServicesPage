import React from 'react';
import { InfoSection } from '../../components';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from "./Data";

const Home = () => {		// Este componente se inyecta para la ruta raíz "/"
	return (
		<>
			<InfoSection {...homeObjOne}/>	
			<InfoSection {...homeObjTwo}/>	
			<InfoSection {...homeObjThree}/>	
			<InfoSection {...homeObjFour}/>	
		</>										// InfoSection es un Componente reutilizable. Es como una plantilla.
	)												// Como prop se le pasa la copia de un objeto.
}			// En dicho objeto están todos los atributos (props individuales) para toda la plantilla.


export default Home
