import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const About = () => {
	const { state, dispatch } = useContext(UserContext);
	const navigate = useNavigate();
	const [userData, setUserData] = useState({});

	const callAboutPage = async () => {
		// console.log(`callAboutPage Function`);
		try {
			const res = await fetch("https://mernappbydanish.herokuapp.com/about", {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				credentials: "include",
			});

			const data = await res.json();
			// console.log(`Data: ${data}`);
			setUserData(data);
			dispatch({ type: "USER", payload: true ? true : false });

			// console.log(`User Data ${userData.name}`);

			if (res.status === 401) {
				const error = new Error(res.error);
				throw error;
			}
		} catch (error) {
			console.log(error);

			navigate("/login");
		}
	};

	useEffect(() => {
		callAboutPage();
	}, []);

	return (
		<>
			<div className="container emp-profile p-0 py-5">
				<form method="GET">
					<div className="row">
						<div className="col-md-4">
							<div className="profile-img">
								<img src="images/User.png" alt="Person Pic" />
							</div>
						</div>

						<div className="col-md-6">
							<div className="profile-head">
								<h5 className="text-uppercase">{userData.name}</h5>
								<h6 className="text-capitalize">{userData.work}</h6>
								<p className="profile-rating mt-3 text-uppercase">
									rankings: <span>1/10</span>
								</p>
								<ul className="nav nav-tabs" role="tablist">
									<li className="nav-item">
										<a
											className="nav-link	"
											id="home-tab"
											data-toggle="tab"
											href="#home"
											role="tab"
											aria-controls="home"
											aria-selected={true}
										>
											About
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											id="profile-tab"
											data-toggle="tab"
											href="#profile"
											role="tab"
											aria-controls="profile"
											aria-selected={false}
										>
											Timeline
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-md-2">
							<input
								type="submit"
								className="profile-edit-btn"
								value="Edit Profile"
								name="btnAddMore"
							/>
						</div>
					</div>

					<div className="row">
						{/* Left side URL */}
						<div className="col-lg-4 mx-lg-0 col-3 mx-auto order-lg-first order-last">
							<div className="profile-work d-flex flex-column">
								<p className="text-uppercase mb-lg-2 mb-3 font-weight-bold">
									Work Link
								</p>
								<a href="https://www.youtube.com/" target="_blank">
									Youtube
								</a>
								<br />
								<a href="https://www.instagram.com/" target="_blank">
									Instagram
								</a>
								<br />
								<a href="https://www.opensea.io/" target="_blank">
									Website
								</a>
								<br />
								<a href="https://www.twitter.com/" target="_blank">
									Twitter
								</a>
								<br />
								<a href="https://www.facebook.com/" target="_blank">
									Facebook
								</a>
								<br />
							</div>
						</div>

						{/* Right side data toggle */}
						<div className="col-lg-8 col-10 mx-lg-0 mx-auto order-lg-last order-first p-lg-0 pl-5">
							<div className="tab-content profile-tab" id="myTabContent">
								{/* About Panel */}
								<div
									role="tabpanel"
									aria-labelledby="home-tab"
									className="tab-pane fade show active"
									id="home"
								>
									<div className="row">
										<div className="col-lg-6 col-3 overflow-auto">
											<label>User ID</label>
										</div>
										<div className="col-lg-6 col-9">
											<p>{userData._id}</p>
										</div>
									</div>

									<div className="row mt-3">
										<div className="col-lg-6 col-3 overflow-auto">
											<label>Name</label>
										</div>
										<div className="col-lg-6 col-9">
											<p>{userData.name}</p>
										</div>
									</div>

									<div className="row mt-3">
										<div className="col-lg-6 col-3 overflow-auto">
											<label>Email</label>
										</div>
										<div className="col-lg-6 col-9">
											<p>{userData.email}</p>
										</div>
									</div>

									<div className="row mt-3">
										<div className="col-lg-6 col-3 overflow-auto">
											<label>Phone</label>
										</div>
										<div className="col-lg-6 col-9">
											<p>{userData.phone}</p>
										</div>
									</div>

									<div className="row mt-3">
										<div className="col-lg-6 col-4 overflow-auto">
											<label>Profession</label>
										</div>
										<div className="col-lg-6 col-8">
											<p>{userData.work}</p>
										</div>
									</div>
								</div>

								{/* Timeline tab */}
								<div
									role="tabpanel"
									aria-labelledby="profile-tab"
									className="tab-pane fade "
									id="profile"
								>
									<div className="row">
										<div className="col-lg-6 col-5 overflow-auto">
											<label>Experience</label>
										</div>
										<div className="col-lg-6 col-4">
											<p>Expert</p>
										</div>
									</div>

									<div className="row mt-3">
										<div className="col-lg-6 col-5 overflow-auto">
											<label>Hourly Rate</label>
										</div>
										<div className="col-lg-6 col-4">
											<p>10$/hr</p>
										</div>
									</div>

									<div className="row mt-3">
										<div className="col-lg-6 col-5 overflow-auto">
											<label>Total Projects</label>
										</div>
										<div className="col-lg-6 col-4">
											<p>230</p>
										</div>
									</div>

									<div className="row mt-3">
										<div className="col-lg-6 col-5 overflow-auto">
											<label>English Level</label>
										</div>
										<div className="col-lg-6 col-4">
											<p>Expert</p>
										</div>
									</div>

									<div className="row mt-3">
										<div className="col-lg-6 col-5 overflow-auto">
											<label>Availabiliy</label>
										</div>
										<div className="col-lg-6 col-4">
											<p>6 months</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default About;
