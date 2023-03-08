import { useEffect, useState, useRef } from "react";
function useIntersectionObserver(options) {
  const [target, setTarget] = useState(null);
  const [intersecting, setIntersecting] = useState(false);
  const observer = useRef(
    new window.IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options)
  );
  useEffect(() => {
    const currentTarget = target;
    const currentObserver = observer.current;
    if (currentTarget) {
      currentObserver.observe(currentTarget);
    }
    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [target]);
  return [setTarget, intersecting];
}
export default useIntersectionObserver;
