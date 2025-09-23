import React from 'react';
import { Code, Cloud, Brain, Palette, ShoppingCart, Zap, HeadphonesIcon, Smartphone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "Tailored software solutions built to meet your specific business requirements and scale with your growth.",
    icon: Code,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and DevOps practices to optimize your deployment and operations.",
    icon: Cloud,
    color: "bg-teal-500"
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by artificial intelligence to automate and enhance your business processes.",
    icon: Brain,
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that provide exceptional user experiences across all platforms.",
    icon: Palette,
    color: "bg-pink-500"
  },
  {
    id: 5,
    title: "E-commerce & ERP Solutions",
    description: "Comprehensive e-commerce platforms and ERP systems to streamline your business operations.",
    icon: ShoppingCart,
    color: "bg-orange-500"
  },
  {
    id: 6,
    title: "API Integration & Automation",
    description: "Seamless API integrations and workflow automation to connect your systems efficiently.",
    icon: Zap,
    color: "bg-yellow-500"
  },
  {
    id: 7,
    title: "Ongoing Support",
    description: "24/7 technical support and maintenance to ensure your systems run smoothly at all times.",
    icon: HeadphonesIcon,
    color: "bg-green-500"
  },
  {
    id: 8,
    title: "Mobile Application Development",
    description: "Native and cross-platform mobile apps that deliver exceptional performance on all devices.",
    icon: Smartphone,
    color: "bg-indigo-500"
  }
];

const ServiceCards: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions designed to transform your business and drive digital innovation
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.id}
              animation="slideUp"
              delay={index * 100}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;