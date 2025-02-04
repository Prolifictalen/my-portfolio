"use client"; // Add this line at the top

import { useState, useEffect } from "react";

const Background = () => {
  const icons = [
    "🟡", "🟢", "🔵", "🔴", "🟠", "🟣", "⭐", "💻", "⚡", "🚀", "🔥"
  ];

  const [floatingIcons, setFloatingIcons] = useState([]);

  useEffect(() => {
    const generateIcons = () => {
      const newIcons = Array(15)
        .fill(0)
        .map(() => ({
          id: Math.random(),
          emoji: icons[Math.floor(Math.random() * icons.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
        }));
      setFloatingIcons(newIcons);
    };

    generateIcons();
    const interval = setInterval(generateIcons, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {floatingIcons.map((icon) => (
        <span
          key={icon.id}
          className="absolute text-3xl opacity-50 hover:opacity-100 transition-all"
          style={{
            top: `${icon.y}%`,
            left: `${icon.x}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {icon.emoji}
        </span>
      ))}
    </div>
  );
};

export default Background;
