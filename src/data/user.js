import { faBlog } from "@fortawesome/free-solid-svg-icons";
import InsideOutCover from '../images/Covers/InsideOut.png';
import SouthHollandCover from '../images/Covers/lifvetransition.png';
import Titanic from '../images/Covers/Titanic.png';
import Water from '../images/Covers/Livewithwater.png';
import EastLondon from '../images/Covers/Gentrification.png';
import Hallbergmoos from '../images/Covers/Airport.png';
import Zhangyuan from '../images/Covers/Zhanggarden.png';
import Umbrella from '../images/Covers/Complex.png';
import Synergy from '../images/Covers/Synergy.png';


const INFO = {
	main: {
		title: "Untitled Penguin",
		name: "Jiaqi Wang",
		email: "jiaqiwang097@gmail.com",
		logo: "/../LogoPenguin.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/UntitledPenguin",
		linkedin: "https://www.linkedin.com/in/jiaqi-wang-ramis",
		instagram: "https://instagram.com/",
		blog: "https://untitlepenguin.notion.site/PenguinHere-a2d05da8338645a9b83b58e9121d6b97",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Full-stack web and mobile app developer, and amateur astronaut.",
		description:
			"I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "Hi, My name is Jiaqi Wang！",
		description:
			"I’m a young and curious urbanist based in London. Before moving to the UK, I studied in the Netherlands, Germany, and China. My diverse interests reflect my belief that learning from various fields brings fresh inspiration and perspectives. For example, my master’s thesis at TU Delft builds upon the Pattern Language concept introduced by Christopher Alexander, a UK architect in the 1970s. While originally associated with architecture, this concept has gained prominence in computer science, fundamentally transforming software development. This interdisciplinary approach provides me with a unique perspective on software engineering principles and object-oriented systems, and it has become integral to my daily thinking, prototyping, design, and scripting processes.",
	},

	articles: {
		title: "Here I archive some of my thoughts, and solutions.",
		description:
			"coming soon!",
	},

	projects: [
		{
			title: "PelicanFlow × DATA",
			description:
				"Grasshopper plugin developed with PythonScript, designed to simplify burdensome and repetitive data handling and visualisation tasks, enabling professionals to focus on design rather than data organization. ",
			logo: "https://github.com/UntitledPenguin/chronark.com/blob/main/public/images/PelicanFlowDataCover.png?raw=true",
			linkText: "View Project",
			link: "https://pelicanflow.vercel.app/projects/Documentation",
		},

		{
			title: "Titanic - Machine Learning from Disaster",
			description:
				"A Random Forest model designed to predict passenger survival on the Titanic, achieving an accuracy exceeding 80% on the test dataset and ranking in the top 3% of participants in the Kaggle competition.",
			logo: Titanic,
			linkText: "View Project",
			link: "https://github.com/UntitledPenguin/Titanic",
		},

		{
			title: "Inside Out? Recalibrating Munich Metropolitan Region",
			description:
				"This project employs K-means cluster analysis to evaluate the urbanization and regionalization impacts of the ‘Zweite Stammstrecke’ Express Rail Project on the Munich Metropolitan Region. The findings offer valuable insights for policymakers to understand the potential effects of improved public transport accessibility.",			
			logo: InsideOutCover,
			linkText: "View Project",
			link: "https://ramisurban.github.io/05MUC",
		},

		
		{
			title: "Transit-Induced-Gentrification: Evidence from East London neighbourhoods affected by the extensions of London Overground and Dockland Light Railway",
			description:
				"This study uses the Difference-in-Differences (DID) method to analyze the impact of London Overground and Dockland Light Railway extensions on gentrification and displacement in East London, which highlights the need for careful consideration of TOD effects in future urban planning. ",
			logo: EastLondon,
			linkText: "View Project",
			link: "https://ramisurban.github.io/01EastLondon",
		},

		
		{
			title: "Live With Water:A Pattern Language Towards a Water-Oriented Urban Development",
			description:
				"This is a master thesis developing a toolkit for urban planners and designers to build a water-oriented city",
			logo: Water,
			linkText: "View Project",
			link: "https://ramisurban.github.io/02Pattern",
		},

		{
			title: "Liv/fe Transition:To a Healthy Agriculture Sector with Livestock as an Integral Part of Life",
			description:
				"An integrated framework for energy-transition and a circular agrifood sectors, by encouraging local production and promoting diet transition among consumers",
			logo: SouthHollandCover,
			linkText: "View Project",
			link: "https://ramisurban.github.io/03ZuidHolland",
		},

		{
			title: "Seeing Energy? Regeneration of TU Delft Power Station",
			description:
				"Energy-led urban design/regeneration strategy for TU Delft Campus by rethinking the “energy flow” in built environment.",
			logo: Synergy,
			linkText: "View Project",
			link: "https://ramisurban.github.io/04Synergy",
		},

		
		{
			title: "Boundless Zhang Garden:",
			description:
				"A urban regeneration and design project in Shanghai, Bachelor’s Graduation Project at Tongji University, which won the Gold Award of academic year 2020 in China Living Environment Design Competition",
			logo: Zhangyuan,
			linkText: "View Project",
			link: "https://ramisurban.github.io/06ZhangGarden",
		},

		{
			title: "Hallbergmoos 2050:Green Airport City of Munich",
			description:
				" This project explores the potential of Hallbergmoos as an airport city, envisioning its critical role as a new engine and a new gate for Munich in the decades to come.",
			logo: Hallbergmoos,
			linkText: "View Project",
			link: "https://ramisurban.github.io/05Hallbergmoos",
		},

		{
			title: "Urban Umbrellas: Urban Complex Design at Sichuan Road",
			description:
				"Using continous umbrellas structure to create accessible and inclusive public space for everyone in the city",
			logo: Umbrella,
			linkText: "View Project",
			link: "https://ramisurban.github.io/07UrbanComplex",
		}
	],
};

export default INFO;
