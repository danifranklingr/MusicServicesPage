import React from 'react';
import {InfoSection} from '../../components';
import {homeObjTwo, homeObjThree} from "../Data";

const Products = () => {		// Este componente se inyecta para la ruta raíz "/"
	return (
		<>
			<InfoSection {...homeObjTwo}/>
			<InfoSection {...homeObjThree}/>
		</>										// InfoSection es un Componente reutilizable. Es como una plantilla.
	)												// Como prop se le pasa la copia de un objeto.
}			// En dicho objeto están todos los atributos (props individuales) para toda la plantilla.


export default Products;
