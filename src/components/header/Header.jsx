import "./header.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Ticker from "../currency";
//import Carousel from "../carousel-compound/";


export default class Header extends Component {
	render() {
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

						<coingecko-coin-price-marquee-widget coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget>
					</div>

				</div>
			</header>
		);
	}
}
