import { useState, useEffect, Children, cloneElement } from "react";
import "./index.scss";

export default function Carousel({ children, interval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const total = Children.count(children);

  useEffect(() => {
    const auto = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, interval);
    return () => clearInterval(auto);
  }, [total, interval]);

  return (
    <div className="carousel">
      <div
        className="slides"
        style={{
          transform: `translateX(-${current * 101}%)`,
        }}
      >
        {Children.map(children, (child, index) =>
          cloneElement(child, { className: `slide ${child.props.className || ""}` })
        )}
      </div>

      <div className="indicators">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={i === current ? "active" : ""}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}
