import emoji from "react-easy-emoji";

export const greetings = {
	name: "Aniket Gawade",
	title: "Hi all, I'm Aniket",
	description:
		"I am an aspiring engineer who enjoys connecting the dots: be it ideas from different disciplines people from different teams, or applications from different industries. I have strong technical skills and an academic background in engineering, object-oriented programming and machine learning. My passion lies in solving business problems with tailored data and algorithms and communicating complex ideas to non-technical stakeholders. I am able to jump across verticals to deliver high-performing solutions.",
	resumeLink:
		//"https://drive.google.com/file/d/1f0ChJ_zu57sOr4HU0qIxQGYXsP8v8M_p/view?usp=sharing",
		//"https://drive.google.com/file/d/1w7F2FY7IaUSj0qzvo_hNuAU3qRNtFrky/view?usp=sharing",
		// "https://drive.google.com/file/d/1X3qp0i6X1rsO_wiCFjOu-T6pBHOsi3Ix/view?usp=sharing",
		// "https://drive.google.com/file/d/19cBYiOEHYYnWCXRYp_RsHV9TnYeOYr0F/view?usp=sharing",
		//"https://drive.google.com/file/d/1whwkAxK_9sYZUW02hrYkUqhYcar1P8G4/view?usp=sharing",
		"https://drive.google.com/file/d/1UYyJJXA5WX92s6m6xWSyPS55o0wmXsGQ/view?usp=sharing",
};

export const openSource = {
	githubUserName: "Aniket-gawade",
};

export const contact = {};

export const socialLinks = {
	instagram: "https://www.instagram.com/aniket.gawade.45/",
	github: "https://github.com/Aniket-gawade",
	linkedin: "https://www.linkedin.com/in/aniket-gawade/",
	mail: "mailto:apgawade822@gmail.com"
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Android Development",
			lottieAnimationFile: "/lottie/skills/android.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience in developing Android Projects using Java & XML"),
				emoji(
					"⚡ Experience in integrating Firebase services like Realtime Database, Firebase Storage, Firebase Authentication"
				),
				emoji(
					"⚡ Experience in handling API calls using Retrofit and Volley"
				),
				
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "Android Studio",
					fontAwesomeClassname: "logos:android-icon",
				},
				{
					skillName: "JAVA",
					fontAwesomeClassname: "logos:java",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "TFLite",
					fontAwesomeClassname: "logos:tensorflow",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Git",
					fontAwesomeClassname: "logos:git-icon",
				},
				{
					skillName: "Firebase",
					fontAwesomeClassname: "logos:firebase",
				},
				{
					skillName: "MySQL",
					fontAwesomeClassname: "logos:mysql",
				},
				{
					skillName: "SQLite",
					fontAwesomeClassname: "logos:sqlite",
				},
				// {
				// 	skillName: "",
				// 	fontAwesomeClassname: "logos:sentry-icon",
				// },
			],
		},
		{
			title: "Web Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Beginner in developing Web Projects using HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS"
				),
				emoji("⚡ Building responsive static websites using ReactJS"),
				emoji(
					"⚡ Integration of third party services such as Firebase, MongoDB, etc"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Laravel",
					fontAwesomeClassname: "logos:laravel",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "PHP",
					fontAwesomeClassname: "logos:php",
				},

				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Git",
					fontAwesomeClassname: "logos:git-icon",
				},
				{
					skillName: "Firebase",
					fontAwesomeClassname: "logos:firebase",
				},
				{
					skillName: "MySQL",
					fontAwesomeClassname: "logos:mysql",
				},
			],
		},
		
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Beginner in developing Smart Contract using Solidity & Ethereum"
				),
				// emoji(
				// 	"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
				// ),
				// emoji(
				// 	"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
				// ),
				// emoji(
				// 	"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				// ),
				emoji(
					"⚡ Building Dapps with React.js & Solidity using Web3.js"
				),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Data structure and Algorithm", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Java",
		progressPercentage: "80",
	},
	{
		Stack: "Android Development",
		progressPercentage: "70",
	},
	{
		Stack: "Web Development",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Sardar Patel Institute of Technology",
		subHeader: "Bachelor of Engineering in Electronics and Telecommunication Engineering",
		duration: "August 2019 - June 2023",
		desc: "Programming Coursework: Data Structures and Algorithms, Object Oriented Programming, Database Management Systems, Computer Networks, Computer Organization, Computer Architecture, Operating Systems, Artificial Intelligence, Machine Learning, Blockchain",
		grade: "CGPA: 8.85",
		descBullets: [
			// "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			// "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
];

export const codingProfiles = [
	{
		site: "LeetCode",
		sitelogo: "/img/icons/common/LeetCode_logo_black.png",
		link: "https://leetcode.com/AniketG822/",
		desc: "Solved 750+ problems",
	},
	{
		site: "GeeksForGeeks",
		sitelogo: "/img/icons/common/gfg_logo.png",
		link: "https://auth.geeksforgeeks.org/user/shrink_wrap/profile",
		desc: "Solved 300+ problems",
	},
	{
		site: "Hackerrank",
		sitelogo: "/img/icons/common/HackerRank_Icon.png",
		link: "https://www.hackerrank.com/aniket_gawade",
		desc: "5 Star Coder",
	},
	{
		site: "CodeChef",
		sitelogo: "/img/icons/common/codeChef_logo.png",
		link: "https://www.codechef.com/users/aniketgawade",
		desc: "3 Star Coder with rating 1650",
	},
]

export const experience = [
	{
		role: "Software Project Developer",
		company: "Sardar Patel Institute of Technology",
		companylogo: "/img/icons/common/spit_logo.jpg",
		date: "Jan 2022 – Jun 2022",
		descBullets: [
			"Developed a website for music recommendations based on speech emotions.",
			"Trained a machine learning model (MLPClassifier) for speech recognition and achieved 83% accuracy.",
			"Established a system that recommends Songs based on speech emotions",
			"Leveraged Knowledge in Laravel, Python, PHP, Firebase.",
		],
	},
	// {
	// 	role: "API Engineer",
	// 	company: "Duseca Software",
	// 	companylogo: "/img/icons/common/dusecaSoftware.jpg",
	// 	date: "Jan 2022 – Mar 2022",
	// 	desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
	// 	// descBullets: [
	// 	// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
	// 	// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	// 	// ],
	// },
	// {
	// 	role: "Full Stack Developer",
	// 	company: "Bleed-AI",
	// 	companylogo: "/img/icons/common/bleedAI.jpg",
	// 	date: "Sept 2021 - Oct 2021",
	// 	desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	// },
	// {
	// 	role: "Backend Developer",
	// 	company: "Wapidu",
	// 	companylogo: "/img/icons/common/wapidu.jpg",
	// 	date: "Sept 2021",
	// 	desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
	// },
];

export const projects = [
	{
		name: "Cafeteria Rush Estimator",
		desc: "Created a cafeteria footfall predictor application with inventory management and revenue prediction features. Created a Virtual Assistant using IBM Cloud Functions to assist by giving key information to the cafeteria owner.",
		github: "https://github.com/Aniket-gawade/SBSPS-Challenge-9305-Rush-Estimator-for-Corporate-Cafeteria",
		link: "https://ibm-rush-estimator.vercel.app/",
	},
	{
		name: "Ummid:  Disaster Management App",
		desc: "Ummid is an Application which can help people in distress due to natural disasters such as earthquakes, landslides, fires, etc. Our app is based on the following 4 phases : mitigation, preparedness, response and recovery.",
		github: "https://github.com/Aniket-gawade/Umeed_Disaster_Management.git",
		link: "https://drive.google.com/file/d/12F6GspT7ml6pC7sp_zXPcxhmim6_Jwsv/view?usp=sharing",
	},
	{
		name: "Car Assistant",
		desc: "Created a utility application for real-time detection of objects like cars, pedestrians, motorcycles, traffic signals, etc. It warns users when it crosses a safe distance by making a warning sound",
		github: "https://github.com/Aniket-gawade/Car_Assistant.git",
		link: "https://drive.google.com/file/d/1Xj6QDQvzoKJb2qfCRuoctrgF0x54mCd7/view?usp=sharing",
	},
	{
		name: "JeevAyush: AYUSH Hospitals Finder",
		desc: "Built a 3 interface AYUSH services locator application with a complete end to end appointment booking system and a Chatbot to resolve queries related to AYUSH services.",
		github: "https://github.com/Aniket-gawade/JeevAyush.git",
		link: "https://drive.google.com/file/d/1F45j3Ky79M8NCQ7ISrNg_Pz5bjVOtGpN/view?usp=sharing",
	},
	{
		name: "Self Driving Car",
		desc: "Steering angle prediction and detecting obstacles in real time and implemented an alert system with a traffic light color detector to take the necessary action.",
		github: "https://github.com/dylan-007/Self-driving-cars.git",
	},
];

export const feedbacks = [

	{
		name: "Winner - IBM Hack Challenge 2022",
		feedback:
			"Pan-India Hackathon organized by IBM. Developed solution for cafeteria owners to estimate footfall and improve their businesses by providing revenue prediction and inventory management system.",
	},
	{
		name: "Finalist -  Smart India Hackathon 2022",
		feedback:
			"Progressed to the finals of S.I.H., largest hackathon organized by Government of India.Provided solution to problem statement given by Ministry of AYUSH (ministry responsible for developing research and propagation of traditional medicines in India).",
	},
	{
		name: "Top 15 teams - E-Yantra robotics competition 2021",
		feedback:
			"Among top 15 teams in India. Developed a functional weeder robots which can remove weed from the field of crops and can be used for sowings and harvesting. Make use of A start algorithm for path planning and PID controller for motion control.",
	},
	{
		name: "Global Rank 2382 - Google Hashcode 2022.",
		feedback:
			"Ranked 2382 globally out of 10000 teams who could achieve a non-zero score. Google Hashcode is a programming competition where teams have to provide solution to an engieering problem.",
	},
	{
		name: "Knight with 1883 rating - Leetcode",
		feedback:
		"Awarded the knight batch on LeetCode, a prestigious recognition given to top-performing members of the community, for consistently ranking among the top 5% and solving over 750 problems.",
	},
	{
		name: "Institutional rank 4 - GeeksforGeeks",
		feedback:
		"Achieved institutional rank 4 among the 1227 Registered Geeks on GeeksforGeeks, a leading online platform for computer science students and professionals, for consistently solving over 300 problems."
	},
	// {
	// 	name: "1000+ DSA Problems",
	// 	feedback:
	// 		"Solved 1000+ DSA questions across coding platforms, including 500+ on Leetcode.",
	// },
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Aniket Gawade",
	description:
		"A passionate Software Developer.",
	author: "Aniket Gawade",
	image: "https://avatars.githubusercontent.com/u/60391607?v=4",
	url: "https://aniket-gawade-portfolio.herokuapp.com/",
	keywords: [
		"Aniket",
		"Aniket Gawade",
		"@Aniket-gawade",
		"Aniket-gawade",
		"Portfolio",
		"Aniket Portfolio ",
		"Aniket Gawade Portfolio",
	],
}
