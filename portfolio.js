import emoji from "react-easy-emoji";

export const greetings = {
	name: "Aniket Gawade",
	title: "Hi all, I'm Aniket",
	description:
		"Java backend developer with 3.5+ years building order-management and trade-execution software at Clearwater Analytics (formerly Enfusion), serving 900+ investment managers. Works across Java, Spring, Hibernate/JPA, distributed event-driven JMS services, FIX 4.2/4.4, REST APIs, and OAuth 2.0/mTLS, owning features from design to production.",
	resumeLink:
		"https://drive.google.com/file/d/15mGg8k__MFWd6V1qeaUJiZn0XZSPWXjg/view?usp=sharing",
};

export const openSource = {
	githubUserName: "Aniket-gawade",
};

export const contact = {
	title: "Reach Out to me!",
	subTitle: "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL",
	bio: "Sr. Analyst, Java Developer at Clearwater Analytics (formerly Enfusion). Open to discussing order execution systems, trading tech, and backend architecture.",
	location: "Mumbai, Maharashtra, India",
};

export const socialLinks = {
	instagram: "https://www.instagram.com/aniket.gawade.45/",
	github: "https://github.com/Aniket-gawade",
	linkedin: "https://www.linkedin.com/in/aniket-gawade/",
	mail: "mailto:apgawade822@gmail.com",
};

export const skillsSection = {
	title: "What I do",
	subTitle: "BACKEND ENGINEER WHO BUILDS RELIABLE TRADING SYSTEMS",
	data: [
		{
			title: "Backend Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json",
			skills: [
				emoji(
					"⚡ Building high-performance Java services with Spring Boot and Hibernate/JPA"
				),
				emoji(
					"⚡ Designing REST APIs, multithreaded systems, and database-backed workflows"
				),
				emoji(
					"⚡ Working with MySQL, Redis, and Flyway migrations for data persistence"
				),
			],
			softwareSkills: [
				{ skillName: "Java", fontAwesomeClassname: "logos:java" },
				{ skillName: "Spring", fontAwesomeClassname: "logos:spring-icon" },
				{ skillName: "MySQL", fontAwesomeClassname: "logos:mysql" },
				{ skillName: "Redis", fontAwesomeClassname: "logos:redis" },
				{ skillName: "Python", fontAwesomeClassname: "logos:python" },
				{ skillName: "TypeScript", fontAwesomeClassname: "logos:typescript-icon" },
				{ skillName: "React", fontAwesomeClassname: "vscode-icons:file-type-reactjs" },
				{ skillName: "Git", fontAwesomeClassname: "logos:git-icon" },
			],
		},
		{
			title: "Messaging & FIX Protocol",
			lottieAnimationFile: "/lottie/skills/fullstack.json",
			skills: [
				emoji(
					"⚡ FIX 4.2/4.4 protocol integration with QuickFIX/J for trade execution"
				),
				emoji(
					"⚡ Event-driven architecture with JMS (ActiveMQ Artemis)"
				),
				emoji(
					"⚡ Onboarding algo-trading strategies from 12+ brokers via FIXatdl"
				),
			],
			softwareSkills: [
				{ skillName: "Gradle", fontAwesomeClassname: "logos:gradle" },
				{ skillName: "Maven", fontAwesomeClassname: "vscode-icons:file-type-maven" },
				{ skillName: "GitHub", fontAwesomeClassname: "akar-icons:github-fill" },
			],
		},
		{
			title: "DevOps, Security & Testing",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json",
			skills: [
				emoji(
					"⚡ OAuth 2.0, OIDC (Keycloak), JWT (RS256), Mutual TLS, RBAC security"
				),
				emoji(
					"⚡ CI/CD pipelines with GitHub Actions and Jenkins"
				),
				emoji(
					"⚡ Comprehensive testing with JUnit 5, Mockito, Testcontainers, and Playwright"
				),
			],
			softwareSkills: [
				{ skillName: "Docker", fontAwesomeClassname: "logos:docker-icon" },
				{ skillName: "Jenkins", fontAwesomeClassname: "logos:jenkins" },
				{ skillName: "Prometheus", fontAwesomeClassname: "logos:prometheus" },
				{ skillName: "Grafana", fontAwesomeClassname: "logos:grafana" },
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Java / Spring Boot",
		progressPercentage: "95",
	},
	{
		Stack: "SQL / Databases",
		progressPercentage: "85",
	},
	{
		Stack: "FIX Protocol / Messaging",
		progressPercentage: "80",
	},
	{
		Stack: "DevOps / CI/CD",
		progressPercentage: "75",
	},
	{
		Stack: "React / TypeScript",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Sardar Patel Institute of Technology",
		subHeader:
			"Bachelor of Technology, Electronics and Telecommunication",
		duration: "2019 – 2023",
		desc: "Coursework: Data Structures and Algorithms, Object Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Artificial Intelligence, Machine Learning",
		grade: "CGPA: 8.92",
		descBullets: [],
	},
];

export const codingProfiles = [
	{
		site: "LeetCode",
		sitelogo: "/img/icons/common/LeetCode_logo_black.png",
		link: "https://leetcode.com/u/AniketG822/",
		desc: "800+ problems solved, Knight (top 5%)",
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
];

export const experience = [
	{
		role: "Sr. Analyst, Java Developer – OEMS",
		company: "Clearwater Analytics (formerly Enfusion)",
		companylogo: "/img/icons/common/cwan_logo.png",
		date: "2025 – Present",
		descBullets: [
			"Integrated SEB and Scotiabank stock-borrow APIs into 20+ prime-broker connectors using OAuth 2.0, RS256-signed JWTs over mutual TLS.",
			"Designed a Hamilton algorithm for borrow reservation re-allocation with exact share conservation, validated by 1,100+ lines of tests.",
			"Added Strategy-pattern policy selector for auto-assigning borrow reservations to short-sell orders without double allocation.",
			"Exposed borrow reservations through REST order API; added 760+ lines of tests and fixed UI crash on permission-restricted orders.",
			"Wrote unit tests for 40+ classes in regulation-critical short-sale workflow (JUnit 5, parameterized tests).",
			"Code reviewer on 100+ merged changes; adopted AI-assisted development workflows.",
		],
	},
	{
		role: "Analyst, Java Developer – OEMS",
		company: "Clearwater Analytics (formerly Enfusion)",
		companylogo: "/img/icons/common/cwan_logo.png",
		date: "Jul 2023 – 2025",
		descBullets: [
			"Built a FIX 4.2/4.4 broker simulator (QuickFIX/J) to test order routing, fills, partial fills, rejects, and cancel/replace flows.",
			"Onboarded algo-trading strategies from 12 brokers (JPM, UBS, BTIG, RBC, Liquidnet, Citi) via FIXatdl across UAT and production.",
			"Delivered full-stack features from Hibernate/JPA persistence and service layers to Java Swing UI, including 6 reference-data mapping tables.",
			"Fixed production defects (slow startup, thread-caching bug, parent-order state errors); monitored with Kibana and Checkmk.",
		],
	},
];

export const projects = [
	{
		name: "OEMS – Order Execution Platform",
		desc: "Full-stack order-entry platform with Keycloak OIDC/JWT auth, RBAC, pre-trade risk checks, and idempotent submissions. Raised load-test throughput 2.7× (116→315 req/s) and cut p95 latency 74%. React/TypeScript UI, Playwright E2E, GitHub Actions CI.",
		github: "https://github.com/Aniket-gawade/oems",
	},
	{
		name: "Cafeteria Rush Estimator",
		desc: "Cafeteria footfall predictor with inventory management and revenue prediction. Built a Virtual Assistant using IBM Cloud Functions. Winner of IBM Hack Challenge 2022.",
		github:
			"https://github.com/Aniket-gawade/SBSPS-Challenge-9305-Rush-Estimator-for-Corporate-Cafeteria",
		link: "https://ibm-rush-estimator.vercel.app/",
	},
	{
		name: "Ummid: Disaster Management App",
		desc: "An application to help people in distress due to natural disasters. Based on 4 phases: mitigation, preparedness, response and recovery.",
		github:
			"https://github.com/Aniket-gawade/Umeed_Disaster_Management.git",
		link: "https://drive.google.com/file/d/12F6GspT7ml6pC7sp_zXPcxhmim6_Jwsv/view?usp=sharing",
	},
	{
		name: "JeevAyush: AYUSH Hospitals Finder",
		desc: "3-interface AYUSH services locator with end-to-end appointment booking and a Chatbot for queries. Grand Finalist at Smart India Hackathon 2022.",
		github: "https://github.com/Aniket-gawade/JeevAyush.git",
		link: "https://drive.google.com/file/d/1F45j3Ky79M8NCQ7ISrNg_Pz5bjVOtGpN/view?usp=sharing",
	},
	{
		name: "Car Assistant",
		desc: "Real-time detection of objects like cars, pedestrians, motorcycles, and traffic signals. Warns users when objects cross a safe distance with an alert sound.",
		github: "https://github.com/Aniket-gawade/Car_Assistant.git",
		link: "https://drive.google.com/file/d/1Xj6QDQvzoKJb2qfCRuoctrgF0x54mCd7/view?usp=sharing",
	},
	{
		name: "Self Driving Car",
		desc: "Steering angle prediction and detecting obstacles in real time and implemented an alert system with a traffic light color detector to take the necessary action.",
		github: "https://github.com/dylan-007/Self-driving-cars.git",
	},
];

export const feedbacks = [
	{
		name: "LeetCode Knight – Top 5% Globally",
		feedback:
			"Awarded the Knight badge on LeetCode for consistently ranking among the top 5% of users globally, with 800+ problems solved across data structures, algorithms, and system design.",
	},
	{
		name: "Winner – IBM Hack Challenge 2022",
		feedback:
			"Pan-India Hackathon organized by IBM (20,000+ teams). Developed solution for cafeteria owners to estimate footfall and improve businesses with revenue prediction and inventory management.",
	},
	{
		name: "Grand Finalist – Smart India Hackathon 2022",
		feedback:
			"Progressed to the Grand Finals of S.I.H., the largest hackathon organized by Government of India. Provided solution to problem statement from Ministry of AYUSH.",
	},
	{
		name: "Top 15 Teams – E-Yantra Robotics Competition 2021",
		feedback:
			"Among top 15 teams in India. Developed a functional weeder robot for crop fields using A* algorithm for path planning and PID controller for motion control.",
	},
	{
		name: "Global Rank 2382 – Google Hashcode 2022",
		feedback:
			"Ranked 2382 globally out of 10,000 teams with non-zero scores. Google Hashcode is a team programming competition for solving engineering optimization problems.",
	},
];

export const seoData = {
	title: "Aniket Gawade",
	description:
		"Sr. Java Developer at Clearwater Analytics — OMS/EMS, FIX protocol, Spring Boot",
	author: "Aniket Gawade",
	image: "https://avatars.githubusercontent.com/u/60391607?v=4",
	url: "https://aniket-gawade.vercel.app/",
	keywords: [
		"Aniket",
		"Aniket Gawade",
		"@Aniket-gawade",
		"Java Developer",
		"Spring Boot",
		"OMS",
		"Clearwater Analytics",
		"Enfusion",
		"FIX Protocol",
		"Portfolio",
		"Aniket Gawade Portfolio",
	],
};
