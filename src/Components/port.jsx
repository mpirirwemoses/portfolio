import React from "react";
import { Link } from "react-router-dom";
import image56 from "../assets/images/pexels-ekoagalarov-14865728.jpg"
import {useState} from "react"
import Card from "./Card"
import Exprience from "./Exprience"
import ProjectCard from "./Project"
import { ChevronLeft, X, Star,ChevronRight } from 'lucide-react';
import { Mail, Linkedin, Github, Briefcase } from "lucide-react";
import image60 from "../assets/images/icons8-java-144.png"
import image61 from "../assets/images/icons8-javascript-144.png"
import image62 from "../assets/images/icons8-figma-96.png"
import image63 from "../assets/images/icons8-content-100.png"
import image64 from "../assets/images/icons8-node-js-144.png"
import image65 from "../assets/images/icons8-react-native-256.png" 
import image66 from "../assets/images/DALL·E 2025-02-01 10.15.49 - A modern and visually stunning e-commerce website cover. The image should feature an elegant online shopping theme with a sleek laptop or smartphone d.webp"
import image67 from "../assets/images/developer_setup_grayscale.png"
import image68 from "../assets/images/StockCake-Futuristic Visionary Fashion_1725943062.jpg"
import RotatingNumber from "./Rotate";
import SocialIcons from "./Social";
const Port = () => {
    const [count, setCount] = useState(0);
    const [desiredNumber, setDesiredNumber] = useState(null);
    const [number, setNumber] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [rating, setRating] = useState(4);
       
       const ratings = [
        { id: 1, totalStars: 5 }, // First div with 4 stars
        { id: 2, totalStars: 4 }, // Second div with 2 stars
        { id: 3, totalStars: 3 }, // Third div with 5 stars
      ];

    const handleCardClick =()=>{
        console.log("clicked")
    }
     const contact = +256758295130
    const handleCopy = () => {
      navigator.clipboard.writeText(contact)
        .then(() => {
          alert('Contact copied to clipboard!');
        })
        .catch((error) => {
          alert('Failed to copy contact: ' + error);
        });
    };
    const projects = [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce app with React, Node.js, and MySQL.",
        image:image66,
      },
      {
        id: 2,
        title: "AI Chatbot",
        description: "An AI-powered chatbot built using OpenAI's API and Next.js.",
        image:image67,
      },
      {
        id: 3,
        title: "Virtual Reality Apps",
        description: "A personal portfolio built with React and Tailwind CSS.",
        image:image68,
      },
      {
        id: 4,
        title: "Task Management App",
        description: "A project management tool with real-time collaboration features.",
        image:image56,
      },
    ];
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards);
    };
  const cards = 7;
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? cards - 1 : prevIndex - 1
      );
    };
    
  
    return (
      <div className="bg-purple-900 min-h-screen font-sans">
        <header className="bg-gradient-to-r sticky top-0 from-purple-900 z-10 via-blue-500 to-purple text-white py-6">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex gap-8">
              <img className="rounded-full ml-8 h-[55px] w-[55px] object-cover " src ={image67} alt="logo"/>
            <h1 className="text-3xl font-bold">Moses M</h1>
            </div>
            <nav>
              <ul className="flex space-x-8  items-center">
                <li><a href="#about" className="hover:underline px-3 hover:bg-blue-500 py-2 italic rounded text-2xl">About</a></li>
                <li><a href="#projects" className="hover:underline hover:bg-blue-500 px-3 py-2 italic rounded text-2xl">Projects</a></li>
                <li><a href="#contact" className="hover:underline hover:bg-blue-500 px-3 py-2 italic rounded text-2xl">Contact</a></li>
                <li><a href="#experience" className="hover:underline hover:bg-blue-500 px-3 py-2 italic rounded text-2xl">Experience</a></li>
            <Link path to= "/contact" >   <li><button className="px-4 py-2 border sm:px-2 sm:text-md  border-transparent hover:bg-purple-400 hover:text-black hover:border-blue-500 rounded-full bg-purple-700 text-white text-lg">Hire Me</button></li></Link>
              </ul>
            </nav>
          </div>
        </header>
  
        <section id="about" className="container rounded-md border-r border-l border-b px-4 py-4 border-purple-800 mt-8  mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-4 text-white underline">About Me</h2>
          <div className="flex flex-row mt-4 space-x-16">
            <div className="text-gray-200 max-w-[50%] leading-relaxed">
              <h3 className="text-4xl font-bold text-purple-300">Web Developer +</h3>
              <h3 className="text-4xl font-bold text-purple-300">Software Developer</h3>
              <div className="relative mt-8 p-2">
      
            
              <p className="text-3xl  text-black mt-4">
                Hello!<strong className ="text-white"> I'm Moses Mpirirwe, a passionate software developer  </strong> specializing in React and full-stack development. With a keen eye for detail and a drive for excellence, I build seamless and user-friendly applications.
              </p>
              </div>
              <ul className="flex flex-wrap items-center justify-center space-x-6 mt-[200px]">
  <li>
    <a href="mailto:john.doe@example.com" className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-gradient-to-l from-purple-900 to-blue-500 text-blue-400 hover:text-white">
      <Mail />
      <span className ="text-xl font-sans ">Email</span>
    </a>
  </li>
  <li>
    <a href="https://linkedin.com/in/johndoe" className="flex items-center space-x-2 text-blue-400 py-2 px-3 rounded-md hover:bg-gradient-to-l from-purple-900 to-blue-500 hover:text-white">
      <Linkedin />
      <span className ="text-xl font-sans ">LinkedIn</span>
    </a>
  </li>
  <li>
    <a href="https://github.com/johndoe" className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-gradient-to-l from-purple-900 to-blue-500 text-gray-300 hover:text-white">
      <Github />
      <span className ="text-xl font-sans ">GitHub</span>
    </a>
  </li>
  <li>
    <a href="#" className="flex items-center space-x-2 hover:bg-gradient-to-l py-2 px-3 rounded-md from-purple-900 to-blue-500 text-green-400 hover:text-white">
      <Briefcase />
      <span className ="text-xl font-sans ">Portfolio</span>
    </a>
  </li>
  <li>
    <button className="rounded-full px-6 py-2 text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:from-blue-700 hover:via-purple-700 hover:to-pink-700">Download CV</button>
  </li>
</ul>

            </div>
            <div className="relative w-[400px] h-[400px]">
  <img
    className="rounded-lg absolute top-0 right-16 object-cover h-[400px] w-[400px] rotate-[10deg] transition-transform duration-300 ease-in hover:z-10"
    src={image68}
    alt="profile"
  />
  <img
    className="rounded-lg absolute top-0 right-4 object-cover h-[400px] w-[400px] rotate-[-10deg] transition-transform duration-300 ease-in hover:z-10"
    src={image56}
    alt="profile"
  />
  <img
    className="rounded-lg absolute top-0 right-8 object-cover h-[400px] w-[400px] rotate-[0deg] transition-transform duration-300 ease-in hover:z-10"
    src={image67}
    alt="profile"
  />
</div>

          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold"><RotatingNumber finalNumber={25}/>+</h2>
              <span className="text-lg">Projects</span>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold "><RotatingNumber finalNumber={200}/>+</h2>
              <span className="text-lg">Happy Clients</span>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold"><RotatingNumber finalNumber={5}/>+</h2>
              <span className="text-lg">Years of Experience</span>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold"><RotatingNumber finalNumber={15}/>+</h2>
              <span className="text-lg">Certifications</span>
            </div>
          </div>
        </section>
        <section id="services" className="container mx-auto px-4 py-10">
        <h2 className="text-center text-black text-3xl font-extrabold mb-6">My Services</h2>
        <hr className="mb-10 mx-auto w-1/3 bg-gray-100"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-purple-800 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-bold mb-2">Web Development</h3>
            <p className="text-xl">Building responsive and high-quality websites with modern technologies.</p>
            <span className="block mt-4 text-2xl text-gray-900">2 years of experience</span>
            <p>Rating Myself:</p>
      {<div>
          <div className="flex">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="flex-row">
                <Star
                  className={`w-6 h-6 transition-all duration-300 ${
                    index < ratings[0].totalStars ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                  fill="currentColor"
                />
              </div>
            ))}
          </div>
          <p className="mt-2 text-2xl text-gray-400">Rating: {ratings[0].totalStars} out of 5</p>
        </div>
      }
            
                    
                   
              
                
          </div>
          <div className="bg-purple-800 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-bold mb-2">Content Creation</h3>
            <p className="text-xl">Producing engaging and high-quality content for various platforms.</p>
            <span className="block text-2xl mt-4 text-2xl text-gray-900">2 years of experience</span>
            <p>Rating  Myself :</p>
      {<div>
          <div className="flex">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="flex-row">
                <Star
                  className={`w-6 h-6 transition-all duration-300 ${
                    index < ratings[1].totalStars ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                  fill="currentColor"
                />
              </div>
            ))}
          </div>
          <p className="mt-2 text-2xl text-gray-400">Rating: {ratings[1].totalStars} out of 5</p>
        </div>
      }
          </div>
         
          <div className="bg-purple-800 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-bold mb-2">UX/UI Design</h3>
            <p className="text-xl">Creating intuitive and user-friendly interfaces for better user experiences.</p>
            <span className="block mt-4 text-2xl text-gray-900">2 years of experience</span>
            <p>Rating Myself:</p>
      {<div>
          <div className="flex">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="flex-row">
                <Star
                  className={`w-6 h-6 transition-all duration-300 ${
                    index < ratings[2].totalStars ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                  fill="currentColor"
                />
              </div>
            ))}
          </div>
          <p className="mt-2 text-2xl text-gray-400">Rating: {ratings[2].totalStars} out of 5</p>
        </div>
      }
          </div>
          <div className="bg-purple-800 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-bold mb-2">SEO Expert</h3>
            <p className="text-xl">Optimizing websites to rank higher on search engines and increase visibility.</p>
            <span className="block mt-4 text-2xl text-gray-900">2 years of experience</span>
            <p>Rating Myself:</p>
      {<div>
          <div className="flex">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="flex-row">
                <Star
                  className={`w-6 h-6 transition-all duration-300 ${
                    index < ratings[0].totalStars ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                  fill="currentColor"
                />
              </div>
            ))}
          </div>
          <p className="mt-2 text-2xl text-gray-400">Rating: {ratings[0].totalStars} out of 5</p>
        </div>
      }
          </div>
        </div>
      </section>
  

      <section id="projects" className="py-16 ">
      {/* Section Header */}
      <h1 className="text-center text-black text-4xl font-extrabold mb-6 font-[Poppins]">
        My Recent Projects
      </h1>
      <hr className="bg-gray-900 w-1/4 h-1 rounded-full mb-10 mx-auto" />

      {/* Buttons */}
      <div className="flex justify-center space-x-6">
        <button className="rounded-full px-8 py-3 w-[200px] text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-md transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(128,0,255,0.6)] hover:scale-105">
          Apps
        </button>
        <button className="rounded-full px-8 py-3 w-[200px] text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-md transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(128,0,255,0.6)] hover:scale-105">
          Content
        </button>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto grid lg:grid-cols-2 md:grid-cols-2 gap-8 px-6 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative flex flex-col items-center bg-purple-900 rounded-xl shadow-lg p-8 overflow-hidden hover:shadow-[0_0_20px_5px_rgba(128,0,255,0.8)] transition-shadow duration-300"
          >
            {/* Project Title (Absolute Positioning) */}
            <h2 className="absolute top-10 z-10 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 drop-shadow-lg font-[Poppins]">
              {project.title}
            </h2>

            {/* Project Card Component */}
            <ProjectCard id={project.id} title={project.title} description={project.description} image={project.image} />
          </div>
        ))}
      </div>
    </section>
      <div className="skills-section py-12">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-center text-black text-3xl font-extrabold mb-6">My Skills</h2>
    <hr className="mb-10 mx-auto w-1/3 bg-gray-100"/>
    <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
      {/* React */}
      <div className="skill-item text-center">
        <div className="skill-icon bg-gray-200 w-16 h-16 mx-auto rounded-full">
          {/* Add React Icon/Image here */}
          <img src={image65} alt="react" className= "w-full h-full object-cover rounded-full"/>
        </div>
        <strong className="flex gap-4 justify-center"><p className="text-blue-500">Rate:</p><span className="text-white bold">90%</span></strong>
        <p className="mt-2 text-xl">React</p>
      </div>

      {/* JavaScript */}
      <div className="skill-item text-center">
        <div className="skill-icon bg-gray-200 w-16 h-16 mx-auto rounded-full">
          {/* Add JavaScript Icon/Image here */}
          <img src={image61} alt="react" className= "w-full h-full object-cover rounded-full"/>

        </div>
        <strong className="flex gap-4 justify-center"><p className="text-blue-500">Rate:</p><span className="text-white bold">95%</span></strong>
        <p className="mt-2 text-xl">JavaScript</p>
      </div>

      {/* Java */}
      <div className="skill-item text-center">
        <div className="skill-icon bg-gray-200 w-16 h-16 mx-auto rounded-full">
          {/* Add Java Icon/Image here */}
          <img src={image60} alt="react" className= "w-full h-full object-cover rounded-full"/>

        </div>
        <strong className="flex gap-4 justify-center"><p className="text-blue-500">Rate:</p><span className="text-white bold">85%</span></strong>
        <p className="mt-2 text-xl">Java</p>
      </div>

      {/* Figma */}
      <div className="skill-item text-center">
        <div className="skill-icon bg-gray-200 w-16 h-16 mx-auto rounded-full">
          {/* Add Figma Icon/Image here */}
          <img src={image62} alt="react" className= "w-full h-full object-cover rounded-full"/>

        </div>
        <strong className="flex gap-4 justify-center"><p className="text-blue-500">Rate:</p><span className="text-white bold">80%</span></strong>
        <p className="mt-2 text-xl">Figma</p>
      </div>

      {/* Git */}
      <div className="skill-item text-center">
        <div className="skill-icon bg-gray-200 w-16 h-16 mx-auto rounded-full">
          {/* Add Git Icon/Image here */}
          <img src={image65} alt="react" className= "w-full h-full object-cover rounded-full"/>

        </div>
        <strong className="flex gap-4 justify-center"><p className="text-blue-500">Rate:</p><span className="text-white bold">95%</span></strong>
        <p className="mt-2 text-xl">Git</p>
      </div>

      {/* Node */}
      <div className="skill-item text-center">
        <div className="skill-icon bg-gray-200 w-16 h-16 mx-auto rounded-full">
          {/* Add Node.js Icon/Image here */}
          <img src={image64} alt="react" className= "w-full h-full object-cover rounded-full"/>

        </div>
        <strong className="flex gap-4 justify-center"><p className="text-blue-500">Rate:</p><span className="text-white bold">90%</span></strong>
        <p className="mt-2 text-xl">Node</p>
      </div>
    </div>
  </div>
</div>
<section className= "mt-4 ">


<div className="max-w-6xl mx-auto px-4">
<h2 className="text-center text-black text-3xl font-extrabold mb-6">My Testimonials</h2>
<hr className="mb-10  mx-auto w-1/3 bg-gray-100"/>
<div className="relative w-full flex items-center justify-center">
      <ChevronLeft
        onClick={handlePrev}
        className="absolute left-0  hover:scale-110  transition-transform hover:text-blue-500  h-20 w-20 text-2xl p-2 text-white"
      />
      <div className="overflow-hidden w-[900px] flex gap-4">
        <div
          className="flex transition-transform  gap-8 duration-500"
          style={{ transform: `translateX(-${currentIndex * 300}px)` }}
        >
<Card
        image={image68}
        title="Ahmed , Producer Mega Solutions "
        description="This is a brief description of the project."
        
      />
      <Card
        image={image56}
        title="Mr Peter, CEO infinite"
        description={`
          Working with Moses was an absolute pleasure. 
          He developed a custom CRM system that not only streamlined our
          operations but also helped us connect with our clients better. 
          His attention to detail and clear communication ensured that our 
          project was done on time and exceeded expectations. 
          The software is live and functioning smoothly, and we couldn’t be happier with the 
          results. I highly recommend Moses for anyone seeking reliable, top-notch software development, 
          and we will definitely be working with him again in the future.
        `}
        
      />
      <Card
        image={image56}
        title="Madam Rachael , Rise Children Africa"
        description={`
          Working with Moses was an absolute pleasure. 
          He developed a custom CRM system that not only streamlined our
          operations but also helped us connect with our clients better. 
          His attention to detail and clear communication ensured that our 
          project was done on time and exceeded expectations. 
          The software is live and functioning smoothly, and we couldn’t be happier with the 
          results. I highly recommend Moses for anyone seeking reliable, top-notch software development, 
          and we will definitely be working with him again in the future.
        `}
        
      />
      <Card
        image={image56}
        title="Mr Michael , Fintech Ug"
        description={`
          Working with Moses was an absolute pleasure. 
          He developed a custom CRM system that not only streamlined our
          operations but also helped us connect with our clients better. 
          His attention to detail and clear communication ensured that our 
          project was done on time and exceeded expectations. 
          The software is live and functioning smoothly, and we couldn’t be happier with the 
          results. I highly recommend Moses for anyone seeking reliable, top-notch software development, 
          and we will definitely be working with him again in the future.
        `}
      />
      <Card
        image={image56}
        title="Mr John Patrick from Asto Holdings"
        description={`
          Working with Moses was an absolute pleasure. 
          He developed a custom CRM system that not only streamlined our
          operations but also helped us connect with our clients better. 
          His attention to detail and clear communication ensured that our 
          project was done on time and exceeded expectations. 
          The software is live and functioning smoothly, and we couldn’t be happier with the 
          results. I highly recommend Moses for anyone seeking reliable, top-notch software development, 
          and we will definitely be working with him again in the future.
        `}
        
      />
      <Card
        image={image56}
        title="Mrs.Augustine , Lead Pastor Church LLMs"
        description={`
          Working with Moses was an absolute pleasure. 
          He developed a custom CRM system that not only streamlined our
          operations but also helped us connect with our clients better. 
          His attention to detail and clear communication ensured that our 
          project was done on time and exceeded expectations. 
          The software is live and functioning smoothly, and we couldn’t be happier with the 
          results. I highly recommend Moses for anyone seeking reliable, top-notch software development, 
          and we will definitely be working with him again in the future.
        `}
        
      />
      </div>
      </div>
      <ChevronRight
        onClick={handleNext}
        className="absolute right-0 h-20 w-20 p-2 text-white hover:scale-110  transition-transform hover:text-blue-500 rounded-full "
      />
    </div>
    </div>
      
</section>
<section id="experience" className="mt-[100px] border border-purple-800 py-3 w-full">
<h2 className="text-center text-black text-3xl font-extrabold mb-6">My Education and Experience </h2>
<hr className="mb-10 mx-auto w-1/3 bg-gray-100"/>
  <div className="p-4 flex flex-col lg:flex-row gap-12 mt-[100px]">
    {/* Experience Section */}
    <div className="flex-1">
      <h3 className="text-3xl text-center font-bold mb-6">Experience</h3>
      <div className="space-y-6">
        <Exprience title="Web Developer" description="Developed responsive websites using modern web technologies." period="Aug 2022 - Dec 2022" />
        <Exprience title="Frontend Developer Intern" description="Collaborated with designers to create interactive UI components." period="Jan 2023 - May 2023" />
        <Exprience title="Freelance Web Developer" description="Built e-commerce websites and optimized them for performance." period="Jun 2023 - Sep 2023" />
        <Exprience title="Software Engineer" description="Contributed to full-stack applications for startups and enterprises." period="Oct 2023 - Present" />
        <Exprience title="Tech Blogger" description="Created articles on web development best practices and tutorials." period="Dec 2023 - Present" />
      </div>
    </div>

    {/* Education Section */}
    <div className="flex-1">
      <h3 className="text-3xl ml-4 text-center  font-bold mb-6">Education</h3>
      <div className="space-y-6">
        <Exprience title="Bachelor of Software Engineering" description="Studying core software engineering concepts at Makerere University." period="Jan 2024 - Present" />
        <Exprience title="Web Development Certification" description="Completed an advanced course on modern web technologies." period="Aug 2022 - Dec 2022" />
        <Exprience title="Data Structures and Algorithms" description="Gained a deep understanding of DSA in an intensive training program." period="Jan 2023 - May 2023" />
        <Exprience title="React and Full-Stack Development" description="Mastered building React applications and REST APIs." period="Jun 2023 - Sep 2023" />
        <Exprience title="High School Diploma" description="Achieved a strong foundation in science and mathematics." period="Graduated Dec 2021" />
      </div>
    </div>
  </div>
</section>



    
        
        <section id="contact" className="mt-8 w-full">
        
  <h2 className="text-3xl py-8 text-center container font-semibold ">Contact Me</h2>
  <hr className ="w-1/2 bg-black mx-auto"/>
  <p className="text-black my-8 text-center">Feel free to reach out to me through any of the platforms below:</p>

  <div className=""><SocialIcons/></div>
</section>

       

      <footer className="bg-blue-600 text-white bg-gradient-to-r from-purple-900 via-blue-500 to-purple-900 py-4 mt-10">
        <div className="container mx-auto px-4 bold text-center">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Port;
