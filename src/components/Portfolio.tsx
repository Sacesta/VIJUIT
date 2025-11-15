import React from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// Placeholder logos - in a real app, these would be imported SVG files or components
const VivodyneLogo = () => (
    <div className="flex items-center gap-3">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
            <rect x="7" y="7" width="2" height="10" fill="white"/>
            <rect x="11" y="7" width="2" height="10" fill="white"/>
            <rect x="15" y="7" width="2" height="10" fill="white"/>
        </svg>
        <span className="text-3xl font-semibold tracking-wide">vivodyne</span>
    </div>
);

const LoveTheSalesLogo = () => (
    <div className="flex items-center gap-2">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <span className="text-3xl font-bold">lovethesales</span>
    </div>
);

const CreekLogo = () => (
    <div className="flex items-center gap-2">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12c0 4.418 3.582 8 8 8s8-3.582 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" transform="rotate(180 12 12)"/>
        </svg>
        <div>
            <span className="block text-3xl font-bold leading-none">Creek</span>
            <span className="block text-sm tracking-widest">Wearable</span>
        </div>
    </div>
);


const portfolioItems = [
    {
        Logo: VivodyneLogo,
        description: 'UI/UX, 3D rendering, and Implementation to take the Vivodyne website to the next level and establish them as an innovative leader in the biotech industry',
        imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=60',
        bgColor: 'from-purple-800 to-indigo-900',
        contentImage: 'https://cdn.dribbble.com/users/1615584/screenshots/14002907/media/b84620f3299c811f59275e617d12128a.png?compress=1&resize=1200x900' // Placeholder
    },
    {
        Logo: LoveTheSalesLogo,
        description: 'E-commerce redesign with a 30% uplift in signups and nearly +50% in cart conversion rate. We rebuilt their brand identity and took their design to the next level.',
        imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=60',
        bgColor: 'from-teal-500 to-green-500',
        contentImage: 'https://cdn.dribbble.com/users/648922/screenshots/15458032/media/676793f41a8e8093e03126e828a2a46c.png?compress=1&resize=1200x900' // Placeholder
    },
    {
        Logo: CreekLogo,
        description: "Designing the watch interface and accompanying applications for Creek's new smart watch",
        imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=60',
        bgColor: 'from-gray-900 to-black',
        contentImage: 'https://cdn.dribbble.com/users/393506/screenshots/16382873/media/d9c0f99464e837943c5b96431b2661cf.png?compress=1&resize=1200x900' // Placeholder
    }
];

interface PortfolioSectionProps {
  isDark: boolean;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ isDark }) => {
    // State can be added here to manage the carousel for more items
    // For this static representation, we'll map the 3 items directly.
    
    return (
        <section className={`py-20 px-4 ${isDark ? 'bg-[#000000]' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Portfolio</h2>
                        <p className={`mt-2 ${isDark ? 'text-white' : 'text-gray-500'}`}>Proven Success. Real Results.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 flex items-center justify-center hover:bg-blue-50 transition">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 flex items-center justify-center hover:bg-blue-50 transition">
                            <ChevronRight className="w-6 h-6" 0
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className={`bg-gradient-to-br ${item.bgColor} rounded-2xl text-white shadow-xl overflow-hidden flex flex-col h-[550px]`}>
                            <div className="p-8 flex-shrink-0">
                                <item.Logo />
                                <p className="mt-4 text-white/80 leading-relaxed">{item.description}</p>
                            </div>
                            <div className="flex-grow relative mt-4">
                                <img src={item.imageUrl} alt={item.description} className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[120%] max-w-none h-auto object-contain"/>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col items-center gap-8">
                    <div className="w-full max-w-md bg-gray-200 rounded-full h-1.5">
                        {/* Progress bar logic would go here */}
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '33.33%' }}></div>
                    </div>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center gap-3 text-lg">
                        View All
                        <span className="bg-white rounded-full p-1 flex items-center justify-center">
                            <ArrowRight className="w-5 h-5 text-blue-500" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;