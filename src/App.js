import React from "react";
import {Navbar, Footer} from "./components";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";


//				Minuto 1:40:00
// https://www.youtube.com/watch?v=iP_HqoCuRI0&list=PLrai-is-V9ea3sRtdPI4VuRgG_QqOH4G9&index=15&t=1805s


function App() {
	return (
		<Router>
			<GlobalStyle/>
			<Navbar/>
			<Switch>
				<Route path="/" exact component={Home}/>
			</Switch>
			<Footer/>
		</Router>
  );
}

export default App;
