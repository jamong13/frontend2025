import { useEffect } from 'react';

function FixAnimation({ visible, onFinished }) {
  useEffect(() => {
    if (!visible) {
      return;
    }
    const timer = window.setTimeout(() => {
      onFinished?.();
    }, 3200);
    return () => window.clearTimeout(timer);
  }, [visible, onFinished]);

  if (!visible) {
    return null;
  }

  return (
    <div id="fix-animation" aria-hidden={!visible}>
      <h1 className="fix-text">more than expected!</h1>
      <div className="text-blind">
        <div className="blind1" />
        <div className="blind2" />
      </div>

      <div className="circle-ani">
        <div className="circle1" />
        <div className="circle2" />
        <div className="circle3" />
        <div className="circle4" />
      </div>
    </div>
  );
}

export default FixAnimation;



