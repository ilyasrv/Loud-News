import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";

import "./homepage.css";
import Footer from './../../components/Footer/footer';

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
