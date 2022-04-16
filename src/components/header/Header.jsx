import "./header.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="header wrapper">

				<div className="logo">
					<img src='assets/images/logo.png' alt={'brand'} />
				</div>
				<div className="navbartoggler">
					<div className="siteheadertop">
						<div className="linkmenu">
							<Link className="link" to="/">News</Link>
							<Link className="link" to="/">Education</Link>
						<Link className="link" to="/">Gems</Link>
							<Link className="link" to="/">Community</Link>
							<Link className="link" to="/">Overview</Link>

							<form className="searchform" role="search" method="get" action="https://loud.news/" itemProp="potentialAction" itemScope itemType="https://schema.org/SearchAction">
								<meta itemProp="target" content="https://loud.news/search/?s=" />
								<label>
									<input itemProp="query" type="search" className="searchfield" placeholder="Search for: " defaultValue name="s" required />
									<span className="icon" />
								</label>

							</form>


						</div>
					</div>

					<div className="siteheaderbottom">
					</div>

				</div>
		</header>
	);
}
