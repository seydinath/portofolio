import React from "react";
import Confetti from "react-confetti";

export default function ConfettiBurst({ run }: { run: boolean }) {
  // Utilise la taille de la fenêtre pour couvrir tout l'écran
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={run ? 200 : 0}
      recycle={false}
      gravity={0.5}
      initialVelocityY={10}
    />
  );
}
