import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={90} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
								<br />
                  				<div>Current Focus🔍 (2024)</div>
								<div>I’m diving into Machine Learning and GHPython Plugin Development this year. Recently, I’ve been following the Machine Learning Specialisation offered by DeepLearning×Stanford Online. In the meanwhile, I’m busy crafting and testing a new toolkit named 'PelicanFlow', which I use to develop optimized data management and massing generation workflows in masterplanning and urban design projects. 🌆🔍</div>
                  				<br />
                  				<div>Strengths🧩</div>
                  				<div>- Problem-Solving Enthusiast: Always excited to tackle new challenges and find creative solutions. </div>
                  				<div>- Wizard of Visualisation: Great at making complex ideas easy to understand for all kinds of audiences. </div>
                  				<br />
                  				<div>Educational Background🎓</div>
                  				<div>- MPhil at University of Cambridge </div>
                  				<div>- MSc in Architecture and Building Science: TU Delft </div>
                  				<div>- Bachelor in Architecture: Tongji University </div>
                  				<div>- Exchange Student: TU Munich </div>
                  				<br />
                  				<div>Skill Set💼</div>
                 	 			<div>- Programming: Python (NumPy, Pandas, scikit-learn, matplotlib), Grasshopper+RhinoScript, Jupyter Notebook </div>
                  				<div>- Design & Visualization: Adobe Illustrator, Photoshop, InDesign, Premiere, Enscape, Vray, Hand Sketching </div>
                  				<div>- Statistics: Supervised Machine Learning (Random Forest, Logistic Regression, Linear Regression), Neural Network, KNN </div>
                  				<div>- Data Structures: Solid understanding of arrays, linked lists, stacks, queues, hash tables, balanced search trees, and graphs </div>
                  				<br />
                  				<div>Long-term Motivation🌍</div>
                  				<div>-Passionate about leveraging technology to address social and climate challenges, with a strong commitment to making a positive impact. </div>

							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
