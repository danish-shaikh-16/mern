import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { UserContext } from "../../App";

const Login = () => {
	const { state, dispatch } = useContext(UserContext);

	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginUser = async (e) => {
		e.preventDefault();

		const res = await fetch("https://mernappbydanish.herokuapp.com/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = res.json();

		if (res.status === 400 || !data) {
			window.alert("Invalid Credentials.");
		} else {
			dispatch({ type: "USER", payload: true });

			window.alert("Login Successful.");
			navigate("/");
		}
	};

	return (
		<>
			<section className="signin">
				<div className="container mt-5">
					<div className="signin-content">
						<div className="signin-image">
							<figure>
								<img src="images/register.svg" alt="Registeration Image" />
							</figure>
							<NavLink to="/register" className="signin-image-link">
								Create an account
							</NavLink>
						</div>

						<div className="signin-form">
							<h2 className="form-title">Sign In</h2>
							<form method="POST" id="register-form" className="register-form">
								<div className="form-group">
									<label htmlFor="email">
										<i className="zmdi zmdi-email material-icons-name" />
									</label>
									<input
										type="email"
										name="email"
										id="email"
										autoComplete="off"
										placeholder="Enter Your Email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="password">
										<i className="zmdi zmdi-lock material-icons-name" />
									</label>
									<input
										type="password"
										name="password"
										id="password"
										autoComplete="off"
										placeholder="Enter Your Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>

								<div className="form-group form-button">
									<input
										type="submit"
										name="signin"
										id="signin"
										className="form-submit"
										value="Login"
										onClick={loginUser}
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
