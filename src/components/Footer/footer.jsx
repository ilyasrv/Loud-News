
import React from "react";
import "./footer.css";



export default function Footer() {
	return (

		<footer className="footer wrapper">
		
				<div className="menufooter">
			
					<ul className="menulinks">
						<li className="menuitems">
							<a href="./" aria-current="page">Privacy Policy</a>
						</li>
						<li className="menuitems">
							<a href="./" aria-current="page">Terms of Service</a>
						</li>
						<li className="menuitems">
							<a href="./" aria-current="page">Advertisement</a>
						</li>
						<li className="menuitems">
							<a href="./" aria-current="page">Terms of Service</a>
						</li>
						<li className="menuitems">
							<a href="./" aria-current="page">Advertisement</a>
						</li>
						<li className="menuitems">
							<a href="./" aria-current="page">Privacy Policy</a>
						</li>
					</ul>
					<div className="menulogo">
					<div className="logo">
							<img className="logo" src='../assets/images/logo.png' alt={'brand'} />
						</div>
						<h4 className="firstTxt">© 2021-2022 Loud News LLC.
							All Rights Reserved. </h4>
					</div>
				</div>
				<div className="copyright">
					<div className="TxtUp">
						<span>The loudest news of the crypto industry.
							We’ll make you hear us</span>
					</div>
					<div className="SocialLinks">
						<div>Join us</div>
						<div className="Links">
							<a href="./"><img src='../../assets/images/telegr.png' alt={'twitter'} /></a>
							<a href="./"><img src='../../assets/images/telegr.png' alt={'telegram'} /></a>
							<a href="./"><img src='../../assets/images/fb.png' alt={'facebook'} /></a>
							<a href="./"><img src='../../assets/images/inst.png' alt={'instagram'} /></a>
							<a href="./"><img src='../../assets/images/discord.png' alt={'discord'} /></a>
							<a href="./"><img src='../../assets/images/reddit.png' alt={'reddit'} /></a>
						</div>
					</div>
					<div className="TxtButtom">
						<a href="tel:+44581 396725"><span>+44 581 339 67 25</span></a><br />
						<span>support@loudnews.com</span>
					</div>
				</div>
		</footer>
	);
}
















