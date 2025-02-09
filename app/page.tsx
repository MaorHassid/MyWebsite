'use client'
import { useState } from 'react'
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';

interface Skill {
  icon: string;
  name: string;
  details: string;
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
}

interface Job {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export default function Home() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const skills: Skill[] = [
    { icon: '☕', name: 'Languages', details: 'Java, C#' },
    { icon: '🚀', name: 'Stream Processing', details: 'Kafka, Flink' },
    { icon: '🔍', name: 'Search & Analytics', details: 'Elasticsearch' },
    { icon: '🐳', name: 'Containerization', details: 'Docker, OpenShift' },
    { icon: '💾', name: 'Databases', details: 'Redis' }
  ];

  const projects: Project[] = [
    {
      name: 'Distributed Stream Processing',
      description: 'High-performance data pipeline using Kafka and Flink',
      technologies: ['Java', 'Kafka', 'Flink', 'Docker']
    },
    {
      name: 'Microservices Architecture',
      description: 'Enterprise-grade backend system',
      technologies: ['Java', 'OpenShift', 'Elasticsearch', 'Redis']
    }
  ];

  const jobs: Job[] = [
    {
      company: 'Experis',
      role: 'Senior Backend Engineer',
      duration: '2022 - Present',
      responsibilities: [
        'Design distributed stream processing systems',
        'Optimize Kafka and Flink pipelines',
        'Develop microservices architecture'
      ]
    },
    {
      company: 'Orion Software Solutions Ltd.',
      role: 'Backend Engineer',
      duration: '2018 - 2021',
      responsibilities: [
        'Develop and maintain desktop applications',
        'Collaborate closely with clients to gather requirements'
      ]
    }
  ];

  const [state, handleSubmit] = useForm("meoezvoy");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto flex items-center py-20">
        <div className="w-1/2 pr-8">
          <h1 className="text-5xl font-bold mb-4">Backend Software Engineer</h1>
          <p className="text-xl text-gray-600">
            Specialized in distributed systems and stream processing
          </p>
          <div className="flex space-x-4">
          <a href="https://github.com/MaorHassid" target="_blank" className="text-gray-700 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/maorhassid" target="_blank" className="text-gray-700 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
        </div>
        <div className="w-1/2">
          <Image src="/profile.jpg" alt="Profile" className="rounded-full shadow-lg" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-600">{skill.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="grid md:grid-cols-1 gap-8">
          {jobs.map((job, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">{job.role}</h3>
              <p className="text-gray-600 mb-4">{job.company} | {job.duration}</p>
              <ul className="list-disc list-inside">
                {job.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="mb-2">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 border rounded"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 border rounded h-32"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
                Send Message
              </button>
            </form>
            {state.succeeded && (
            <div className="mt-6 text-center text-green-500">
              <p>Thank you for reaching out! Your message has been received.</p>
            </div>
          )}
          </div>
        </div>
      </section>
    </div>
  )
}
