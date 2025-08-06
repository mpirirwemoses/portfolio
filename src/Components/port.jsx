import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import image56 from "../assets/images/pexels-ekoagalarov-14865728.jpg";
import Card from "./Card";
import Exprience from "./Exprience";
import ProjectCard from "./Project";
import { ChevronLeft, X, Star, ChevronRight, Sun, Moon, MessageCircle, Image as ImageIcon, Send } from 'lucide-react';
import { Mail, Linkedin, Github, Briefcase } from "lucide-react";
import image60 from "../assets/images/icons8-java-144.png";
import image61 from "../assets/images/icons8-javascript-144.png";
import image62 from "../assets/images/icons8-figma-96.png";
import image63 from "../assets/images/icons8-content-100.png";
import image64 from "../assets/images/icons8-node-js-144.png";
import image65 from "../assets/images/icons8-react-native-256.png";
import image66 from "../assets/images/DALL·E 2025-02-01 10.15.49 - A modern and visually stunning e-commerce website cover. The image should feature an elegant online shopping theme with a sleek laptop or smartphone d.webp";
import image67 from "../assets/images/developer_setup_grayscale.png";
import image68 from "../assets/images/StockCake-Futuristic Visionary Fashion_1725943062.jpg";
import RotatingNumber from "./Rotate";
import SocialIcons from "./Social";
import Navbar from "./Navbar";
const Port = () => {
    const location = useLocation();
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
    // GITHUB PROJECTS (dynamic fetch)
    const [githubProjects, setGithubProjects] = useState([]);
    const [loadingProjects, setLoadingProjects] = useState(true);
    const [errorProjects, setErrorProjects] = useState(null);

    useEffect(() => {
      setLoadingProjects(true);
      fetch('https://api.github.com/users/mpirirwemoses/repos?sort=updated&per_page=6')
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch GitHub projects');
          return res.json();
        })
        .then((data) => {
          setGithubProjects(data);
          setLoadingProjects(false);
        })
        .catch((err) => {
          setErrorProjects(err.message);
          setLoadingProjects(false);
        });
    }, []);

    useEffect(() => {
      if (location.hash) {
        const el = document.getElementById(location.hash.replace('#', ''));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);

    const contentProjects = [
      {
        id: 1,
        title: "How to Build a Portfolio Website",
        description: "A step-by-step guide to building a modern portfolio using React and Tailwind CSS.",
        url: "https://yourblog.com/portfolio-guide",
        type: "Article",
        image: image63,
      },
      {
        id: 2,
        title: "UI/UX Design Tips for Developers",
        description: "Essential UI/UX principles every developer should know.",
        url: "https://yourblog.com/uiux-tips",
        type: "Article",
        image: image62,
      },
      {
        id: 3,
        title: "My YouTube Channel",
        description: "Tutorials and tech content for aspiring developers.",
        url: "https://youtube.com/yourchannel",
        type: "Video",
        image: image63,
      },
    ];
    const [selectedTab, setSelectedTab] = useState("apps");
    const [screenshotModal, setScreenshotModal] = useState({ isOpen: false, project: null });
    const [selectedScreenshot, setSelectedScreenshot] = useState(null);
    const [loadingScreenshots, setLoadingScreenshots] = useState(false);

    // Organized screenshot images for projects - each project has its own screenshots
    const projectScreenshots = {
      // GitHub projects screenshots
      "portfolio": [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
      ],
      "ecommerce-app": [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
      ],
      "blog-platform": [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
      ],
      "task-manager": [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      "weather-app": [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
      ],
      "chat-application": [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
      ],
      // Content projects screenshots
      "portfolio-guide": [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
      ],
      "uiux-tips": [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
      ],
      "youtube-channel": [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
      ]
    };

    // Function to get screenshots for a specific project
    const getProjectScreenshots = (project) => {
      const projectKey = project.name || project.title;
      const normalizedKey = projectKey.toLowerCase().replace(/[^a-z0-9]/g, '-');
      
      // Try to find exact match first
      if (projectScreenshots[normalizedKey]) {
        return projectScreenshots[normalizedKey];
      }
      
      // Try to find partial match
      const matchingKey = Object.keys(projectScreenshots).find(key => 
        normalizedKey.includes(key) || key.includes(normalizedKey)
      );
      
      if (matchingKey) {
        return projectScreenshots[matchingKey];
      }
      
      // Fallback to default screenshots
      return [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
      ];
    };

    const handleScreenshotClick = (project) => {
      setLoadingScreenshots(true);
      setScreenshotModal({ isOpen: true, project });
      
      // Simulate loading time for better UX
      setTimeout(() => {
        setLoadingScreenshots(false);
      }, 500);
    };

    const closeScreenshotModal = () => {
      setScreenshotModal({ isOpen: false, project: null });
      setSelectedScreenshot(null);
    };

    const handleScreenshotPreview = (screenshot) => {
      setSelectedScreenshot(screenshot);
    };

    const closeScreenshotPreview = () => {
      setSelectedScreenshot(null);
    };

    // Modularized Projects Section
    const ProjectsSection = () => (
      <section id="projects" className="py-16">
        <h1 className="text-center text-black dark:text-white text-4xl font-extrabold mb-6 font-[Poppins]">
          My Recent Projects
        </h1>
        <hr className="bg-gray-900 w-1/4 h-1 rounded-full mb-10 mx-auto" />
        <div className="flex justify-center space-x-6 mb-8">
          <button
            className={`rounded-full px-8 py-3 w-[200px] text-lg font-semibold ${
              selectedTab === "apps"
                ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
                : "bg-gray-200 text-gray-700"
            } shadow-md transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(128,0,255,0.6)] hover:scale-105`}
            onClick={() => setSelectedTab("apps")}
          >
            Apps
          </button>
          <button
            className={`rounded-full px-8 py-3 w-[200px] text-lg font-semibold ${
              selectedTab === "content"
                ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
                : "bg-gray-200 text-gray-700"
            } shadow-md transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(128,0,255,0.6)] hover:scale-105`}
            onClick={() => setSelectedTab("content")}
          >
            Content
          </button>
        </div>
        <div className="container mx-auto grid lg:grid-cols-2 md:grid-cols-2 gap-8 px-6 mt-10">
          {selectedTab === "apps" ? (
            <>
              {loadingProjects && <p className="text-center text-lg text-gray-400 col-span-2">Loading projects...</p>}
              {errorProjects && <p className="text-center text-lg text-red-400 col-span-2">{errorProjects}</p>}
              {githubProjects && githubProjects.length > 0 && githubProjects.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center bg-purple-900 rounded-xl shadow-lg p-8 overflow-hidden hover:shadow-[0_0_20px_5px_rgba(128,0,255,0.8)] transition-shadow duration-300"
                >
                  <img src={image63} alt="Project" className="w-20 h-20 rounded-full mb-4 object-cover" />
                  <h2 className="absolute top-10 z-10 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 drop-shadow-lg font-[Poppins]">
                    {repo.name}
                  </h2>
                  <div className="flex flex-col items-center mt-16">
                    <p className="text-white text-lg mb-2 text-center">{repo.description}</p>
                    <div className="flex gap-4 mt-2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">{repo.language}</span>
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">★ {repo.stargazers_count}</span>
                    </div>
                    <div className="flex gap-4 mt-4 flex-wrap justify-center">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold hover:scale-105 transition">GitHub</a>
                      {repo.homepage && <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-bold hover:scale-105 transition">Live Demo</a>}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleScreenshotClick(repo)}
                        className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-white font-bold hover:shadow-lg transition flex items-center gap-2"
                      >
                        <ImageIcon className="w-4 h-4" />
                        Screenshots
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
          ) : (
            <>
              {contentProjects.map((content, index) => (
                <motion.div
                  key={content.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center bg-purple-900 rounded-xl shadow-lg p-8 overflow-hidden hover:shadow-[0_0_20px_5px_rgba(128,0,255,0.8)] transition-shadow duration-300"
                >
                  <img src={content.image} alt={content.title} className="w-20 h-20 rounded-full mb-4 object-cover" />
                  <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 drop-shadow-lg font-[Poppins] mb-2">
                    {content.title}
                  </h2>
                  <p className="text-white text-lg mb-2 text-center">{content.description}</p>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">{content.type}</span>
                  <div className="flex gap-4 flex-wrap justify-center">
                    <a href={content.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold hover:scale-105 transition">View</a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleScreenshotClick(content)}
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-white font-bold hover:shadow-lg transition flex items-center gap-2"
                    >
                      <ImageIcon className="w-4 h-4" />
                      Screenshots
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </div>

        {/* Screenshot Modal */}
        <AnimatePresence>
          {screenshotModal.isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeScreenshotModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {screenshotModal.project?.name || screenshotModal.project?.title}
                    </h3>
                    <p className="text-gray-600 mt-1">Project Screenshots</p>
                    {screenshotModal.project?.description && (
                      <p className="text-sm text-gray-500 mt-2 max-w-md">
                        {screenshotModal.project.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {screenshotModal.project?.language && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {screenshotModal.project.language}
                      </span>
                    )}
                    {screenshotModal.project?.stargazers_count && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {screenshotModal.project.stargazers_count}
                      </span>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={closeScreenshotModal}
                      className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-600" />
                    </motion.button>
                  </div>
                </div>
                
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
                  {loadingScreenshots ? (
                    <div className="flex items-center justify-center py-12">
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
                        <p className="text-gray-600 font-medium">Loading screenshots...</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {getProjectScreenshots(screenshotModal.project).length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {getProjectScreenshots(screenshotModal.project).map((screenshot, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                              <div className="relative overflow-hidden">
                                <motion.img
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.3 }}
                                  src={screenshot}
                                  alt={`${screenshotModal.project?.name || screenshotModal.project?.title} Screenshot ${index + 1}`}
                                  className="w-full h-64 object-cover cursor-pointer"
                                  onClick={() => handleScreenshotPreview(screenshot)}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Click to enlarge
                                </div>
                              </div>
                              <div className="p-4">
                                <p className="text-center text-sm text-gray-700 font-medium">
                                  Screenshot {index + 1}
                                </p>
                                <p className="text-center text-xs text-gray-500 mt-1">
                                  Click to view full size
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                            <ImageIcon className="w-12 h-12 text-gray-400" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-700 mb-2">No Screenshots Available</h4>
                          <p className="text-gray-500">Screenshots for this project will be added soon.</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
                
                {/* Modal Footer */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">
                      {getProjectScreenshots(screenshotModal.project).length} screenshot{getProjectScreenshots(screenshotModal.project).length !== 1 ? 's' : ''} available
                    </p>
                    <button
                      onClick={closeScreenshotModal}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Screenshot Preview Modal */}
        <AnimatePresence>
          {selectedScreenshot && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
              onClick={closeScreenshotPreview}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeScreenshotPreview}
                  className="absolute top-4 right-4 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
                <motion.img
                  src={selectedScreenshot}
                  alt="Screenshot Preview"
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    );

  // THEME STATE
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // HERO SECTION
  const Hero = () => (
    <section className={`relative flex flex-col items-center justify-center min-h-[60vh] py-16 bg-gradient-to-br from-purple-900 via-blue-800 to-pink-700 text-white transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      <div className="absolute top-4 right-4">
        <button
          aria-label="Toggle dark mode"
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
          onClick={() => setDarkMode((d) => !d)}
        >
          {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
        </button>
      </div>
      <img
        src={image67}
        alt="Moses Mpirirwe profile"
        className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
      />
      <h1 className="text-4xl md:text-6xl font-extrabold mb-2 drop-shadow-lg text-center">Moses Mpirirwe</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-purple-200">Award-Winning Full Stack Developer</h2>
      <p className="max-w-2xl text-center text-lg md:text-xl text-white/90 mb-6">
        Building seamless, beautiful, and scalable digital experiences for Africa and beyond. <br />
        <span className="text-pink-200 font-bold">Let's create the future together.</span>
      </p>
      <div className="flex gap-4 justify-center">
        <a href="#projects" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition">See My Work</a>
        <a href="#contact" className="px-6 py-3 rounded-full border border-white text-white font-bold hover:bg-white/10 transition">Contact Me</a>
      </div>
    </section>
  );

  // GITHUB PROJECTS (placeholder for now)
  // Will fetch and display GitHub projects dynamically in the next step
  // const [githubProjects, setGithubProjects] = useState([]);
  // useEffect(() => {
  //   // Placeholder: will implement GitHub API fetch in next step
  // }, []);

  const cards = 6; // Number of testimonial cards
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards - 1 : prevIndex - 1
    );
  };

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
    setFormData({ name: '', email: '', message: '' });
    // Add API submission logic here if needed
  };

    return (
      <div className={darkMode ? "bg-gray-950 min-h-screen font-sans" : "bg-purple-900 min-h-screen font-sans"}>
        <Navbar />
  
        <section id="about" className="container mx-auto px-4 py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-950 rounded-3xl shadow-2xl border border-purple-800/30 mt-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
                About Me
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">Passionate developer creating innovative digital solutions</p>
            </motion.div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Title */}
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-300 via-blue-300 to-pink-300 bg-clip-text text-transparent">
                    Web Developer +
                  </h3>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-300 via-blue-300 to-pink-300 bg-clip-text text-transparent">
                    Software Developer
                  </h3>
                </div>

                {/* Description */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed pl-6">
                    Hello! <strong className="text-white font-semibold">I'm Moses Mpirirwe, a passionate software developer</strong> specializing in React and full-stack development. With a keen eye for detail and a drive for excellence, I build seamless and user-friendly applications that make a difference.
                  </p>
                </div>

                {/* Social Links */}
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.a 
                    href="mailto:john.doe@example.com" 
                    className="flex items-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">Email</span>
                  </motion.a>
                  
                  <motion.a 
                    href="https://linkedin.com/in/johndoe" 
                    className="flex items-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">LinkedIn</span>
                  </motion.a>
                  
                  <motion.a 
                    href="https://github.com/johndoe" 
                    className="flex items-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">GitHub</span>
                  </motion.a>
                   
                  
                </motion.div>

                {/* Download CV Button */}
                <motion.button 
                  className="mt-6 rounded-full px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.button>
              </motion.div>

              {/* Image Gallery */}
              <motion.div 
                className="relative w-full h-[400px] lg:h-[500px] flex justify-center items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.img
                  className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-purple-500/20"
                  src={image68}
                  alt="Profile"
                  initial={{ rotate: 10, scale: 0.8 }}
                  animate={{ rotate: 10, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ rotate: 15, scale: 1.05, zIndex: 10 }}
                />
                <motion.img
                  className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-blue-500/20"
                  src={image56}
                  alt="Profile"
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: -10, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ rotate: -15, scale: 1.05, zIndex: 10 }}
                />
                <motion.img
                  className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-pink-500/20"
                  src={image67}
                  alt="Profile"
                  initial={{ rotate: 0, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ rotate: 5, scale: 1.05, zIndex: 10 }}
                />
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-purple-800/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-800/30"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <RotatingNumber finalNumber={25}/>+
                </h2>
                <span className="text-lg text-gray-300">Projects</span>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-800/30"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <RotatingNumber finalNumber={200}/>+
                </h2>
                <span className="text-lg text-gray-300">Happy Clients</span>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-900/50 to-purple-900/50 border border-pink-800/30"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <RotatingNumber finalNumber={5}/>+
                </h2>
                <span className="text-lg text-gray-300">Years of Experience</span>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-900/50 to-blue-900/50 border border-green-800/30"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <RotatingNumber finalNumber={15}/>+
                </h2>
                <span className="text-lg text-gray-300">Certifications</span>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section id="services" className="container mx-auto px-4 py-16 bg-purple-900/50 rounded-3xl shadow-2xl border border-purple-800/30 mt-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
              <p className="text-xl text-white max-w-2xl mx-auto">Comprehensive solutions tailored to your digital needs</p>
              <div className="w-24 h-1 bg-purple-600 mx-auto mt-6 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {/* Web Development */}
              <motion.div 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:p-6 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold">Web Development</h3>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center self-start sm:self-auto">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-blue-100 text-base sm:text-lg">Building responsive and high-quality websites with modern technologies</p>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">2 years experience</span>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          className={`w-4 h-4 ${
                            index < ratings[0].totalStars ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-2"></div>
                      React & Next.js Development
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      Responsive Design
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Performance Optimization
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Creation */}
              <motion.div 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:p-6 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold">Content Creation</h3>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center self-start sm:self-auto">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-green-100 text-base sm:text-lg">Producing engaging and high-quality content for various platforms</p>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">2 years experience</span>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          className={`w-4 h-4 ${
                            index < ratings[1].totalStars ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-2"></div>
                      Blog Writing & SEO
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                      Social Media Content
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                      Video Scripts
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* UX/UI Design */}
              <motion.div 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:p-6 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold">UX/UI Design</h3>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center self-start sm:self-auto">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-pink-100 text-base sm:text-lg">Creating intuitive and user-friendly interfaces for better user experiences</p>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">2 years experience</span>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          className={`w-4 h-4 ${
                            index < ratings[2].totalStars ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                      User Interface Design
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div>
                      User Experience Research
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-fuchsia-500 rounded-full mr-2"></div>
                      Prototyping & Wireframing
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* SEO Expert */}
              <motion.div 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:p-6 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold">SEO Expert</h3>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center self-start sm:self-auto">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-orange-100 text-base sm:text-lg">Optimizing websites to rank higher on search engines and increase visibility</p>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">2 years experience</span>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          className={`w-4 h-4 ${
                            index < ratings[0].totalStars ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                      Keyword Research & Analysis
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      On-Page SEO Optimization
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                      Technical SEO Audits
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
  

      {/* MODULARIZED PROJECTS SECTION */}
      <ProjectsSection />
             <div className="skills-section py-12">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-center text-black text-3xl font-extrabold mb-6">My Skills</h2>
    <hr className="mb-10 mx-auto w-1/3 bg-gray-100"/>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
      {/* React */}
      <div className="skill-item text-center">
        <div className="relative w-20 h-20 mx-auto">
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-300"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-blue-500"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 226.2" }}
              animate={{ strokeDasharray: "203.6 226.2" }}
              transition={{ duration: 2, delay: 0.1 }}
              style={{ strokeDasharray: "0 226.2" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={image65} alt="react" className="w-12 h-12 object-cover rounded-full"/>
          </div>
        </div>
        <p className="mt-2 text-xl font-semibold text-white">React</p>
        <p className="text-blue-400 font-bold">90%</p>
      </div>

      {/* JavaScript */}
      <div className="skill-item text-center">
        <div className="relative w-20 h-20 mx-auto">
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-300"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-yellow-500"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 226.2" }}
              animate={{ strokeDasharray: "214.9 226.2" }}
              transition={{ duration: 2, delay: 0.2 }}
              style={{ strokeDasharray: "0 226.2" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={image61} alt="javascript" className="w-12 h-12 object-cover rounded-full"/>
          </div>
        </div>
        <p className="mt-2 text-xl font-semibold text-white">JavaScript</p>
        <p className="text-yellow-400 font-bold">95%</p>
      </div>

      {/* Java */}
      <div className="skill-item text-center">
        <div className="relative w-20 h-20 mx-auto">
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-300"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-orange-500"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 226.2" }}
              animate={{ strokeDasharray: "192.3 226.2" }}
              transition={{ duration: 2, delay: 0.3 }}
              style={{ strokeDasharray: "0 226.2" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={image60} alt="java" className="w-12 h-12 object-cover rounded-full"/>
          </div>
        </div>
        <p className="mt-2 text-xl font-semibold text-white">Java</p>
        <p className="text-orange-400 font-bold">85%</p>
      </div>

      {/* Figma */}
      <div className="skill-item text-center">
        <div className="relative w-20 h-20 mx-auto">
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-300"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-purple-500"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 226.2" }}
              animate={{ strokeDasharray: "181.0 226.2" }}
              transition={{ duration: 2, delay: 0.4 }}
              style={{ strokeDasharray: "0 226.2" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={image62} alt="figma" className="w-12 h-12 object-cover rounded-full"/>
          </div>
        </div>
        <p className="mt-2 text-xl font-semibold text-white">Figma</p>
        <p className="text-purple-400 font-bold">80%</p>
      </div>

      {/* Git */}
      <div className="skill-item text-center">
        <div className="relative w-20 h-20 mx-auto">
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-300"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-red-500"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 226.2" }}
              animate={{ strokeDasharray: "214.9 226.2" }}
              transition={{ duration: 2, delay: 0.5 }}
              style={{ strokeDasharray: "0 226.2" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={image65} alt="git" className="w-12 h-12 object-cover rounded-full"/>
          </div>
        </div>
        <p className="mt-2 text-xl font-semibold text-white">Git</p>
        <p className="text-red-400 font-bold">95%</p>
      </div>

      {/* Node */}
      <div className="skill-item text-center">
        <div className="relative w-20 h-20 mx-auto">
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-300"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-green-500"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 226.2" }}
              animate={{ strokeDasharray: "203.6 226.2" }}
              transition={{ duration: 2, delay: 0.6 }}
              style={{ strokeDasharray: "0 226.2" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={image64} alt="node" className="w-12 h-12 object-cover rounded-full"/>
          </div>
        </div>
        <p className="mt-2 text-xl font-semibold text-white">Node</p>
        <p className="text-green-400 font-bold">90%</p>
      </div>
    </div>
  </div>
</div>
<section className= "mt-4 ">


<div className="max-w-6xl mx-auto pb-16 px-4">
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
          The software is live and functioning smoothly, and we couldn't be happier with the 
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
          The software is live and functioning smoothly, and we couldn't be happier with the 
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
          The software is live and functioning smoothly, and we couldn't be happier with the 
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
          The software is live and functioning smoothly, and we couldn't be happier with the 
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
          The software is live and functioning smoothly, and we couldn't be happier with the 
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
<section id="experience" className="container mx-auto px-4 py-16 bg-gradient-to-br from-purple-900 to-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Experience</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">My journey in technology and education</p>
      <div className="w-24 h-1 bg-purple-600 mx-auto mt-6 rounded-full"></div>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Experience Section */}
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Professional Experience</h3>
          <p className="text-gray-600">My career journey in software development</p>
        </div>
        
        <div className="space-y-6">
          <motion.div 
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-bold">Software Engineer</h4>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-blue-100 text-sm">Oct 2023 - Present</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">Contributed to full-stack applications for startups and enterprises, focusing on scalable solutions and modern technologies.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">React</span>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Node.js</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">MongoDB</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-bold">Freelance Web Developer</h4>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-green-100 text-sm">Jun 2023 - Sep 2023</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">Built e-commerce websites and optimized them for performance, focusing on user experience and conversion rates.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">E-commerce</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Performance</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">SEO</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-bold">Frontend Developer Intern</h4>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-purple-100 text-sm">Jan 2023 - May 2023</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">Collaborated with designers to create interactive UI components and improve user experience across multiple projects.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">UI/UX</span>
                <span className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full">Components</span>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">Design</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-bold">Tech Blogger</h4>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-orange-100 text-sm">Dec 2023 - Present</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">Created articles on web development best practices and tutorials, sharing knowledge with the developer community.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Content</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Tutorials</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Best Practices</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Education Section */}
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Education</h3>
          <p className="text-gray-600">My academic journey and certifications</p>
        </div>
        
        <div className="space-y-6">
          <motion.div 
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-bold">Bachelor of Software Engineering</h4>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>
              <p className="text-indigo-100 text-sm">Jan 2024 - Present</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">Studying core software engineering concepts at Makerere University, focusing on modern development practices.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">Software Engineering</span>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Computer Science</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Makerere University</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-bold">React and Full-Stack Development</h4>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-teal-100 text-sm">Jun 2023 - Sep 2023</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">Mastered building React applications and REST APIs, gaining expertise in modern web development stack.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">React</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Full-Stack</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">REST APIs</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-bold">Data Structures and Algorithms</h4>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-yellow-100 text-sm">Jan 2023 - May 2023</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">Gained a deep understanding of DSA in an intensive training program, improving problem-solving skills.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">DSA</span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Problem Solving</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Algorithms</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-bold">High School Diploma</h4>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-pink-100 text-sm">Graduated Dec 2021</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">Achieved a strong foundation in science and mathematics, preparing for a career in technology.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full">Science</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Mathematics</span>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Foundation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
</section>



    
        
        <section id="contact" className="container  mx-auto px-4 py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-950 rounded-3xl shadow-2xl border border-purple-800/30 mt-8">
  {/* Header */}
  <motion.div 
    className="text-center mb-12"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      Let's <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-pink-300 bg-clip-text text-transparent">Connect</span>
    </h2>
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
      Ready to bring your ideas to life? I'm here to help you create something amazing.
    </p>
    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mt-6"></div>
  </motion.div>

  {/* Contact Methods Grid */}
  <motion.div 
    className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    {/* Email */}
    <motion.a 
      href="mailto:your-email@example.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 flex flex-col items-center text-center"
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300">
        <Mail className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Email</h3>
      <p className="text-blue-300 group-hover:text-blue-200 transition-colors">your-email@example.com</p>
    </motion.a>

    {/* WhatsApp */}
    <motion.a 
      href="https://wa.me/your-number" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 flex flex-col items-center text-center"
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
      <p className="text-green-300 group-hover:text-green-200 transition-colors">Message me directly</p>
    </motion.a>

  </motion.div>

  {/* Contact Form */}
  <motion.div 
    className="max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-sm">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Send a <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">Message</span>
        </h3>
        <p className="text-gray-300 text-lg">I'll get back to you within 24 hours</p>
      </div>

      {success && (
        <motion.div 
          className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 text-green-200 text-center font-semibold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          ✨ Thank you! Your message has been sent successfully.
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <input 
              type="text" 
              id="name" 
              value={formData.name} 
              onChange={e => setFormData({ ...formData, name: e.target.value })} 
              className="w-full px-6 py-4 text-white bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-transparent peer backdrop-blur-sm transition-all duration-300" 
              placeholder=" " 
              required 
            />
            <label 
              htmlFor="name" 
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gradient-to-br from-gray-900 via-purple-900 to-gray-950 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 left-6"
            >
              Full Name
            </label>
          </motion.div>

          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <input 
              type="email" 
              id="email" 
              value={formData.email} 
              onChange={e => setFormData({ ...formData, email: e.target.value })} 
              className="w-full px-6 py-4 text-white bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-transparent peer backdrop-blur-sm transition-all duration-300" 
              placeholder=" " 
              required 
            />
            <label 
              htmlFor="email" 
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gradient-to-br from-gray-900 via-purple-900 to-gray-950 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 left-6"
            >
              Email Address
            </label>
          </motion.div>
        </div>

        <motion.div 
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <textarea 
            id="message" 
            value={formData.message} 
            onChange={e => setFormData({ ...formData, message: e.target.value })} 
            rows={6} 
            className="w-full px-6 py-4 text-white bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-transparent peer backdrop-blur-sm transition-all duration-300 resize-none" 
            placeholder=" " 
            required 
          />
          <label 
            htmlFor="message" 
            className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gradient-to-br from-gray-900 via-purple-900 to-gray-950 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 left-6"
          >
            Your Message
          </label>
        </motion.div>

        <motion.button 
          type="submit" 
          className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white py-4 px-8 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Send className="w-5 h-5 group-hover:animate-pulse" />
          Send Message
        </motion.button>
      </form>
    </div>
  </motion.div>

  {/* Social Icons */}
  <motion.div 
    className="mt-12 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
    <SocialIcons />
  </motion.div>
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
