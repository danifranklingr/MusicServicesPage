import {useEffect} from 'react';		// No se importa React porque no se usará ningún JSX.
import {useLocation} from "react-router-dom";	// Hook de react-router.

export default function ScrollToTop() {
	const {pathname} = useLocation();		// El pathname es un atributo muy importante de este Hook.
	
	useEffect(() => {
			window.scroll({			// Se le pasa un objeto como parámetro, indicando las coordenadas
				top:0,					// deseadas. La ventaja es que permite indicarle que haga el movimiento
				left:0,					// suavemente.
				behavior: "smooth",
			});
		},[pathname]
	);
	return null;
}
