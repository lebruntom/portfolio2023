import { useState } from "react";

const Fps: React.FC = () => {
  const [fps, setFps] = useState<string>("");

  var startTime = Date.now();
  var frame = 0;

  function tick() {
    var time = Date.now();
    frame++;
    if (time - startTime > 1000) {
      setFps((frame / ((time - startTime) / 1000)).toFixed(1));
      startTime = time;
      frame = 0;
    }
    window.requestAnimationFrame(tick);
  }
  tick();

  return <div className="fps">{fps} fps</div>;
};

export default Fps;
