import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

const Home = () => {
	const { state, dispatch } = useContext(UserContext);
	const [userName, setUserName] = useState();
	const [show, setShow] = useState(false);

	const userHomePage = async () => {
		try {
			const res = await fetch("https://mernappbydanish.herokuapp.com/getdata", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();
			setUserName(data.name);
			setShow(true);
			dispatch({ type: "USER", payload: true ? true : false });
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		userHomePage();
	}, []);

	return (
		<>
			<div className="home-page">
				<div className="home-div ">
					<p className="mt-4 text-center">Welcome</p>
					<h1>{userName}</h1>
					<h2 className="text-center">
						{show ? "Happy to see you back." : "We are the mern developers"}
					</h2>
				</div>
			</div>
		</>
	);
};

export default Home;
