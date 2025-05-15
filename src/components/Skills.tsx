
import React from 'react';

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"]
  },
  {
    name: "Frontend Development",
    skills: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "React", "Redux"]
  },
  {
    name: "Backend Development",
    skills: ["Node.js", "Express.js", "RESTful APIs"]
  },
  {
    name: "Database Management",
    skills: ["MongoDB", "MySQL", "NoSQL"]
  },
  {
    name: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Responsive Design", "Web Performance"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-blue-50 py-16">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-portfolio-blue-dark mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
