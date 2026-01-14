import { useEffect, useRef, useState } from "react";

export default function FadeIn({ 
  children, 
  duration = 700, 
  delay = 0, 
  direction = "up", 
  distance = 40,
  threshold = 0.15 
}) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    // Cleanup to prevent memory leaks
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  // Define translation logic based on direction
  const getDirectionStyles = () => {
    if (visible) return "opacity-100 translate-x-0 translate-y-0";
    
    switch (direction) {
      case "up": return `opacity-0 translate-y-[${distance}px]`;
      case "down": return `opacity-0 -translate-y-[${distance}px]`;
      case "left": return `opacity-0 translate-x-[${distance}px]`;
      case "right": return `opacity-0 -translate-x-[${distance}px]`;
      default: return "opacity-0 translate-y-10";
    }
  };

  return (
    <div
      ref={ref}
      style={{ 
        transitionDuration: `${duration}ms`, 
        transitionDelay: `${delay}ms` 
      }}
      className={`transition-all ease-out will-change-transform ${getDirectionStyles()}`}
    >
      {children}
    </div>
  );
}