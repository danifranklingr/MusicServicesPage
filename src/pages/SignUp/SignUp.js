import React from 'react';
import {InfoSection, Pricing} from '../../components';
import {homeObjOne} from "../Data";

const SignUp = () => {		// Este componente se inyecta para la ruta raíz "/"
	return (
		<>
			<Pricing/>
			<InfoSection {...homeObjOne}/>
		</>										// InfoSection es un Componente reutilizable. Es como una plantilla.
	)												// Como prop se le pasa la copia de un objeto.
}			// En dicho objeto están todos los atributos (props individuales) para toda la plantilla.


export default SignUp;
