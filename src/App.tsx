/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Instagram, Linkedin, Mail, Menu, X, ArrowLeft, Music, Heart, Sparkles, Users, Trophy, Star, Palette, Layers, Globe } from "lucide-react";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { name: "About", href: "/" },
  { name: "Tech", href: "/tech" },
  { name: "Dance", href: "/dance" },
  { name: "Contact", href: "/contact" },
];

const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Business Systems",
    institution: "Rajagiri School of Engineering and Technology",
    link: "https://www.rajagiritech.ac.in/",
    logo: "/rset.jpg",
    period: "2024 — 2028",
    description:
      "Currently pursuing with a CGPA of 9.2. Coursework includes Data Structures, DBMS, Data Analysis, Computational Statistics, and Automata Theory."
  },
  {
    degree: "Higher Secondary Education (PCM + CS)",
    institution: "Chavara Darsan CMI Public School",
    link: "https://chavaradarsan.com/",
    logo: "/chavara.jpg",
    period: "2023 — 2024",
    description: "Completed with a percentage of 95.4%."
  }
];
const EXPERIENCE = [
  {
    role: "Engineering Intern (Upcoming)",
    company: "Kochi Metro Rail Limited",
    link: "https://kochimetro.org/",
    logo: "/kmrl.png",
    period: "June 2026",
    description: "Will gain exposure to real-world engineering systems and professional work environments to understand practical applications of technology."
  },
  {
    role: "Interviewer",
    company: "The Page (RSET Campus Newspaper)",
    link: "https://thepagerset.in/",
    logo: "/thepage.png",
    period: "Jan 2025 — Present",
    description: "Conducted and published interviews for campus media platforms. Collaborating with media teams for scripting and content presentation."
  },
  {
    role: "Industry Exposure",
    company: "Red and Blue Cars WLL, Bahrain",
    link: "https://redandbluecars.com/",
    logo: "/rb.jpg",
    period: "Dec 2024 — Jan 2025",
    description: "Observed digital marketing and promotional workflows. Learned content planning, branding strategies, and business operations."
  }
];

const DANCE_JOURNEY = [
  {
    id: "classical",
    title: "Bharatanatyam",
    period: "Foundation & Growth",
    description: "Structured elegance and discipline. Years of training led to my Arangetram, marking a milestone in storytelling through movement.",
    icon: <Sparkles size={24} className="text-pink-600" />,
    image: "/dance3.png"
  },
  {
    id: "contemporary",
    title: "Contemporary Discovery",
    period: "Finding Fluidity",
    description: "Exploring emotional freedom beyond structure. A phase of experimenting with freestyle and discovering personal expression.",
    icon: <Heart size={24} className="text-pink-600" />,
    image: "/dance4.jpeg"
  },
  {
    id: "college",
    title: "College events",
    period: "Stage & Collaboration",
    description: "Consistently involved in choreographies and spot performances, exploring stage presence and creative collaboration.",
    icon: <Users size={24} className="text-pink-600" />,
    image: "/dance5.jpeg"
  },
  {
    id: "ksquad",
    title: "Ksquad Training",
    period: "Ongoing Refinement",
    description: "Serious training in contemporary dance. Refining technique, versatility, and pushing limits in a professional environment.",
    icon: <Trophy size={24} className="text-pink-600" />,
    image: "/dance6.jpeg"
  }
];

const GALLERY_IMAGES = [
  { src: "/dance2.jpeg", alt: "College event", span: "col-span-1" },
  { src: "/dance8.jpeg", alt: "Thematic Dance", span: "col-span-2" },
  { src: "/dance3.png", alt: "Freestyle", span: "col-span-1" },
  { src: "/dance6.jpeg", alt: "Arangetram Moment", span: "col-span-1" },
  { src: "/dance4.jpeg", alt: "Contemporary", span: "col-span-1" },
  { src: "/dance1.jpeg", alt: "Spot Choreo", span: "col-span-2" },
  { src: "/dance5.jpeg", alt: "Ksquad", span: "col-span-1" },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-bg-light text-slate-900 selection:bg-indigo-600/20 selection:text-indigo-600">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-bg-light/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-10 h-10 vibrant-gradient rounded-xl flex items-center justify-center text-white font-bold text-xl"
            >
              G
            </motion.div>
            <span className="text-xl font-black tracking-tight text-slate-800 uppercase">Gatha Sreesan.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.href}
                  className={`text-sm font-bold uppercase tracking-widest transition-all px-4 py-2 rounded-xl ${
                    location.pathname === link.href 
                      ? "text-pink-600 bg-pink-50/80" 
                      : "text-slate-500 hover:text-pink-600 hover:bg-pink-50/30"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg-light pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`text-3xl font-black transition-colors ${location.pathname === link.href ? 'text-vibrant' : 'hover:text-vibrant'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-20">
        {children}
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 pt-16 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 vibrant-gradient rounded-lg flex items-center justify-center text-white font-bold text-sm">G</div>
              <span className="text-lg font-black tracking-tight text-slate-800 uppercase">Gatha Sreesan.</span>
            </div>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
              <a href="https://www.linkedin.com/in/gathasreesan" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-pink-50/50 text-slate-400 hover:text-pink-600 hover:bg-pink-50 transition-colors border border-pink-100/20">LINKEDIN</a>
              <a href="https://www.instagram.com/the.gathaa?igsh=MWd3OGw5YTlkdHdobA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-pink-50/50 text-slate-400 hover:text-pink-600 hover:bg-pink-50 transition-colors border border-pink-100/20">INSTAGRAM</a>
              <a href="mailto:gathasreesan@gmail.com" className="px-3 py-1.5 rounded-lg bg-pink-50/50 text-slate-400 hover:text-pink-600 hover:bg-pink-50 transition-colors border border-pink-100/20">EMAIL</a>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              © {new Date().getFullYear()} GATHA SREESAN
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <section id="hero" className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid md:grid-cols-12 gap-12 items-center">
        {/* Left: Hero Content */}
        <div className="col-span-12 md:col-span-6 flex flex-col gap-10">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Engineer × Contemporary Dancer
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-black leading-[1.05] tracking-tight text-slate-900"
            >
              Gatha <span className="text-pink-600">Sreesan</span>.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-600 text-xl leading-relaxed max-w-md"
            >
              Engineering student by day, contemporary dancer by night. I blend technical logic with the fluid motion of contemporary dance.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <a href="https://www.instagram.com/the.gathaa?igsh=MWd3OGw5YTlkdHdobA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-4 bg-pink-50/30 shadow-sm border border-pink-100/30 rounded-2xl hover:border-pink-600 hover:text-pink-600 transition-all">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/gathasreesan" target="_blank" rel="noopener noreferrer" className="p-4 bg-pink-50/30 shadow-sm border border-pink-100/30 rounded-2xl hover:border-pink-600 hover:text-pink-600 transition-all">
              <Linkedin size={24} />
            </a>
            <a href="mailto:gathasreesan@gmail.com" className="p-4 bg-pink-50/30 shadow-sm border border-pink-100/30 rounded-2xl hover:border-pink-600 hover:text-pink-600 transition-all">
              <Mail size={24} />
            </a>
          </motion.div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Skills</h3>
            <div className="flex flex-wrap gap-2 text-center items-center justify-center">
              {["Python & C++", "Robotics", "System Design", "Contemporary", "Choreography", "Improvisation"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-pink-50/30 rounded-xl shadow-sm border border-pink-100/50 font-semibold text-sm text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="col-span-12 md:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-100 border-8 border-white bg-slate-200"
          >
            <img
              src="/gatha.jpeg"
              alt="Portrait of Gatha Sreesan"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Next Section CTA */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-slate-100">
        <Link to="/tech" className="group block text-center p-12 rounded-[3.5rem] bg-pink-50/20 hover:bg-pink-50 transition-colors border border-pink-100/30">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 block"
          >
           
          </motion.span>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 group-hover:text-vibrant transition-colors flex items-center justify-center gap-6">
            Technical Logic <ArrowUpRight size={64} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform" />
          </h2>
        </Link>
      </section>
    </motion.div>
  );
}

function TechPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-6 py-12 md:py-24"
    >
      <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50/50 border border-pink-100/30 text-pink-600 font-black text-sm uppercase tracking-widest rounded-xl mb-12 hover:bg-pink-50 transition-all w-fit">
        <ArrowLeft size={18} />
        Back to Home
      </Link>

      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
          >
            Engineer in Training
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-black leading-tight text-slate-900 mb-8">
            Technical <span className="text-pink-600">Logic</span>.
          </h1>
          <p className="text-slate-600 text-xl leading-relaxed mb-12">
            I am driven by the challenge of simplifying complex systems into efficient and logical designs. My academic journey focuses on building strong technical fundamentals and applying them through structured problem-solving and real-world applications.
          </p>

     <div className="p-8 bg-pink-50/30 rounded-[2.5rem] border border-pink-100/50 shadow-sm">
  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
    Core Competencies
  </h3>

  <div className="grid grid-cols-2 gap-y-6">

    <div>
      <h4 className="font-bold text-lg mb-1 text-slate-800">Programming</h4>
      <p className="text-sm text-slate-500">
        C, C++, Python, Java (basic)
      </p>
    </div>

    <div>
      <h4 className="font-bold text-lg mb-1 text-slate-800">Core CS</h4>
      <p className="text-sm text-slate-500">
        Data Structures, DBMS, FLAT, Statistics
      </p>
    </div>

    <div>
      <h4 className="font-bold text-lg mb-1 text-slate-800">Web Development</h4>
      <p className="text-sm text-slate-500">
        HTML, CSS, JavaScript (learning)
      </p>
    </div>

    <div>
      <h4 className="font-bold text-lg mb-1 text-slate-800">Communication</h4>
      <p className="text-sm text-slate-500">
        Interviewing, Public Speaking, Content Creation
      </p>
    </div>

    </div>
  </div>
</div>

        <div className="lg:col-span-7 space-y-16">
          <section>
            <h2 className="text-3xl font-black text-slate-800 mb-8 border-b-2 border-indigo-600 inline-block pb-2">Education</h2>
            <div className="space-y-8">
              {EDUCATION.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-pink-50/20 p-8 rounded-3xl border border-pink-100/30 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-4">
                      <a 
                        href={edu.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                      >
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 p-1 flex-shrink-0 overflow-hidden">
                          <img 
                            src={edu.logo} 
                            alt={edu.institution} 
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                          <p className="text-indigo-600 font-bold hover:underline">{edu.institution}</p>
                        </div>
                      </a>
                    <span className="text-xs font-black px-3 py-1 bg-slate-100 text-slate-500 rounded-full">{edu.period}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed italic">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black text-slate-800 mb-8 border-b-2 border-indigo-600 inline-block pb-2">Experience</h2>
            <div className="space-y-8">
              {EXPERIENCE.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-pink-50/20 p-8 rounded-3xl border border-pink-100/30 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                    >
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 p-1 flex-shrink-0 overflow-hidden">
                        <img 
                          src={exp.logo} 
                          alt={exp.company} 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                        <p className="text-indigo-600 font-bold hover:underline">{exp.company}</p>
                      </div>
                    </a>
                    <span className="text-xs font-black px-3 py-1 bg-slate-100 text-slate-500 rounded-full">{exp.period}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Next Section CTA */}
      <section className="max-w-7xl mx-auto px-6 py-32 mt-24 border-t border-slate-100">
        <Link to="/dance" className="group block text-center p-12 rounded-[3.5rem] hover:bg-pink-50 transition-colors">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 block"
          >
        
          </motion.span>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 group-hover:text-pink-600 transition-colors flex items-center justify-center gap-6">
            Contemporary Soul <ArrowUpRight size={64} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform" />
          </h2>
        </Link>
      </section>
    </motion.div>
  );
}

function DancePage() {
  const [pulse, setPulse] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const sectionRef = React.useRef<HTMLElement>(null);

  const triggerPulse = () => {
    setPulse(true);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => setPulse(false), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50/50 border border-pink-100/30 text-pink-600 font-black text-sm uppercase tracking-widest rounded-xl mb-12 hover:bg-pink-50 transition-all w-fit">
        <ArrowLeft size={18} />
        Back to Home
      </Link>

      {/* SECTION 1 — HERO */}
      <section className="py-20 md:py-32 grid md:grid-cols-2 gap-16 lg:gap-32 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-20 relative"
        >
          <div className="inline-block px-4 py-1 bg-pink-50 text-pink-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Artist Spotlight
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight md:leading-[0.85] text-slate-900 mb-8 tracking-tighter">
            Dance <br/><span className="text-pink-600">Journey</span>.
          </h1>
          <p className="text-slate-600 text-2xl font-medium leading-relaxed max-w-md">
            Blending classical roots with contemporary expression
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex gap-4"
          >
            <div className="w-1.5 h-12 bg-vibrant rounded-full" />
            <p className="text-slate-500 italic max-w-xs">
              "Dance is where I find the balance between structured precision and absolute freedom."
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-square md:aspect-[4/5] rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl z-10"
        >
          <img
            src="/dance3.png"
            alt="Hero Dance Image"
            className="w-full h-full object-cover md:object-center object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </section>

      {/* SECTION 2 — JOURNEY TIMELINE (Vertical Version) */}
      <section className="py-32 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">The Growth Path</h2>
            <p className="text-slate-500 text-lg">My evolution from classical roots to contemporary exploration.</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 md:-translate-x-1/2" />

            <div className="space-y-24">
              {DANCE_JOURNEY.map((phase, i) => (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-pink-600 border-4 border-white shadow-lg md:-translate-x-1/2 z-10" />

                  <div className="md:w-1/2 flex flex-col px-8 md:px-16">
                    <div className={`p-8 bg-pink-50/20 rounded-3xl border border-pink-100/30 shadow-sm hover:shadow-xl transition-all ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className={`w-12 h-12 rounded-2xl bg-[#eed2ed] flex items-center justify-center mb-6 ${i % 2 === 0 ? '' : 'md:ml-auto'}`}>
                        {phase.icon}
                      </div>
                      <span className="text-xs font-black text-pink-600 uppercase tracking-widest">{phase.period}</span>
                      <h3 className="text-2xl font-black text-slate-900 mt-2 mb-4">{phase.title}</h3>
                      <p className="text-slate-500 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — VISUAL GALLERY */}
      <section className="py-32 border-t border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Visual Gallery</h2>
            <p className="text-slate-500 text-lg">Moments frozen in time, across stages and studios.</p>
          </div>
          <div className="text-pink-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
            <Star size={16} /> Scroll to explore
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-4 auto-rows-[150px] md:auto-rows-[300px]">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              layoutId={`img-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              onClick={() => setSelectedImageIndex(i)}
              className={`${img.span} relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm bg-slate-50 hover:shadow-2xl transition-shadow duration-500`}
            >
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <p className="text-white font-black text-xl">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedImageIndex(null)}
            >
              <motion.div
                layoutId={`img-${selectedImageIndex}`}
                className="relative max-w-5xl w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-auto">
                  <img 
                    src={GALLERY_IMAGES[selectedImageIndex].src} 
                    alt={GALLERY_IMAGES[selectedImageIndex].alt}
                    className="w-full h-auto max-h-[80vh] object-contain bg-slate-900"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-12 flex justify-between items-center bg-white">
                  <div>
                    <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Gallery Feature</p>
                    <h3 className="text-3xl font-black text-slate-900 leading-none">{GALLERY_IMAGES[selectedImageIndex].alt}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedImageIndex(null)}
                    className="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all shadow-sm"
                  >
                    <X size={28} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* SECTION 4 — What Dance Means to Me */}
      <section 
        ref={sectionRef}
        className="py-40 bg-slate-50 rounded-[3.5rem] relative overflow-hidden my-12"
      >
        <AnimatePresence>
          {pulse && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 4, opacity: 0.15 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 vibrant-gradient rounded-full blur-[100px] z-0"
            />
          )}
        </AnimatePresence>
        
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="vibrant-gradient w-[800px] h-[800px] blur-[150px] absolute -top-1/2 -left-1/4" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={pulse ? {
              scale: [1, 0.4, 0],
              rotate: [0, 180, 720],
              opacity: [1, 0.5, 0]
            } : { opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            viewport={{ once: true }}
            onClick={triggerPulse}
            className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-12 shadow-xl cursor-pointer transition-shadow overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400" 
              alt="Artistic Motif"
              className="w-full h-full object-cover scale-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            animate={pulse ? { filter: "blur(0px)", scale: 1.05 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 leading-tight">
              🎭 <span className="text-pink-600">What Dance Means to Me</span>
            </h2>
            <div className="space-y-8 text-xl md:text-2xl text-slate-600 font-medium leading-relaxed italic">
              <p>
                "Dance, for me, exists between control and freedom."
              </p>
              <p>
                Bharatanatyam taught me precision and discipline, while contemporary taught me how to let go and feel. Somewhere between the two, I found my own movement — a balance of structure, expression, and individuality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — CURRENT + FUTURE */}
      <section className="py-32 border-t border-slate-100">
        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          {/* Left: Current Focus */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                <Layers size={24} />
              </div>
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">🚀 Current Focus</h2>
            </div>
            <ul className="space-y-6">
              {[
                "Actively performing in college events and choreographies",
                "Training in contemporary dance at Ksquad",
                "Exploring freestyle and expressive movement",
                "Continuously improving technique, musicality, and storytelling"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-vibrant group-hover:scale-150 transition-transform" />
                  <p className="text-lg text-slate-600 font-medium group-hover:text-slate-900 transition-colors">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Looking Ahead */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
                <Globe size={24} />
              </div>
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">🌱 Looking Ahead</h2>
            </div>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8 italic">
              I aim to deepen my contemporary practice and explore opportunities that combine performance, creativity, and storytelling — growing not just as a dancer, but as an artist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-slate-100">
        <Link to="/contact" className="group block text-center p-12 rounded-[3.5rem] bg-pink-50/20 hover:bg-pink-50 transition-colors border border-pink-100/30">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 block"
          >
            {/* Standard label space */}
          </motion.span>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 group-hover:text-pink-600 transition-colors flex items-center justify-center gap-6">
            Let's Connect <ArrowUpRight size={64} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform" />
          </h2>
        </Link>
      </section>
    </motion.div>
  );
}

function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-6 py-12 md:py-24"
    >
      <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50/50 border border-pink-100/30 text-pink-600 font-black text-sm uppercase tracking-widest rounded-xl mb-12 hover:bg-pink-50 transition-all w-fit">
        <ArrowLeft size={18} />
        Back to Home
      </Link>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
          >
            Get in Touch
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black leading-tight text-slate-900 mb-8">
            Let's <span className="text-pink-600">Connect</span>.
          </h1>
          <p className="text-slate-600 text-xl leading-relaxed mb-12 max-w-lg">
            Whether you’re looking to collaborate on tech, create through dance, or explore ideas that merge both worlds, feel free to reach out—my inbox is always open.
          </p>

          <div className="space-y-6">
            <a 
              href="mailto:gathasreesan@gmail.com" 
              className="flex items-center gap-6 p-6 bg-pink-50/20 rounded-3xl border border-pink-100/30 shadow-sm hover:shadow-md hover:border-pink-600 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="font-bold text-slate-400 text-sm uppercase tracking-widest mb-1">Email Me</h4>
                <p className="text-xl font-black text-slate-800">gathasreesan@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/gathasreesan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 bg-pink-50/20 rounded-3xl border border-pink-100/30 shadow-sm hover:shadow-md hover:border-pink-600 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                <Linkedin size={28} />
              </div>
              <div>
                <h4 className="font-bold text-slate-400 text-sm uppercase tracking-widest mb-1">LinkedIn</h4>
                <p className="text-xl font-black text-slate-800">in/gathasreesan</p>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/the.gathaa?igsh=MWd3OGw5YTlkdHdobA%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 bg-pink-50/20 rounded-3xl border border-pink-100/30 shadow-sm hover:shadow-md hover:border-pink-600 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                <Instagram size={28} />
              </div>
              <div>
                <h4 className="font-bold text-slate-400 text-sm uppercase tracking-widest mb-1">Instagram</h4>
                <p className="text-xl font-black text-slate-800">@the.gathaa</p>
              </div>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-pink-50/20 p-10 md:p-12 rounded-[3.5rem] border border-pink-100/30 shadow-xl shadow-pink-100/10"
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-20 space-y-6">
        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <Heart size={40} fill="currentColor" />
        </div>
        <h3 className="text-3xl font-black text-slate-900">Message Sent!</h3>
        <p className="text-slate-600 text-lg max-w-xs mx-auto">
          Thanks for reaching out! I'll get back to you as soon as possible.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-indigo-600 font-bold hover:underline mt-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Full Name</label>
          <input 
            type="text" 
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-6 py-4 rounded-2xl bg-pink-50/20 border border-pink-100/30 focus:bg-white focus:border-pink-600 focus:ring-4 focus:ring-pink-600/5 transition-all outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Email Address</label>
          <input 
            type="email" 
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-6 py-4 rounded-2xl bg-pink-50/20 border border-pink-100/30 focus:bg-white focus:border-pink-600 focus:ring-4 focus:ring-pink-600/5 transition-all outline-none"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Subject</label>
        <input 
          type="text" 
          required
          placeholder="Collaboration Inquiry"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-6 py-4 rounded-2xl bg-pink-50/20 border border-pink-100/30 focus:bg-white focus:border-pink-600 focus:ring-4 focus:ring-pink-600/5 transition-all outline-none"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Message</label>
        <textarea 
          rows={5}
          required
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-6 py-4 rounded-2xl bg-pink-50/20 border border-pink-100/30 focus:bg-white focus:border-pink-600 focus:ring-4 focus:ring-pink-600/5 transition-all outline-none resize-none"
        />
      </div>

      <button 
        type="submit"
        disabled={status === 'submitting'}
        className="w-full vibrant-gradient text-white py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-indigo-100 hover:shadow-indigo-200 hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-50 disabled:translate-y-0"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className="text-red-500 text-sm font-bold text-center">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tech" element={<TechPage />} />
            <Route path="/dance" element={<DancePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </BrowserRouter>
  );
}

