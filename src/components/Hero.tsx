import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, File, Link, Github, Linkedin, Phone } from "lucide-react";
import { assets } from "../assets/assets.js";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-blue-dark mb-4">
              VRAJESH GHELANI
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-portfolio-blue-light mb-6">
              Web Developer
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              I design and develop modern web applications with a focus on clean
              code, performance, and user experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-portfolio-accent hover:bg-blue-600">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">
                  <File className="mr-2 h-4 w-4" />
                  View Projects
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center space-x-4">
              <a
                href="tel:+1234567890"
                className="text-gray-600 hover:text-portfolio-accent transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
              <a
                href="mailto:vrajeshghelani6125@gmail.com"
                className="text-gray-600 hover:text-portfolio-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/vrajeshghelani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-portfolio-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/vrajesh-ghelani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-portfolio-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-portfolio-accent rounded-full overflow-hidden border-4 border-white shadow-xl">
              {/* Profile image would go here */}
              <div className="w-full h-full flex items-center justify-center text-white text-5xl font-bold">
                <img
                  src={assets.Vrajesh}
                  alt="Vrajesh"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
