import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
		work: "",
		password: "",
		cpassword: "",
	});

	let name, value;
	const handleInputs = (e) => {
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	};

	const postData = async (e) => {
		e.preventDefault();

		const { name, email, phone, work, password, cpassword } = user;

		const res = await fetch("https://mernappbydanish.herokuapp.com/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				phone,
				work,
				password,
				cpassword,
			}),
		});

		const data = await res.json();

		if (data.status === 422 || !data) {
			window.alert("Invalid Registration");
		} else {
			window.alert("Registration Successful");

			navigate("/login");
		}
	};

	return (
		<>
			<section className="signup h-auto">
				<div className="container mt-5 mb-5">
					<div className="signup-content">
						<div className="signup-form">
							<h2 className="form-title">Register</h2>
							<form method="POST" id="register-form" className="register-form">
								<div className="form-group">
									<label htmlFor="name">
										<i className="zmdi zmdi-account material-icons-name" />
									</label>
									<input
										type="text"
										name="name"
										value={user.name}
										onChange={handleInputs}
										id="name"
										autoComplete="off"
										placeholder="Enter Your Name"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="email">
										<i className="zmdi zmdi-email material-icons-name" />
									</label>
									<input
										type="email"
										name="email"
										value={user.email}
										onChange={handleInputs}
										id="email"
										autoComplete="off"
										placeholder="Enter Your Email"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="phone">
										<i className="zmdi zmdi-phone-in-talk material-icons-name" />
									</label>
									<input
										type="tel"
										name="phone"
										value={user.phone}
										onChange={handleInputs}
										id="phone"
										autoComplete="off"
										placeholder="Enter Your Phone"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="work">
										<i className="zmdi zmdi-slideshow material-icons-name" />
									</label>
									<input
										type="text"
										name="work"
										value={user.work}
										onChange={handleInputs}
										id="work"
										autoComplete="off"
										placeholder="Your Profession"
									/>
								</div>

								<div className="form-group">
									<label htmlFor="password">
										<i className="zmdi zmdi-lock material-icons-name" />
									</label>
									<input
										type="password"
										name="password"
										value={user.password}
										onChange={handleInputs}
										id="password"
										autoComplete="off"
										placeholder="Enter Your Password"
									/>
								</div>

								<div className="form-group">
									<label htmlFor="cpassword">
										<i className="zmdi zmdi-lock material-icons-name" />
									</label>
									<input
										type="password"
										name="cpassword"
										value={user.cpassword}
										onChange={handleInputs}
										id="cpassword"
										autoComplete="off"
										placeholder="Confirm Your Password"
									/>
								</div>

								<div className="form-group form-button">
									<input
										type="submit"
										name="register"
										id="signup"
										className="form-submit"
										value="Register"
										onClick={postData}
									/>
								</div>
							</form>
						</div>

						<div className="signup-image">
							<figure>
								<img src="images/register.svg" alt="Registeration Image" />
							</figure>
							<NavLink to="/login" className="signup-image-link">
								I am already registered
							</NavLink>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Register;
