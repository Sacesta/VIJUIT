import React from 'react';
import { Target, Eye, Users, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About VIJUIT</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            VIJUIT is a global software development company delivering complete IT solutions. 
            We help businesses transform ideas into scalable software with innovation, design, and technology.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <AnimatedSection animation="slideLeft" className="space-y-8">
            <div className="flex items-start space-x-4 group">
              <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build impactful digital solutions that drive business growth and transform 
                  the way companies operate in the digital age.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-teal-100 p-3 rounded-lg group-hover:bg-teal-200 transition-colors">
                <Eye className="w-8 h-8 text-teal-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Shape a smarter digital future by empowering businesses with cutting-edge 
                  technology solutions and innovative approaches.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideRight">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose VIJUIT?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Global expertise, local understanding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">Agile methodology and proven processes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">24/7 support and maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">Cutting-edge technology stack</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeIn" delay={400}>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-8">
              <Users className="w-12 h-12 text-blue-600 mr-4" />
              <h3 className="text-3xl font-bold text-gray-900">Work Culture</h3>
            </div>
            <p className="text-center text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Agile methodology, collaborative teamwork, and continuous learning define how we work. 
              We foster an environment of innovation, creativity, and excellence where every team member 
              contributes to delivering exceptional results.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;