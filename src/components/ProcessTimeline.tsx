import React from 'react';
import { FileText, Calendar, Palette, TestTube, Rocket } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Requirements",
    description: "Understanding your vision and gathering detailed project requirements",
    icon: FileText
  },
  {
    id: 2,
    title: "Planning",
    description: "Strategic planning and roadmap creation for optimal project execution",
    icon: Calendar
  },
  {
    id: 3,
    title: "Design/Development",
    description: "Creating beautiful designs and robust development solutions",
    icon: Palette
  },
  {
    id: 4,
    title: "Testing",
    description: "Comprehensive testing to ensure quality and reliability",
    icon: TestTube
  },
  {
    id: 5,
    title: "Launch & Support",
    description: "Successful deployment with ongoing support and maintenance",
    icon: Rocket
  }
];

const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-gray-600 text-lg">
            A proven methodology that delivers exceptional results
          </p>
        </AnimatedSection>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-teal-500"></div>
          
          {processSteps.map((step, index) => (
            <AnimatedSection
              key={step.id}
              animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'}
              delay={index * 200}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className={`bg-gradient-to-br ${
                  index % 2 === 0 
                    ? 'from-blue-50 to-blue-100' 
                    : 'from-teal-50 to-teal-100'
                } p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  <div className="flex items-center mb-4">
                    <div className={`${
                      index % 2 === 0 ? 'bg-blue-500' : 'bg-teal-500'
                    } w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
              
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-500 rounded-full items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;