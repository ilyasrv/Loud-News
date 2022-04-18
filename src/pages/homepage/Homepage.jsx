import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";

import Footer from './../../components/Footer/footer';
import "./homepage.css";


export default function Homepage() {
	const location = useLocation();
	console.log(location);
	return (
		<>
			<div className="home">
				<Header />
				<Posts />
				<Footer />
			</div>
		</>
	);
}
