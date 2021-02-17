import React from "react";
import {Navbar} from "./components";
import {BrowserRouter as Router} from "react-router-dom";
import GlobalStyle from "./globalStyles";

//				Minuto 1:02:00
// https://www.youtube.com/watch?v=iP_HqoCuRI0&list=PLrai-is-V9ea3sRtdPI4VuRgG_QqOH4G9&index=15&t=1805s


function App() {
	return (
		<Router>
			<GlobalStyle/>
			<Navbar/>
		</Router>
  );
}

export default App;
