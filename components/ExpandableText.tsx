import React, { useState, useRef, useEffect } from 'react';

interface ExpandableTextProps {
  text: string;
  maxLines?: number;
  className?: string;
}

export const ExpandableText: React.FC<ExpandableTextProps> = ({ 
  text, 
  maxLines = 4, 
  className = '' 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldTruncate, setShouldTruncate] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState<number | undefined>();
  const [expandedHeight, setExpandedHeight] = useState<number | undefined>();
  const textRef = useRef<HTMLParagraphElement>(null);
  const measureRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current && measureRef.current) {
      const fullHeight = measureRef.current.scrollHeight;
      const lineHeight = parseInt(window.getComputedStyle(measureRef.current).lineHeight);
      const maxHeight = lineHeight * maxLines;
      
      setExpandedHeight(fullHeight);
      setCollapsedHeight(maxHeight);
      setShouldTruncate(fullHeight > maxHeight);
    }
  }, [text, maxLines]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${className}`}>
      {/* Hidden element for measuring full height */}
      <p 
        ref={measureRef}
        className="leading-relaxed absolute opacity-0 pointer-events-none -z-10"
        style={{ width: textRef.current?.offsetWidth || 'auto' }}
      >
        {text}
      </p>
      
      {/* Visible text with controlled height */}
      <div 
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ 
          height: isExpanded ? expandedHeight : collapsedHeight,
          maxHeight: isExpanded ? 'none' : `${collapsedHeight}px`
        }}
      >
        <p 
          ref={textRef}
          className="leading-relaxed"
        >
          {text}
        </p>
      </div>
      
      {shouldTruncate && (
        <button
          onClick={toggleExpanded}
          className="mt-3 text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200 underline focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded px-1 py-0.5"
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </div>
  );
};