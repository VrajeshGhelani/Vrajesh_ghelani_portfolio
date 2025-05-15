
import React from 'react';

const Achievements = () => {
  return (
    <section id="achievements" className="bg-white py-16">
      <div className="section-container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-portfolio-blue-dark">NPTEL Certificate | Introduction to Programming in C</h3>
              <div className="flex items-center mt-2 md:mt-0">
                <span className="bg-portfolio-accent text-white px-3 py-1 rounded-full text-sm">Jan '24 - Apr '24</span>
              </div>
            </div>
            <p className="text-gray-600 mb-2">Elite certification</p>
            <p className="text-gray-700">Demonstrating proficiency in C programming fundamentals.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-portfolio-blue-dark">NPTEL Certificate | Data Structure and Algorithms using Java</h3>
              <div className="flex items-center mt-2 md:mt-0">
                <span className="bg-portfolio-accent text-white px-3 py-1 rounded-full text-sm">Jul '24 - Oct '24</span>
              </div>
            </div>
            <p className="text-gray-600 mb-2">Elite certification</p>
            <p className="text-gray-700">Showcasing advanced understanding of data structures and algorithmic approaches in Java.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
