import { useEffect, useState } from "react";
import "./stars.css";

interface Star {
  x: number; // vw
  y: number; // vh inicial
  size: number; // px
  delay: number; // s
  duration: number; // s
  layer: number; // 1-4
  horizMoveDuration: number; // duração da animação lateral
  horizMoveDelay: number; // delay da animação lateral
}

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function generateStars(count: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: randomBetween(0, 100),
      y: randomBetween(0, 100),
      size: randomBetween(1, 3),
      delay: randomBetween(0, 70),
      duration: randomBetween(20, 70),
      layer: Math.ceil(randomBetween(1, 4)),
      horizMoveDuration: randomBetween(3, 8),
      horizMoveDelay: randomBetween(0, 20),
    });
  }
  return stars;
}

export default function StarBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(generateStars(400));  // duplicado de 200 para 400
  }, []);

  return (
    <>
      {stars.map((star, i) => {
        const animation = `
          subirEstrelas ${star.duration}s linear infinite ${star.delay}s,
          zigzag ${star.horizMoveDuration}s ease-in-out infinite ${star.horizMoveDelay}s alternate
        `;

        return (
          <div
            key={i}
            className={`w-full star layer${star.layer}`}
            style={{
              left: `${star.x}vw`,
              top: `${star.y}vh`,
              width: star.size,
              height: star.size,
              animation,
            }}
          />
        );
      })}
    </>
  );
}

