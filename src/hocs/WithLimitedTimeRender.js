import { useState, useEffect, useRef } from 'react';

/**
 * Limit rendering of component to a given number of seconds (HOC).
 *
 * @param {Component} wrapped component to render.
 * @param {number} Number of seconds to display before hiding.
 * @return {Component} wrapped component with limited render time.
 */
const WithLimitedTimeRender = (
  WrappedComponent,
  delayUntilHideInSeconds,
) => function Comp(props) {
  const [isVisbile, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);
  useEffect(() => {
    // One of our props has changed, render WrappedComponent.
    setIsVisible(true);
    // Set a timeout for when to stop rendering the WrappedComponent.
    timeoutRef.current = setTimeout(
      () => {
        setIsVisible(false);
      },
      delayUntilHideInSeconds * 1000
    );
    // Cleanup: before re-executing the useEffect (or on component unmount),
    // clear the timeout.
    return () => clearTimeout(timeoutRef.current);
  }, [props]);

  if (! isVisbile) {
    return null;
  }
  return <WrappedComponent {...props} />;
};

export default WithLimitedTimeRender;
