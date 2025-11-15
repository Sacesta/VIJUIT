import React from 'react';

interface TemplatesProps {
  isDark: boolean;
}

const Templates: React.FC<TemplatesProps> = ({ isDark }) => {
  const features = [
    { icon: '👨‍💻', title: 'Curated by top designers', desc: 'Professional quality assured' },
    { icon: '🎯', title: 'Built-in guidance', desc: 'Step-by-step instructions' },
    { icon: '🔧', title: 'Templates for every purpose', desc: 'Wide variety of options' }
  ];

  const tags = ['Figma quick', 'Generate code quickly', 'Popular templates', 'Productivity', 'Project portfolio', 'Interactive toy', 'Landing websites', 'Teamwork'];

  return (
    <section className={`py-20 px-4 ${isDark ? 'bg-[#000000]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
          Start faster with templates made<br />by experienced creators
        </h2>

        <div className="grid md:grid-cols-3 gap-8 my-12">
          {features.map((feature, i) => (
            <div key={i} className="text-center bg-blue-100 p-10 rounded-xl">
              <div className="w-20 h-20 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-3xl mb-4">
                {feature.icon}
              </div>
              <h3 className='text-xl font-bold mb-2 text-black'>{feature.title}</h3>
              <p className='text-black'>{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`px-4 py-2 rounded-full text-sm ${isDark ? 'bg-white text-black' : 'bg-white text-black'} shadow`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
