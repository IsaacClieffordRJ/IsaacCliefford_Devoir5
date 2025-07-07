import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Palette, Smartphone, Download } from 'lucide-react';
import './App.css';
import dashboardImg from "./Dashboard.png";



const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Application E-commerce",
      description: "Plateforme de commerce électronique moderne avec React et Node.js",
      tech: ["React", "Node.js", "SQLITE", "Stripe"],
      image: "",
      link: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Interface d'analytics avec visualisations de données interactives",
      tech: ["React", "D3.js", "Chart.js", "API REST"],
      image: "",
      link: "#"
    },
    {
      title: "App Mobile",
      description: "Application mobile cross-platform avec React Native",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      image: "",
      link: "#"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "CSS/SCSS", level: 88 },
    { name: "SQLITE", level: 70 }
  ];

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : 'transparent'}`}>
        <div className="container">
          <div className="navbar-content">
            <div className="navbar-logo">
              Portfolio
            </div>
            <div className="navbar-menu desktop">
              {['Accueil', 'À propos', 'Projets', 'Compétences', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace('à ', '').replace('é', 'e'))}
                  className="navbar-item"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="hero-section">
        <div className="hero-background">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-card">
              <h1 className="hero-title">
                Développeur Full Stack
              </h1>
              <p className="hero-subtitle">
               Ingénieur Logiciel axé sur la création de solutions évolutives et performantes.
              </p>
              <div className="hero-buttons desktop">
                <button 
                  onClick={() => scrollToSection('projets')}
                  className="btn-primary"
                >
                  Voir mes projets
                </button>
                <button className="btn-secondary">
                  <Download size={20} />
                  Télécharger CV
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="section">
        <div className="container">
          <div className="about-grid desktop">
            <div className="about-card">
              <h2 className="about-title">
                À propos de moi
              </h2>
              <p className="about-text">
              
              Je suis Isaac Cliefford , un développeur curieux et rigoureux, avec plus de 2 ans d’expérience 
              dans le développement d’applications web et mobiles. J’aime relever les défis techniques
               et apporter des solutions simples qui répondent aux besoins réels des utilisateurs.
              </p>
              <p className="about-text">
                Spécialisé dans l'écosystème JavaScript moderne, je maîtrise les dernières technologies 
                pour créer des expériences utilisateur exceptionnelles.
              </p>
              <div className="about-contact">
                <div className="contact-item">
                  <Mail size={20} />pm run dev
                  <span>clieffordisaac@gmail.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <span>+509 39112955</span>
                </div>
              </div>
            </div>
            <div className="about-card">
              <div className="services-grid">
                <div className="service-item">
                  <div className="service-icon web">
                    <Code size={32} />
                  </div>
                  <h3 className="service-title">Développement Web</h3>
                  <p className="service-description">Applications web modernes et responsives</p>
                </div>
                <div className="service-item">
                  <div className="service-icon mobile">
                    <Smartphone size={32} />
                  </div>
                  <h3 className="service-title">Apps Mobile</h3>
                  <p className="service-description">Applications mobiles cross-platform</p>
                </div>
                <div className="service-item">
                  <div className="service-icon design">
                    <Palette size={32} />
                  </div>
                  <h3 className="service-title">UI/UX Design</h3>
                  <p className="service-description">Interfaces utilisateur intuitives</p>
                </div>
                <div className="service-item">
                  <div className="service-icon backend">
                    <ExternalLink size={32} />
                  </div>
                  <h3 className="service-title">API & Backend</h3>
                  <p className="service-description">Architectures robustes et scalables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

{/* Projects Section */}
<section id="projets" className="section">
  <div className="container">
    <h2 className="section-title">Mes Projets</h2>
    <div className="projects-grid large">

      {/* 🔹 Dashboard project */}
      <div className="project-card">
        <div className="project-image-container">
          <img 
            src="/src/Dashboard.png"
            alt="Dashboard"
            className="project-image"
          />
          <div className="project-overlay">
            <div className="project-overlay-content">
              <button className="project-link-btn">
                <ExternalLink size={16} />
                Voir le projet
              </button>
            </div>
          </div>
        </div>
        <div className="project-content">
          <h3 className="project-title">Dashboard</h3>
          <p className="project-description">
            A modern dashboard interface with statistics and user management.
          </p>
          <div className="project-tech">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Tailwind</span>
            <span className="tech-tag">Chart.js</span>
          </div>
        </div>
      </div>

      {/* 🔹 App Mobile project */}
      <div className="project-card">
        <div className="project-image-container">
          <img 
            src="/src/appmobile.png"
            alt="App Mobile"
            className="project-image"
          />
          <div className="project-overlay">
            <div className="project-overlay-content">
              <button className="project-link-btn">
                <ExternalLink size={16} />
                Voir le projet
              </button>
            </div>
          </div>
        </div>
        <div className="project-content">
          <h3 className="project-title">App Mobile</h3>
          <p className="project-description">
            A cross-platform mobile app built with modern UI and seamless UX.
          </p>
          <div className="project-tech">
            <span className="tech-tag">React Native</span>
            <span className="tech-tag">Expo</span>
            <span className="tech-tag">Firebase</span>
          </div>
        </div>
      </div>

      {/* 🔹 Ecommerce project */}
      <div className="project-card">
        <div className="project-image-container">
          <img 
            src="/src/ecommerce.jpeg"
            alt="Ecommerce"
            className="project-image"
          />
          <div className="project-overlay">
            <div className="project-overlay-content">
              <button className="project-link-btn">
                <ExternalLink size={16} />
                Voir le projet
              </button>
            </div>
          </div>
        </div>
        <div className="project-content">
          <h3 className="project-title">Ecommerce</h3>
          <p className="project-description">
            A full-featured ecommerce site with product management and checkout.
          </p>
          <div className="project-tech">
            <span className="tech-tag">Next.js</span>
            <span className="tech-tag">Stripe</span>
            <span className="tech-tag">SQLITE</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Skills Section */}
      <section id="competences" className="section">
        <div className="container">
          <h2 className="section-title">
            Compétences
          </h2>
          <div className="skills-container">
            <div className="skills-card">
              <div className="skills-grid desktop">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">
            Contactez-moi
          </h2>
          <div className="contact-container">
            <div className="contact-card">
              <div className="contact-grid desktop">
                <div>
                  <h3 className="contact-info-title">Travaillons ensemble</h3>
                  <p className="contact-info-text">
                    Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos besoins.
                  </p>
                  <div className="contact-info-list">
                    <div className="contact-info-item">
                      <div className="contact-icon email">
                        <Mail size={20} />
                      </div>
                      <div className="contact-info-details">
                        <div className="contact-info-label">Email</div>
                        <div className="contact-info-value">clieffordisaac@gmail.com</div>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="contact-icon phone">
                        <Phone size={20} />
                      </div>
                      <div className="contact-info-details">
                        <div className="contact-info-label">Téléphone</div>
                        <div className="contact-info-value">+509 39112955</div>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="contact-icon location">
                        <MapPin size={20} />
                      </div>
                      <div className="contact-info-details">
                        <div className="contact-info-label">Localisation</div>
                        <div className="contact-info-value">Port-au-prince, Haiti</div>
                      </div>
                    </div>
                  </div>
                  <div className="social-links">
                    <button className="social-link github">
                      <Github size={20} />
                    </button>
                    <button className="social-link linkedin">
                      <Linkedin size={20} />
                    </button>
                  </div>
                </div>
                <div className="contact-form">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Votre nom"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Votre email"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Votre message"
                      rows={6}
                      className="form-input form-textarea"
                    ></textarea>
                  </div>
                  <button 
                    type="button"
                    className="form-submit"
                  >
                    Envoyer le message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>
              © 2025 Portfolio. Tous droits réservés. 
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

