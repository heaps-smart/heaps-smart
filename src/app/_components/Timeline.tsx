import { ReactNode } from 'react';

interface TimelineItemProps {
  title: string;
  description: string;
  tags: string[];
  alignment: 'left' | 'right';
  link?: {
    url: string;
    text: string;
  };
}

interface TimelineProps {
  items: TimelineItemProps[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pt-4 pb-4" role="list" aria-label="Timeline of services">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-amber-200 md:block" aria-hidden="true"></div>
      
      <div className="relative">
        {items.map((item, index) => (
          <div 
            key={index}
            role="listitem"
            aria-label={`Timeline item: ${item.title}`}
            className={`flex flex-col md:flex-row items-center relative animate-fadeIn mb-16 md:mb-8 group ${
              index === 0 ? 'animation-delay-0' : 
              index === 1 ? 'animation-delay-300 md:-mt-28' : 
              index === 2 ? 'animation-delay-600 md:-mt-28' : 
              'animation-delay-900 md:-mt-28'
            }`}
          >
            {item.alignment === 'left' ? (
              <>
                <div className="md:w-1/2 md:pr-12 relative z-10">
                  <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:border-amber-200 transition-all duration-300 border border-gray-100 mb-4 md:ml-auto md:mr-0 max-w-md text-left">
                    <h3 className="text-2xl font-semibold mb-3 text-black/80 tracking-tight">{item.title}</h3>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs font-medium px-2.5 py-0.5 rounded bg-amber-100 text-amber-800">{tag}</span>
                      ))}
                    </div>
                    {item.link && (
                      <a 
                        href={item.link.url} 
                        className="inline-block text-amber-600 hover:text-amber-800 font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.link.text} →
                      </a>
                    )}
                  </div>
                </div>
                
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-amber-400 border-4 border-white z-10 group-hover:animate-pulseRing"
                  aria-hidden="true"
                ></div>
                
                <div className="md:w-1/2 relative z-10" />
              </>
            ) : (
              <>
                <div className="md:w-1/2 relative z-10" />
                
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-amber-400 border-4 border-white z-10 group-hover:animate-pulseRing"
                  aria-hidden="true"
                ></div>
                
                <div className="md:w-1/2 md:pl-12 relative z-10">
                  <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:border-amber-200 transition-all duration-300 border border-gray-100 mb-4 max-w-md">
                    <h3 className="text-2xl font-semibold mb-3 text-black/80 tracking-tight">{item.title}</h3>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs font-medium px-2.5 py-0.5 rounded bg-amber-100 text-amber-800">{tag}</span>
                      ))}
                    </div>
                    {item.link && (
                      <a 
                        href={item.link.url} 
                        className="inline-block text-amber-600 hover:text-amber-800 font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.link.text} →
                      </a>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
