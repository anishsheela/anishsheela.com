import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Briefcase, GraduationCap, Code, Mic, Heart, FileText, Award } from 'lucide-react';

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('about');

    const experience = [
        {
            role: "Consultant",
            company: "BizInteligence Technologies",
            period: "March 2024 - Present",
            location: "India",
            highlights: [
                "Adapted opensource dating application built using Python and React Native",
                "Migrated complex website from Drupal 7 to Drupal 10",
                "Maintained web portal providing identity verification through PKCS"
            ]
        },
        {
            role: "Fullstack Engineer",
            company: "Meta (via Alpha Net)",
            period: "March 2023 - October 2023",
            location: "Singapore",
            highlights: [
                "Maintained internal web tools ensuring compliance with privacy standards",
                "Rebuilt three legacy functionalities using modern methods",
                "Contributed 90 crucial changes to Facebook codebase"
            ]
        },
        {
            role: "Software Engineer",
            company: "Credit Agricole CIB (via Adecco Personnel)",
            period: "May 2022 - March 2023",
            location: "Singapore",
            highlights: [
                "Maintained and rebuilt corporate website using NextJS and Drupal 9",
                "Implemented automated deployment process using Jenkins",
                "Applied data science methodologies to address data issues"
            ]
        },
        {
            role: "Lead Engineer",
            company: "QBurst Technologies",
            period: "August 2020 - May 2022",
            location: "India",
            highlights: [
                "Led team of six developers",
                "Developed web portal with progressive web app using ReactJS",
                "Automated builds using Acquia pipelines and Jenkins"
            ]
        },
        {
            role: "Lead Engineer",
            company: "Accenture",
            period: "January 2018 - August 2020",
            location: "Singapore"
        },
        {
            role: "Software Engineer",
            company: "Axelerant Technologies",
            period: "July 2016 - September 2017",
            location: "India"
        }
    ];

    const activities = [
        { icon: <GraduationCap className="w-5 h-5" />, title: "M.Tech - Software Engineering", desc: "BITS Pilani" },
        { icon: <Award className="w-5 h-5" />, title: "MicroMasters Statistics & Data Science", desc: "MIT" },
        { icon: <Code className="w-5 h-5" />, title: "German B1", desc: "Goethe Institut" },
        { icon: <Mic className="w-5 h-5" />, title: "Tech Conference Speaker", desc: "Opensource advocate" }
    ];

    const hobbies = ["3D Printing", "Malayalam Computing", "Open Source", "Language Learning"];

    const certifications = [
        "Acquia Certified Drupal 8",
        "AWS Certified Cloud Practitioner",
        "DataCamp Certifications"
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* Header */}
            <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Anish Anilkumar
                        </h1>
                        <div className="hidden md:flex gap-6">
                            {['About', 'Experience', 'Skills', 'Activities', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => {
                                        const element = document.getElementById(item.toLowerCase());
                                        element?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="hover:text-blue-400 transition-colors text-gray-300"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="about" className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-5xl font-bold mb-4">
                        Full-Stack Web Developer
                    </h2>
                    <p className="text-xl text-gray-400 mb-6">
                        Consultant at BizInteligence Technologies | M.Tech Student at BITS Pilani
                    </p>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                        With 12 years of experience in software engineering, I specialize in complex web app development
                        and building scalable infrastructure for millions of users. Former Meta engineer with expertise
                        in Drupal, React, and modern web technologies.
                    </p>
                    <div className="flex gap-4 justify-center mb-8">
                        <a href="https://github.com/anishsheela/" target="_blank" rel="noopener noreferrer"
                           className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/anishanil/" target="_blank" rel="noopener noreferrer"
                           className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:aneesh.nl@gmail.com"
                           className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                    <a href="/anish_a_resume.pdf" download
                       className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors">
                        <FileText className="w-5 h-5" />
                        Download Resume
                    </a>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="py-16 px-6 bg-gray-800/50">
                <div className="container mx-auto max-w-5xl">
                    <h3 className="text-3xl font-bold mb-8 text-center">Tech Stack</h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div>
                            <h4 className="text-lg font-semibold text-blue-400 mb-3">Backend & CMS</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Drupal', 'PHP', 'Python', 'MySQL'].map((skill) => (
                                    <span key={skill} className="px-3 py-1.5 bg-gray-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-blue-400 mb-3">Frontend</h4>
                            <div className="flex flex-wrap gap-2">
                                {['ReactJS', 'React Native', 'TypeScript', 'JavaScript', 'CSS'].map((skill) => (
                                    <span key={skill} className="px-3 py-1.5 bg-gray-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-blue-400 mb-3">DevOps & Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Docker', 'Git', 'Jenkins', 'AWS', 'Linux', 'Automation'].map((skill) => (
                                    <span key={skill} className="px-3 py-1.5 bg-gray-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-3 text-center">Emerging Tech</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {['Machine Learning', 'AI', 'PyTorch', 'K6', 'Fusion360'].map((skill) => (
                                <span key={skill} className="px-3 py-1.5 bg-gray-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section id="experience" className="py-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    <h3 className="text-3xl font-bold mb-12 text-center">Professional Experience</h3>
                    <div className="space-y-8">
                        {experience.map((exp, idx) => (
                            <div key={idx} className="border-l-2 border-blue-500 pl-6 pb-8">
                                <div className="flex items-start gap-3">
                                    <Briefcase className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold">{exp.role}</h4>
                                        <p className="text-blue-400">{exp.company}</p>
                                        <p className="text-sm text-gray-400 mb-3">{exp.period} • {exp.location}</p>
                                        {exp.highlights && (
                                            <ul className="space-y-2">
                                                {exp.highlights.map((highlight, i) => (
                                                    <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                                        <span className="text-blue-400 mt-1.5">•</span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-400 mt-8">
                        Previous roles at Zyxware Technologies & Hello Infinity Business Solutions (2012-2016)
                    </p>
                </div>
            </section>

            {/* Education & Activities */}
            <section id="activities" className="py-20 px-6 bg-gray-800/30">
                <div className="container mx-auto max-w-5xl">
                    <h3 className="text-3xl font-bold mb-12 text-center">Education & Activities</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {activities.map((activity, idx) => (
                            <div key={idx} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-750 transition-colors">
                                <div className="inline-flex p-3 bg-blue-500/20 rounded-lg mb-4">
                                    {activity.icon}
                                </div>
                                <h4 className="font-bold mb-2">{activity.title}</h4>
                                <p className="text-sm text-gray-400">{activity.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-800 rounded-lg p-8">
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-blue-400" />
                            Certifications
                        </h4>
                        <div className="grid md:grid-cols-3 gap-3">
                            {certifications.map((cert) => (
                                <div key={cert} className="px-4 py-2 bg-gray-700 rounded-lg text-sm text-center">
                                    {cert}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Hobbies */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
                        <Heart className="w-6 h-6 text-red-400" /> Interests & Hobbies
                    </h3>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {hobbies.map((hobby) => (
                            <span key={hobby} className="px-6 py-3 bg-gray-800 rounded-lg text-lg hover:bg-gray-700 transition-colors">
                {hobby}
              </span>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-gray-400 mb-3">Open Source Contributions</p>
                        <div className="flex gap-4 justify-center">
                            <a href="https://github.com/anishsheela/" target="_blank" rel="noopener noreferrer"
                               className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                            <a href="https://www.drupal.org/u/anish.a" target="_blank" rel="noopener noreferrer"
                               className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                                <ExternalLink className="w-4 h-4" />
                                Drupal.org
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 px-6 bg-gray-800/30">
                <div className="container mx-auto max-w-2xl text-center">
                    <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
                    <p className="text-gray-400 mb-8">
                        I'm seeking full-stack web development roles and always interested in hearing about new projects and opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:aneesh.nl@gmail.com"
                            className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors"
                        >
                            Email Me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/anishanil/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors"
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                    <p className="text-gray-400 mt-6 text-sm">
                        Kerala, India • +91 9620263587
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-400">
                <p>© 2025 Anish Anilkumar. Built with React & Tailwind CSS.</p>
            </footer>
        </div>
    );
}