import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const CodingProfiles = dynamic(() => import("../containers/CodingProfiles"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData = {} }) {
	return (
		<div>
			<SEO />
			<Navigation />
			<Greetings />
			<Experience />
			<Skills />
			<Proficiency />
			<Projects />
			<Education />
			<Feedbacks />
			<CodingProfiles />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.propTypes = {
	githubProfileData: PropTypes.object,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
