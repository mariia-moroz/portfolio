import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const defaultOptions = {
  max: 45,
  scale: 1,
  speed: 450,
};

const TiltCard = ({ children, className = "", options = {} }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const element = tiltRef.current;

    if (!element) {
      return undefined;
    }

    VanillaTilt.init(element, { ...defaultOptions, ...options });

    return () => {
      element.vanillaTilt?.destroy();
    };
  }, [options]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
};

export default TiltCard;
