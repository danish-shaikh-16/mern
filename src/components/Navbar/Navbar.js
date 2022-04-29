import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../../App";

const Navbar = () => {
	const { state, dispatch } = useContext(UserContext);

	const RenderMenu = () => {
		if (state) {
			return (
				<>
					<li className="nav-item ml-3">
						<NavLink className="nav-link" to="/">
							Home
						</NavLink>
					</li>
					<li className="nav-item ml-3">
						<NavLink className="nav-link" to="/about">
							About me
						</NavLink>
					</li>

					<li className="nav-item ml-3">
						<NavLink className="nav-link" to="/contact">
							Contact
						</NavLink>
					</li>

					<li className="nav-item ml-3">
						<NavLink className="nav-link" to="/logout">
							Logout
						</NavLink>
					</li>
				</>
			);
		} else {
			return (
				<>
					<li className="nav-item ml-3">
						<NavLink className="nav-link" to="/">
							Home
						</NavLink>
					</li>
					<li className="nav-item ml-3">
						<NavLink className="nav-link" to="/about">
							About me
						</NavLink>
					</li>

					<li className="nav-item ml-3">
						<NavLink className="nav-link" to="/contact">
							Contact
						</NavLink>
					</li>

					<li className="nav-item ml-3">
						<NavLink className="nav-link" to="/login">
							Login
						</NavLink>
					</li>

					<li className="nav-item ml-3">
						<NavLink className="nav-link" to="/register">
							Register
						</NavLink>
					</li>
				</>
			);
		}
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<NavLink className="navbar-brand" to="/">
					<img src="images/DANISH.png" alt="Logo Image" />
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<RenderMenu />
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
