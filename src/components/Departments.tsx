import React from 'react';
import { Code2, Palette, Shield, Handshake } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Department {
  id: number;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  responsibilities: string[];
}

const departments: Department[] = [
  {
    id: 1,
    name: "Development",
    description: "Building robust and scalable solutions",
    icon: Code2,
    color: "bg-blue-500",
    responsibilities: ["Web Development", "Mobile Development", "Backend Systems"]
  },
  {
    id: 2,
    name: "Design",
    description: "Creating beautiful and intuitive experiences",
    icon: Palette,
    color: "bg-purple-500",
    responsibilities: ["UI/UX Design", "Brand Identity", "Visual Design"]
  },
  {
    id: 3,
    name: "Quality Assurance",
    description: "Ensuring excellence in every delivery",
    icon: Shield,
    color: "bg-green-500",
    responsibilities: ["Testing & QA", "Quality Assurance", "Performance Testing"]
  },
  {
    id: 4,
    name: "Business Development",
    description: "Growing partnerships and opportunities",
    icon: Handshake,
    color: "bg-orange-500",
    responsibilities: ["Sales & Marketing", "Client Relations", "Strategic Partnerships"]
  }
];

const Departments: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Departments</h2>
          <p className="text-gray-600 text-lg">
            Specialized teams working together to deliver exceptional results
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept, index) => (
            <AnimatedSection
              key={dept.id}
              animation="slideUp"
              delay={index * 150}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className={`${dept.color} w-16 h-16 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600">{dept.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {dept.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;