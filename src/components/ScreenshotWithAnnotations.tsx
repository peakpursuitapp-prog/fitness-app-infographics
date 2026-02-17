import { useState } from 'react';

interface Annotation {
  x: string;
  y: string;
  title: string;
  description: string;
  position: 'left' | 'right' | 'top' | 'bottom';
  color?: string;
}

interface Props {
  title: string;
  screenshotUrl: string;
  annotations: Annotation[];
}

export function ScreenshotWithAnnotations({ title, screenshotUrl, annotations }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="text-2xl font-semibold mb-8">{title}</h3>
      
      <div className="relative inline-block">
        {/* Mobile Frame */}
        <div className="w-[340px] rounded-[3rem] border-[14px] border-gray-900 bg-gray-900 overflow-hidden shadow-2xl">
          {/* Notch */}
          <div className="bg-gray-900 h-8 flex items-center justify-center relative">
            <div className="w-32 h-6 bg-black rounded-b-2xl absolute top-0"></div>
          </div>
          
          {/* Screenshot */}
          <div className="bg-white">
            <img 
              src={screenshotUrl} 
              alt={title}
              className="w-full h-auto"
            />
          </div>
          
          {/* Home Indicator */}
          <div className="bg-gray-900 h-8 flex items-center justify-center">
            <div className="w-32 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>
        
        {/* Annotations */}
        {annotations.map((annotation, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: annotation.x,
              top: annotation.y,
              zIndex: activeIndex === index ? 20 : 10,
            }}
          >
            {/* Clickable Dot */}
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className={`w-6 h-6 ${annotation.color || 'bg-blue-500'} rounded-full border-2 border-white shadow-lg relative cursor-pointer hover:scale-125 transition-transform ${
                activeIndex === index ? 'ring-4 ring-blue-300/50' : ''
              }`}
            >
              {activeIndex !== index && (
                <div className={`absolute inset-0 ${annotation.color || 'bg-blue-500'} rounded-full animate-ping opacity-50`}></div>
              )}
            </button>
            
            {/* Info Card */}
            {activeIndex === index && (
              <div
                className={`absolute bg-white rounded-xl shadow-2xl border border-gray-200 p-4 min-w-[240px] max-w-[280px] z-50 ${
                  annotation.position === 'left' ? 'right-16 -translate-y-1/2 top-1/2' :
                  annotation.position === 'right' ? 'left-16 -translate-y-1/2 top-1/2' :
                  annotation.position === 'top' ? 'bottom-8 left-1/2 -translate-x-1/2' :
                  'top-8 left-1/2 -translate-x-1/2'
                }`}
              >
                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(null);
                  }}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold"
                >
                  ✕
                </button>

                <div className={`w-1 h-full absolute left-0 top-0 rounded-l-xl ${annotation.color || 'bg-blue-500'}`}></div>
                <div className="pl-3 pr-4">
                  <h4 className="font-semibold text-sm mb-2">{annotation.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{annotation.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
