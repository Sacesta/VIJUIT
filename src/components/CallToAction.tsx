import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Have an idea?</h2>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-bold flex items-center gap-2 mx-auto text-lg">
          Let's Talk <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
