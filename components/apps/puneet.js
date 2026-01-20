import React, { Component } from 'react';
import ReactGA from 'react-ga4';
import { Certificates } from './certificates';
import { Gallery } from './gallery';

console.log("Puneet Component v2 (Fixed) Loaded");

export class AboutPuneet extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: null,
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "experience": <Experience />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
            "achievements": <Certificates />,
            "gallery": <Gallery />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        const element = document.getElementById(lastVisitedScreen);
        if (element) {
            this.changeScreen(element);
        } else {
            this.setState({
                screen: this.screens["about"],
                active_screen: "about"
            });
        }
    }

    changeScreen = (e) => {
        if (!e) return;
        const screen = e.id || (e.target && e.target.id);
        if (!screen || !this.screens[screen]) return;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about puneet" src="/themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="experience" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "experience" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="puneet' experience" src="/themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Experience</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="puneet' education" src="/themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="puneet' skills" src="/themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="puneet' projects" src="/themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="achievements" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "achievements" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="puneet' achievements" src="/themes/Yaru/status/achievements.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Achievements</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="puneet's resume" src="/themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
                <div id="gallery" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "gallery" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="puneet gallery" src="/images/logos/gallery_icon.png" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Gallery</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutPuneet;

export const displayAboutPuneet = () => {
    return <AboutPuneet />;
}


function About() {
    return (
        <>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Puneet Kushwaha</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Full Stack Developer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Final-year B.Tech CS Student</span> at <span className="font-medium text-ubt-gedit-orange">BNCET, Lucknow</span>. I am a passionate <span className="font-medium text-ubt-gedit-orange">Full Stack Developer</span> and <span className="font-medium text-ubt-gedit-orange">AI Enthusiast</span> who loves building scalable applications and intelligent systems.</li>
                <li className=" mt-3 list-building"> I enjoy solving real-world problems through code, from agriculture to defense tech. Recently won the <strong>Smart India Hackathon 2025</strong> for developing a defense technology trend analysis system.</li>
                <li className=" mt-3 list-star"> I'm deeply interested in <strong>Generative AI</strong>, <strong>Computer Vision</strong>, and <strong>Automated Systems</strong>. I also manage technical communities like GDG and Aarambh.</li>
                <li className=" mt-3 list-arrow"> Currently looking for opportunities to work on cutting-edge technologies and contribute to impactful projects! ( Reach me at <a className='text-underline' href='mailto:puneetkushwaha9452@gmail.com'><u>puneetkushwaha9452@gmail.com</u></a> )</li>
            </ul>
            <div className="mt-8 w-5/6 md:w-3/4 bg-gray-900 bg-opacity-40 p-4 rounded-lg border border-white border-opacity-10 backdrop-blur-sm shadow-inner">
                <div className="flex items-center gap-2 mb-4 text-ubt-gedit-orange font-bold text-sm">
                    <img src="/themes/Yaru/status/emblem-system-symbolic.svg" className="w-4 filter invert" alt="system" />
                    <span>SYSTEM INFORMATION</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[10px] md:text-xs">
                    <div className="flex flex-col">
                        <span className="text-gray-400 capitalize">OS Version</span>
                        <span className="font-mono text-white">Puneet-OS v2.4.0</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-400 capitalize">Code Quality</span>
                        <span className="font-mono text-green-400">OPTIMIZED (A+)</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-400 capitalize">AI Logic</span>
                        <span className="font-mono text-blue-400">ENABLED (v1.8)</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-400 capitalize">Coffee Intake</span>
                        <span className="font-mono text-yellow-500">CRITICAL (☕×12)</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-400 capitalize">Experience</span>
                        <span className="font-mono text-purple-400">12,450+ Commits</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-400 capitalize">Uptime</span>
                        <span className="font-mono text-green-500">ALWAYS ONLINE</span>
                    </div>
                </div>
            </div>

        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Dr. A.P.J. Abdul Kalam Technical University
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2023 - 2026</div>
                    <div className=" text-sm md:text-base">Bachelor of Technology in Computer Science & Engineering</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl mt-4 text-left font-bold leading-tight">
                        SIMT College, Lucknow (BTEUP)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2020 - 2023</div>
                    <div className=" text-sm md:text-base">Diploma in Civil Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentage &nbsp; 68%</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        UP Board
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2019 - 2020</div>
                    <div className=" text-sm md:text-base">Class 10 (PCM)</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentage &nbsp; 70%</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with various languages & frameworks across the full stack.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">React.js, Node.js, Python & AI!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used tools:</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="puneet javascript" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="puneet python" />
                        <img className="m-1" src="https://img.shields.io/badge/Java-ED8B00?style=flat&logo=java&logoColor=white" alt="puneet java" />
                        <img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="puneet HTML" />
                        <img src="https://img.shields.io/badge/-CSS3-%231572B6?style=flat&logo=css3&logoColor=ffffff" alt="puneet CSS" className="m-1" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="puneet git" className="m-1" />
                        <img src="https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="puneet docker" className="m-1" />
                        <img src="https://img.shields.io/badge/-Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white" alt="puneet kubernetes" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="puneet react" />
                        <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="puneet next" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="puneet node.js" className="m-1" />
                        <img src="https://img.shields.io/badge/-Express.js-404d59?style=flat" alt="puneet express.js" className="m-1" />
                        <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="puneet mongodb" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="puneet tailwind css" />
                        <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white" alt="puneet bootstrap" className="m-1" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> Specialized in building </span> <strong className="text-ubt-gedit-orange">AI-powered analytics and automated systems.</strong>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Jarvis AI Assistant",
            date: "Jun 2025 - Present",
            link: "https://github.com/puneetkushwaha/Jarvis-AI",
            description: [
                "Python-based AI assistant with voice commands and system automation.",
                "Integrated OpenCV for face recognition authentication and computer vision features.",
            ],
            domains: ["python", "opencv", "ai"]
        },
        {
            name: "Chakshura (SIH Winner)",
            date: "Dec 2025",
            link: "https://github.com/puneetkushwaha/Chakshura",
            description: [
                "AI-powered analytics system for defense technology trend analysis.",
                "Visualized Technology Readiness Levels (TRL) with interactive dashboards.",
            ],
            domains: ["ai", "analytics", "dashboard"]
        },
        {
            name: "CSCA FrontEnd",
            date: "Jan 2026",
            link: "https://github.com/puneetkushwaha/CSCA-FrontEnd",
            live: "https://csca-front-end.vercel.app/",
            description: [
                "Developed a modern and responsive frontend for the CSCA platform.",
                "Implemented clean UI/UX and optimized performance for a seamless user experience.",
            ],
            domains: ["react", "ui-ux"]
        },
        {
            name: "TheOrigin",
            date: "Jan 2026",
            link: "https://github.com/puneetkushwaha/TheOrigin",
            live: "https://the-origin-nu.vercel.app/",
            description: [
                "A high-end AI parent company portal with an interactive 3D Hero Section and glassmorphism.",
                "Utilized Three.js (React Three Fiber) for advanced particle systems and smooth 3D graphics.",
            ],
            domains: ["nextjs", "threejs", "ui-ux"]
        },
        {
            name: "Quiz-Trek",
            date: "Jan 2026",
            link: "https://github.com/puneetkushwaha/Quiz-Trek",
            live: "https://quiz-trek-69.vercel.app",
            description: [
                "Modern quiz application with PDF data extraction using PDF.js and web scraping via Cheerio.",
                "Integrated both Firebase and Supabase for robust backend services and data management.",
            ],
            domains: ["nextjs", "firebase", "supabase"]
        },
        {
            name: "FitXtreme",
            date: "Jan 2026",
            link: "https://github.com/puneetkushwaha/FitXtreme",
            live: "https://fitxtreme.vercel.app/",
            description: [
                "Developed a modern fitness-focused web application with clean UI and smooth navigation.",
                "Created sections for workout plans, fitness content, and user-friendly layouts.",
                "Implemented reusable React components for faster development and scalability.",
            ],
            domains: ["react", "ui-ux", "api"]
        },
        {
            name: "Verve Nova Agency",
            date: "Dec 2025",
            link: "https://github.com/puneetkushwaha/Verve-Nova-Agency",
            live: "http://vervenova.netlify.app/",
            description: [
                "A premium business website for a digital agency, featuring smooth animations and modern design.",
                "Built with focused attention on scalability and reusable component architecture.",
            ],
            domains: ["react", "ui-ux"]
        }
    ];

    const tag_colors = {
        "python": "green-200",
        "opencv": "blue-300",
        "ai": "purple-600",
        "react": "blue-400",
        "nextjs": "white",
        "threejs": "blue-500",
        "firebase": "yellow-600",
        "supabase": "green-400",
        "api": "yellow-400",
        "agriculture": "green-600",
        "ui-ux": "pink-400",
        "html": "pink-600",
        "css": "blue-500",
        "javascript": "yellow-300",
        "analytics": "red-500",
        "dashboard": "red-400",
        "bootstrap": "purple-500",
        "ecommerce": "yellow-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            {
                project_list.map((project, index) => {
                    const mainLink = project.live || project.link;
                    return (
                        <a key={index} href={mainLink} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2 font-bold">{project.name.toLowerCase()}</div>
                                        <div className="flex gap-2">
                                            {project.link && (
                                                <div onClick={(e) => { e.stopPropagation(); window.open(project.link, "_blank") }} title="Github Link" className="cursor-pointer">
                                                    <img src="/themes/Yaru/status/projects.svg" className="w-4 h-4" alt="github" />
                                                </div>
                                            )}
                                            {project.live && (
                                                <div onClick={(e) => { e.stopPropagation(); window.open(project.live, "_blank") }} title="Live Link" className="cursor-pointer">
                                                    <img src="/themes/Yaru/status/external-link.svg" className="w-4 h-4 filter invert" alt="live" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                return <span key={index} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}

function Experience() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Experience
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        CodeVirus Security Pvt. Ltd.
                    </div>
                    <div className=" text-sm text-ubt-gedit-orange mt-0.5">Web Development Intern</div>
                    <div className=" text-sm text-gray-400 mt-0.5">Jan 2026 – Apr 2026 | Lucknow, India (On-site)</div>
                    <ul className=" mt-2 ml-4 list-circle text-sm text-gray-100">
                        <li>Worked on company-assigned web development projects and real-time tasks.</li>
                        <li>Supported UI/UX improvements and handled front-end/back-end development work.</li>
                        <li>Collaborated with the technical team to complete tasks within deadlines.</li>
                        <li>Maintained project documentation and performed basic testing for smooth delivery.</li>
                        <li>Gathered and refined requirements based on technical needs and project goals.</li>
                    </ul>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Aarambh
                    </div>
                    <div className=" text-sm text-ubt-gedit-orange mt-0.5">Co-lead</div>
                    <div className=" text-sm text-gray-400 mt-0.5">Nov 2024 – Present | Lucknow, India</div>
                    <ul className=" mt-2 ml-4 list-circle text-sm text-gray-100">
                        <li>Organized events and workshops focused on learning in Web Development and UI/UX Design.</li>
                        <li>Collaborated with team members to plan sessions, manage activities, and support participants.</li>
                        <li>Helped community members with project building and technical learning guidance.</li>
                    </ul>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        GDG (Google Developer Groups) Lucknow
                    </div>
                    <div className=" text-sm text-ubt-gedit-orange mt-0.5">Social Media Manager</div>
                    <div className=" text-sm text-gray-400 mt-0.5">Sep 2024 – Nov 2024 | Lucknow, India</div>
                    <ul className=" mt-2 ml-4 list-circle text-sm text-gray-100">
                        <li>Managed content creation and promotion across social media platforms for GDG community activities.</li>
                        <li>Increased event engagement and improved online visibility through consistent posting and announcements.</li>
                        <li>Supported community-building initiatives and tech event promotions with the core team.</li>
                    </ul>
                </li>
            </ul>
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="/files/Puneet-Kushwaha-Resume.pdf" title="puneet kushwaha resume" frameBorder="0"></iframe>
    )
} export const folders = {
    sih: {
        title: "Smart India Hackathon 2025",
        issuer: "Ministry of Education, AICTE",
        date: "Dec 2025",
        description: "A transformative journey at NCET Bengaluru, where we developed an AI-driven defense analytics system for the Ministry of Defence. From 36 hours of non-stop coding to being announced as winners, these moments capture our teamwork and innovation.",
        thumbnail: "/Gall/SIH/IMG_20251210_005739.jpg",
        media: [
            { type: "image", url: "/Gall/SIH/IMG_20251210_005739.jpg", title: "The Winning Moment" },
            { type: "image", url: "/Gall/SIH/IMG_20251210_010149.jpg", title: "Team Photo with Trophy" },
            { type: "image", url: "/Gall/SIH/IMG_20251209_233709.jpg", title: "Presenting to the Jury" },
            { type: "image", url: "/Gall/SIH/IMG_20251210_010635.jpg", title: "Winning Trophy" },
            { type: "image", url: "/Gall/SIH/IMG_20251209_225510_1.jpg", title: "Late Night Coding" },
            { type: "image", url: "/Gall/SIH/IMG-20251209-WA0034.jpg", title: "Hackathon Entry" },
            { type: "image", url: "/Gall/SIH/IMG-20251209-WA0039.jpg", title: "Team Working" },
            { type: "image", url: "/Gall/SIH/IMG-20251209-WA0040.jpg", title: "Presentation Flow" },
            { type: "image", url: "/Gall/SIH/IMG_20251209_234504.jpg", title: "Jury Discussion" },
            { type: "image", url: "/Gall/SIH/IMG_20251209_234546.jpg", title: "Tech Demo" },
            { type: "image", url: "/Gall/SIH/IMG_20251209_234622.jpg", title: "Problem Statement Analysis" },
            { type: "image", url: "/Gall/SIH/IMG_20251210_005650.jpg", title: "Focus in Progress" },
            { type: "image", url: "/Gall/SIH/IMG_20251210_005905.jpg", title: "Celebration" },
            { type: "image", url: "/Gall/SIH/IMG_20251210_010104.jpg", title: "Team Spirit" },
            { type: "image", url: "/Gall/SIH/IMG_20251210_010256.jpg", title: "Post-Victory Photo" },
            { type: "image", url: "/Gall/SIH/IMG_20251210_010553.jpg", title: "Trophy Close-up" },
            { type: "image", url: "/Gall/SIH/IMG_20251210_222552.jpg", title: "Memory" },
            { type: "image", url: "/Gall/SIH/IMG_20251214_123522.jpg", title: "Exploring Bengaluru" },
            { type: "image", url: "/Gall/SIH/IMG_20251214_123631.jpg", title: "City Tour" },
            { type: "image", url: "/Gall/SIH/_MG_0147.JPG", title: "Tech Summit Capture" },
        ]
    },
    up: {
        title: "Hack with UttarPradesh 2025",
        issuer: "Chandigarh University",
        date: "Nov 2025",
        description: "Engaging with the tech community at Chandigarh University. A platform where innovation meets collaboration, solving real-world challenges through technology.",
        thumbnail: "/Gall/Hack with UttarPradesh 2025/1 (1).jpg",
        media: [
            { type: "image", url: "/Gall/Hack with UttarPradesh 2025/1 (1).jpg", title: "Event Participation" },
            { type: "image", url: "/Gall/Hack with UttarPradesh 2025/1 (2).jpg", title: "Networking" },
            { type: "image", url: "/Gall/Hack with UttarPradesh 2025/1 (3).jpg", title: "Collaborative Session" },
            { type: "image", url: "/Gall/Hack with UttarPradesh 2025/1 (4).jpg", title: "Project Discussion" },
            { type: "video", url: "/Gall/Hack with UttarPradesh 2025/1 (1).mp4", thumbnail: "/Gall/thumbnails/hack_up_1.png", title: "Event Highlights 1" },
            { type: "video", url: "/Gall/Hack with UttarPradesh 2025/1 (2).mp4", thumbnail: "/Gall/thumbnails/hack_up_2.png", title: "Event Highlights 2" },
        ]
    },
    samera: {
        title: "TechNova (SaMeRa 2.0)",
        issuer: "BNCET, Lucknow",
        date: "2024",
        description: "Securing 1st position at our annual college fest. Highlights of our victory, presentation, and the overall vibrant energy of SaMeRa 2.0.",
        thumbnail: "/Gall/TechNova (SaMeRa 2.0)/1 (1).jpg",
        media: [
            { type: "image", url: "/Gall/TechNova (SaMeRa 2.0)/1 (1).jpg", title: "TechNova Experience" },
            { type: "image", url: "/Gall/TechNova (SaMeRa 2.0)/1 (2).jpg", title: "Victory Snap" },
            { type: "video", url: "/Gall/TechNova (SaMeRa 2.0)/1 (1).MOV", thumbnail: "/Gall/thumbnails/samera.png", title: "Project Walkthrough" },
        ]
    },
    gen: {
        title: "GenAI Hackathon",
        issuer: "Community, Lucknow",
        date: "Nov 2025",
        description: "Exploring the frontiers of Generative AI at the Lucknow community hackathon. A focused event on building innovative solutions using LLMs and Generative models.",
        thumbnail: "/Gall/Gen/WhatsApp Image 2025-11-06 at 17.34.54_16c06e62.jpg",
        media: [
            { type: "image", url: "/Gall/Gen/WhatsApp Image 2025-11-06 at 17.34.54_16c06e62.jpg", title: "GenAI Hackathon Presentation" },
        ]
    }
};

