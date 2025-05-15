import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-700">
              I'm a passionate Web Developer with expertise in both frontend and
              backend technologies. With a strong foundation in computer science
              and a keen eye for design, I create web applications that are not
              only functional but also aesthetically pleasing.
            </p>
            <p className="text-gray-700">
              My journey as a developer began during my time at Charotar
              University, where I developed a deep interest in web technologies.
              Since then, I've been continuously learning and improving my
              skills through various projects and courses.
            </p>
            <p className="text-gray-700">
              I specialize in building modern web applications using React.js,
              Node.js, and various database technologies. My goal is to create
              solutions that are efficient, scalable, and provide an exceptional
              user experience.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-portfolio-blue-dark mb-4">
              Quick Info
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">Name:</span>
                <span>Vrajesh Ghelani</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Email:</span>
                <span>vrajeshghelani6125@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Phone:</span>
                <span>(+91) 9313735404</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Location:</span>
                <span>Gujarat, India</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Role:</span>
                <span>Full Stack Web Developer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
