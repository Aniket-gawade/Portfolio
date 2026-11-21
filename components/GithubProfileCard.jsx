import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";
import { contact } from "../portfolio";

const GithubProfileCard = ({ prof = {} }) => {
	if (!prof) prof = {};
	return (
		<Card className="section-lg bg-gradient-info shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-2" lg="4">
							<img
								src={prof.avatar_url || "https://avatars.githubusercontent.com/u/60391607?v=4"}
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
						</Col>
						<Col lg="8" className="order-lg-1">
							<h2 className="text-white">{contact.title || "Reach Out to me!"}</h2>
							<p className="lead text-white mt-3">
								{contact.subTitle || "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL"}
							</p>
							<p className="text-white mt-3">{contact.bio || prof.bio || ""}</p>
							<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								{contact.location || prof.location || "Mumbai, India"}
							</div>
							<SocialLinks />
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
