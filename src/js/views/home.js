import React, {useEffect, useState} from "react";
import "../../styles/home.css";
import Componente1 from "../component/componente1";
import Componente2 from "../component/componente2";

export const Home = () => {
	 return (
	<div >
		<Componente1/>
		<Componente2/>
	</div>
	);
};

export default Home;