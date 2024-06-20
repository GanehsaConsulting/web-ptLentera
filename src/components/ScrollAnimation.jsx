'use client'
import React, { useRef, useEffect, useState } from 'react';
import 'animate.css';

export const ScrollAnimation = ({ children, animation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef();

  const handleScroll = () => {
    const element = elementRef.current;
    const boundingClientRect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (
      boundingClientRect.top >= 0 &&
      boundingClientRect.bottom <= windowHeight
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      elementRef.current.classList.add('animate__animated', animation);
    } else {
      elementRef.current.classList.remove('animate__animated', animation);
    }
  }, [isVisible, animation]);

  return (
    <div ref={elementRef}>
      {children}
    </div>
  );
};

