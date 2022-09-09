import React from "react";
import { codingProfiles } from "../portfolio";
import { Container, Row } from "reactstrap";

import { Fade } from "react-reveal";

import CodingProfileCard from "../components/CodingProfileCard";

const CodingProfile = () => {
	return codingProfiles && (
		<section className="section section-lg">
			<Container>
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="ni ni-atom text-info" />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-info">Coding Profiles</h4>
					</div>
				</div>
				<Row className="row-grid align-items-start">
					{codingProfiles.map((data, i) => {
						return <CodingProfileCard key={i} data={data} />;
					})}
				</Row>
			</Container>
		</section>
	);
};

export default CodingProfile;
