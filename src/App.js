import React from "react";
import {Navbar, Footer} from "./components";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";


//				Minuto 2:18:08
// https://www.youtube.com/watch?v=iP_HqoCuRI0&list=PLrai-is-V9ea3sRtdPI4VuRgG_QqOH4G9&index=15&t=1805s


function App() {
	return (
		<Router>
			<GlobalStyle/>
			<Navbar/>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/services" exact component={Services}/>
				<Route path="/products" exact component={Products}/>
				<Route path="/sign-up" exact component={SignUp}/>
			</Switch>
			<Footer/>
		</Router>
  );
}

export default App;
