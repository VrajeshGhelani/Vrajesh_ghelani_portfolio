
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="bg-blue-50 py-16">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-portfolio-blue-dark">Information Technology</h3>
              <div className="flex items-center mt-2 md:mt-0">
                <span className="bg-portfolio-accent text-white px-3 py-1 rounded-full text-sm">Mar '23</span>
              </div>
            </div>
            <p className="text-gray-600 mb-2">Charotar University of Science & Technology</p>
            <p className="text-gray-700">CGPA: 8.75</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-portfolio-blue-dark">XII (GSEB)</h3>
              <div className="flex items-center mt-2 md:mt-0">
                <span className="bg-portfolio-accent text-white px-3 py-1 rounded-full text-sm">May '21</span>
              </div>
            </div>
            <p className="text-gray-600 mb-2">Bhakti International School</p>
            <p className="text-gray-700">PR: 92.50%</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-portfolio-blue-dark">X (GSEB)</h3>
              <div className="flex items-center mt-2 md:mt-0">
                <span className="bg-portfolio-accent text-white px-3 py-1 rounded-full text-sm">May '19</span>
              </div>
            </div>
            <p className="text-gray-600 mb-2">Bhakti International School</p>
            <p className="text-gray-700">PR: 89.87%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
