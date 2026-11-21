# Portfolio Project — Full Context Document

> **Owner:** Aniket Gawade  
> **Last Updated:** 2026-11-21  
> **Live URL:** [https://aniket-gawade.vercel.app/](https://aniket-gawade.vercel.app/)  
> **Repository:** [https://github.com/Aniket-gawade/Portfolio.git](https://github.com/Aniket-gawade/Portfolio.git)

---

## 1. Tech Stack & Versions

| Technology | Version / Details |
|---|---|
| **Framework** | Next.js 11.1.2 (Pages Router) |
| **React** | 17.0.2 |
| **UI Library** | Reactstrap 8.9.0 + Bootstrap 5.0.2 |
| **CSS** | Argon Design System React (custom CSS) + Bootstrap + Font Awesome + Nucleo icons |
| **Animations** | react-lottie (Lottie JSON files) + react-reveal (Fade transitions) |
| **Icons** | @iconify/react 3.1.3 (skill icons) + Font Awesome (nav/social icons) + Nucleo (section icons) |
| **Sticky Nav** | headroom.js 0.12.0 |
| **SEO** | Custom `<Head>` component with OpenGraph + Twitter Card meta |
| **GitHub API** | Fetch at build time via `getStaticProps` (GitHub REST API v3) |
| **Package Manager** | Yarn (yarn.lock present) |
| **Deployment** | Vercel |
| **Linting** | ESLint with next/core-web-vitals (rule `@next/next/no-img-element` is off) |
| **Image Optimization** | sharp 0.29.1 (allowed domain: `avatars.githubusercontent.com`) |

---

## 2. Project Structure

```
Portfolio/
├── pages/
│   ├── _app.js              # Global CSS imports (Bootstrap, Argon, Font Awesome, Nucleo)
│   └── index.js             # Single-page app — all sections composed here
├── components/              # Presentational / card-level components
│   ├── CodingProfileCard.jsx
│   ├── DisplayLottie.jsx    # Lottie animation wrapper
│   ├── EducationCard.jsx
│   ├── ExperienceCard.jsx
│   ├── FeedbackCard.jsx     # Used for Awards & Achievements cards
│   ├── GithubProfileCard.jsx
│   ├── Navigation.jsx       # Top navbar with social links
│   ├── ProjectsCard.jsx
│   ├── SEO.jsx              # <Head> meta tags
│   └── SocialLinks.jsx      # Circular social-link buttons
├── containers/              # Section-level layout wrappers
│   ├── CodingProfiles.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Feedbacks.jsx        # Section title says "Awards & Achievements"
│   ├── Greetings.jsx        # Hero section with Lottie + "See My Resume" CTA
│   ├── Proficiency.jsx      # Skill progress bars
│   ├── Projects.jsx
│   └── Skills.jsx           # Skill cards with Lottie + Iconify icons
├── portfolio.js             # ⭐ SINGLE DATA SOURCE — all content lives here
├── public/
│   ├── favicon.png
│   ├── manifest.json
│   ├── robots.txt
│   ├── img/icons/common/    # Company logos (cwan_logo.png, spit_logo.jpg) + coding-profile logos
│   ├── fonts/Agustina.otf   # Custom font
│   └── lottie/              # Lottie animation JSON files
│       ├── build.json       # Used in Proficiency section
│       ├── coding.json      # Used in Greetings hero
│       └── skills/          # cloudinfra.json, fullstack.json, etc.
├── styles/
│   ├── argon-design-system-react.css  # Main design-system CSS
│   ├── styles.css                     # Minimal override (overflow-x: hidden)
│   └── vendor/                        # Font Awesome + Nucleo font bundles
├── next.config.js           # reactStrictMode: false, image domain whitelist
├── .eslintrc.json
├── .gitignore
├── package.json
├── yarn.lock
└── picture.PNG              # Screenshot for README
```

---

## 3. Page Layout & Section Order

The site is a **single-page application**. The section render order in `pages/index.js` is:

```
1. SEO            → <Head> meta tags
2. Navigation     → Sticky transparent navbar with name + social icons
3. Greetings      → Hero: gradient background, intro text, resume button, Lottie animation
4. Experience     → Work experience (Clearwater Analytics roles) [Moved up for senior profile]
5. Skills         → Backend, Messaging/FIX, DevOps/Security/Testing
6. Proficiency    → Skill proficiency progress bars
7. Projects       → OEMS + Cafeteria + Ummid + JeevAyush + Car Assistant + Self Driving Car
8. Education      → SPIT B.Tech (CGPA 8.92)
9. Feedbacks      → Awards & Achievements (LeetCode Knight, IBM Winner, SIH Finalist, etc.)
10. CodingProfiles→ Cards for LeetCode (800+ solved), GFG, HackerRank, CodeChef
11. GithubProfile → "Reach Out to me!" card with GitHub avatar, bio, location, social links
```

---

## 4. Data Architecture — `portfolio.js`

**All content is centralized in `portfolio.js`.**

### `greetings`
- **name:** "Aniket Gawade"
- **title:** "Hi all, I'm Aniket"
- **description:** Java backend developer with 3.5+ years building order-management and trade-execution software at Clearwater Analytics (formerly Enfusion), serving 900+ investment managers.
- **resumeLink:** `https://drive.google.com/file/d/15mGg8k__MFWd6V1qeaUJiZn0XZSPWXjg/view?usp=sharing`

### `openSource`
- `githubUserName`: "Aniket-gawade"

### `contact`
- Custom title, subtitle, professional bio, and location for the bottom "Reach Out to me!" card (overrides old GitHub API bio).

### `socialLinks`
- Instagram, GitHub, LinkedIn, Email (`apgawade822@gmail.com`)

### `skillsSection`
Three production-focused categories:
1. **Backend Development** — Java 17/25, Spring Boot, Hibernate/JPA, REST APIs, Concurrency, MySQL, Redis.
2. **Messaging & FIX Protocol** — FIX 4.2/4.4 with QuickFIX/J, JMS ActiveMQ Artemis, FIXatdl broker onboarding.
3. **DevOps, Security & Testing** — OAuth 2.0 / OIDC / Keycloak, JWT, mTLS, Docker, CI/CD, JUnit 5, Playwright.

### `SkillBars`
- Java / Spring Boot: 95%
- SQL / Databases: 85%
- FIX Protocol / Messaging: 80%
- DevOps / CI/CD: 75%
- React / TypeScript: 60%

### `educationInfo`
- **SPIT** — Bachelor of Technology, Electronics and Telecommunication (2019 – 2023), CGPA: 8.92

### `codingProfiles`
- LeetCode (800+ problems, Knight top 5%), GeeksForGeeks (300+ problems), HackerRank (5 Star), CodeChef (3 Star / 1650)

### `experience`
1. **Sr. Analyst, Java Developer – OEMS** at Clearwater Analytics (formerly Enfusion) [2025 – Present]
   - Stock-borrow API connectors (SEB, Scotiabank), OAuth 2.0 / RS256 JWT / mTLS
   - Hamilton algorithm for borrow reservation re-allocation
   - Strategy-pattern policy selector
   - REST order API endpoints & fixes
   - 40+ unit tested classes with JUnit 5
   - Code reviewer on 100+ PRs, Claude Code workflows
2. **Analyst, Java Developer – OEMS** at Clearwater Analytics (formerly Enfusion) [Jul 2023 – 2025]
   - QuickFIX/J broker simulator
   - Algo trading strategy onboarding via FIXatdl from 12 brokers
   - Full stack persistence → service → Swing UI
   - Production defect resolution & Kibana monitoring

### `projects`
1. **OEMS – Order Execution Platform** (Java 25, Spring Boot 4, Keycloak, Redis, React, Playwright)
2. **Cafeteria Rush Estimator** (IBM Hack Challenge Winner)
3. **Ummid: Disaster Management App**
4. **JeevAyush: AYUSH Hospitals Finder** (Smart India Hackathon Grand Finalist)
5. **Car Assistant**
6. **Self Driving Car**

### `feedbacks` (Awards & Achievements)
- LeetCode Knight (Top 5% globally, 800+ problems)
- Winner – IBM Hack Challenge 2022 (20,000+ teams)
- Grand Finalist – Smart India Hackathon 2022
- Top 15 Teams – E-Yantra Robotics Competition 2021
- Global Rank 2382 – Google Hashcode 2022

### `seoData`
- Description: "Sr. Java Developer at Clearwater Analytics — OMS/EMS, FIX protocol, Spring Boot"
- URL: `https://aniket-gawade.vercel.app/`

---

## 5. Development & Build Commands

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Production build test
yarn build
```
