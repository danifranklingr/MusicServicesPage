import React from 'react';
import {InfoSection, Pricing} from '../../components';
import {homeObjFour} from "../Data";

const Services = () => {		// Este componente se inyecta para la ruta raíz "/"
	return (
		<>
			<Pricing/>
			<InfoSection {...homeObjFour}/>
		</>										// InfoSection es un Componente reutilizable. Es como una plantilla.
	)												// Como prop se le pasa la copia de un objeto.
}			// En dicho objeto están todos los atributos (props individuales) para toda la plantilla.


export default Services;
