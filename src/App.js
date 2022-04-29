import React, { createContext, useReducer } from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ErrorPage from "./components/Error/Error";
// import { Navigate } from "react-router-dom";
import Logout from "./components/Logout/Logout";
import "./App.css";

import { initialState, reducer } from "./reducer/UseReducer";

// 1: ContextAPI
export const UserContext = createContext();

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<UserContext.Provider value={{ state, dispatch }}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/logout" element={<Logout />} />
					{/* <Route path="*" element={<Navigate to="/" />} /> */}
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</UserContext.Provider>
		</>
	);
};

export default App;
