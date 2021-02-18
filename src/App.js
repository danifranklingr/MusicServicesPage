import React from "react";
import {Navbar} from "./components";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";


//				Minuto 1:09:00
// https://www.youtube.com/watch?v=iP_HqoCuRI0&list=PLrai-is-V9ea3sRtdPI4VuRgG_QqOH4G9&index=15&t=1805s


function App() {
	return (
		<Router>
			<GlobalStyle/>
			<Navbar/>
			<Switch>
				<Route path="/" exact component={Home}/>
			</Switch>
		</Router>
  );
}

export default App;
