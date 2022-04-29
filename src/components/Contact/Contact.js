import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../App";

const Contact = () => {
	// const { state, dispatch } = useContext(UserContext);
	const navigate = useNavigate();

	const [userData, setUserData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const userContact = async () => {
		try {
			const res = await fetch("https://mernappbydanish.herokuapp.com/getdata", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();
			setUserData({
				...userData,
				name: data.name,
				email: data.email,
				phone: data.phone,
			});

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
		// dispatch({ type: "USER", payload: true ? true : false });
		userContact();
	}, []);

	// Storing data in states
	const handleInputs = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		setUserData({
			...userData,
			[name]: value,
		});
	};

	// Sending data to backend
	const contactForm = async (e) => {
		e.preventDefault();

		const { name, email, phone, message } = userData;

		const res = await fetch("https://mernappbydanish.herokuapp.com/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				phone,
				message,
			}),
		});

		const data = await res.json();

		if (!data) {
			window.alert("Message not sent");
		} else {
			alert("Message sent.");
			setUserData({ ...userData, message: "" });
		}
	};

	return (
		<>
			<div className="contact_info">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-10 offset-lg-1 d-flex justify-content-between flex-wrap">
							{/* Phone Number */}
							<div className="contact_info_item d-flex justify-content-start align-items-center">
								<img src="images/iphone.png" alt="Phone Image" />
								<div className="contact_info_content">
									<div className="contact_info_title">Phone</div>
									<div className="contact_info_text">
										{!userData.phone ? "" : `+91 ${userData.phone}`}
									</div>
								</div>
							</div>

							{/* Email */}
							<div className="contact_info_item d-flex justify-content-start align-items-center">
								<img src="images/filled-message.png" alt="Phone Image" />
								<div className="contact_info_content">
									<div className="contact_info_title">Email</div>
									<div className="contact_info_text">
										{!userData.email ? "" : userData.email}
									</div>
								</div>
							</div>

							{/* Address */}
							<div className="contact_info_item d-flex justify-content-start align-items-center">
								<img src="images/map-marker.png" alt="Phone Image" />
								<div className="contact_info_content">
									<div className="contact_info_title">Address</div>
									<div className="contact_info_text">Ahmedabad, Gujarat</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Us Form */}

			<div className="contact_form mb-3">
				<div className="container">
					<div className="row">
						<div className="col-lg-10 offset-lg-1">
							<div className="contact_form_container py-5">
								<div className="contact_form_title">Get in Touch</div>
								<form method="POST" id="contact_form">
									<div className="contact_form_name d-flex justify-content-between align-items-center flex-wrap">
										<input
											type="text"
											id="contact_form_name"
											className="contact_form_name input_field"
											name="name"
											value={userData.name}
											onChange={handleInputs}
											placeholder="Your Name"
											required={true}
										/>
										<input
											type="email"
											id="contact_form_email"
											className="contact_form_email input_field"
											name="email"
											value={userData.email}
											onChange={handleInputs}
											placeholder="Your Email"
											required={true}
										/>
										<input
											type="tel"
											id="contact_form_phone"
											className="contact_form_phone input_field"
											name="phone"
											value={userData.phone}
											onChange={handleInputs}
											placeholder="Your Phone Number"
											required={true}
										/>
									</div>
									<div className="contact_form_text mt-5">
										<textarea
											id=""
											cols="30"
											rows="10"
											className="text_field contact_form_message"
											placeholder="Message"
											required={true}
											name="message"
											value={userData.message}
											onChange={handleInputs}
										></textarea>
									</div>

									<div className="contact_form_button">
										<button
											type="submit"
											className="button contact_submit_button"
											onClick={contactForm}
										>
											Send Message
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
