import {useEffect} from 'react';		// React not imported for no use of JSX.
import {useLocation} from "react-router-dom";	// React-router's Hook.

export default function ScrollToTop() {
	const {pathname} = useLocation();		// pathname is an important atttribute on this Hook.
	
	useEffect(() => {
			window.scroll({			// An object is passed in as a parameter, indicating the desired coordinates.
				top:0,					// Conveniently, the smooth movement can be selected.
				left:0,					
				behavior: "smooth",
			});
		},[pathname]		// Each time pathname changes.
	);
	return null;
}
