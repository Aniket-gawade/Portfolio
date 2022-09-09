import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Col,
	Button,
} from "reactstrap";

import { Fade } from "react-reveal";

const CodingProfileCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade left duration={2000}>
				<Card
					style={{ flex: 1 }}
					className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
				>
					<CardBody className="">
						<img
							src={data.sitelogo}
							style={{
								objectFit: "cover",
								left: 0,
								right: 0,
								top: "7rem",
								marginLeft: "auto",
								marginRight: "auto",
								width: "8rem",
								height: "8rem",
								borderRadius: "50%",
							}}
							className="shadow mb-3"
							alt={data.sitelogo}
						/>
						<CardTitle tag="h4" className="mb-2">
							{data.site}
						</CardTitle>
						<CardText
							tag="div"
							className="description my-3 text-center"
						>
							{data.desc}
							<ul>
								{data.descBullets
									? data.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</CardText>
                        <Button
                            className="btn-icon"
                            color="success"
                            href={data.link}
                            target="_blank"
                            rel="noopener" aria-label="Twitter"
                        >
                            <span className="btn-inner--icon">
                                <i className="fa fa-arrow-right mr-2" />
                            </span>
                            <span className="nav-link-inner--text ml-1">
                                Visit
                            </span>
                        </Button>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default CodingProfileCard
;
