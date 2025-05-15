
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Weather App",
    description: "A user-friendly application that provides real-time weather information for any location around the world. It fetches data from a weather API and displays key metrics such as temperature, humidity, wind speed, and weather conditions with an intuitive and clean interface.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Weather API"],
    link: "https://weather-app-hazel-five-80.vercel.app/",
    details: "This project demonstrates API integration, async/await, and responsive design principles."
  },
  {
    id: 2,
    title: "Tic Tac Toe Game",
    description: "Developed a classic Tic Tac Toe game with interactive UI, turn-based logic, and win/draw detection. Designed for 2-player local gameplay with a reset option and dynamic board updates.",
    technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    link: "https://tic-tac-toe-amber-nine.vercel.app/",
    details: "This project demonstrates a strong understanding of DOM manipulation, event handling, and basic game logic development in a browser environment."
  },
  {
    id: 3,
    title: "Gemini Clone",
    description: "A Gemini Clone AI chatbot that allows users to interact naturally by asking questions or having conversations, mimicking the functionality of Google's Gemini AI.",
    technologies: ["React", "Tailwind CSS", "Gemini API"],
    link: "https://gemini-clone-opal-three.vercel.app/",
    details: "It includes features like starting new chats, viewing recent chat history, and providing accurate responses using advanced AI models."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-16">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="project-card flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4 text-gray-700">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-portfolio-accent px-2 py-1 rounded-full text-xs mr-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Link className="h-4 w-4 mr-2" />
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
