import { useState, useEffect } from "react";

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 100, y: 100 }]); // Inicia a cobrinha com 1 segmento
  const [direction, setDirection] = useState("RIGHT");
  const [isPlaying, setIsPlaying] = useState(false);
  const [food, setFood] = useState({ x: 200, y: 200 }); // Posição inicial da comida
  const speed = 10; // Velocidade da cobrinha
  const gameAreaWidth = 1350; // Largura da área do jogo
  const gameAreaHeight = 659; // Altura da área do jogo
  const snakeSize = 20; // Tamanho de cada segmento da cobrinha

  // Função para gerar a comida em uma posição aleatória
  const generateFood = () => ({
    x: Math.floor(Math.random() * (gameAreaWidth / snakeSize)) * snakeSize, // Posição aleatória da comida
    y: Math.floor(Math.random() * (gameAreaHeight / snakeSize)) * snakeSize,
  });

  // Função para verificar se a cobrinha comeu a comida
  const checkIfAteFood = (head) => {
    const proximity = 20; // Área de proximidade (ajustável)
    return (
      head.x < food.x + proximity &&
      head.x + snakeSize > food.x &&
      head.y < food.y + proximity &&
      head.y + snakeSize > food.y
    );
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const directions = {
        ArrowUp: "UP",
        ArrowDown: "DOWN",
        ArrowLeft: "LEFT",
        ArrowRight: "RIGHT",
      };
      if (directions[event.key]) {
        setDirection(directions[event.key]);
        setIsPlaying(true); // Começa a movimentar quando o jogador aperta uma tecla
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newHead = { ...prevSnake[0] }; // Cópia do segmento da cabeça
        switch (direction) {
          case "UP":
            newHead.y -= speed;
            break;
          case "DOWN":
            newHead.y += speed;
            break;
          case "LEFT":
            newHead.x -= speed;
            break;
          case "RIGHT":
            newHead.x += speed;
            break;
          default:
            break;
        }

        // Lógica para a cobrinha reaparecer do outro lado
        if (newHead.x < 0) newHead.x = gameAreaWidth - snakeSize;
        if (newHead.x >= gameAreaWidth) newHead.x = 0;
        if (newHead.y < 0) newHead.y = gameAreaHeight - snakeSize;
        if (newHead.y >= gameAreaHeight) newHead.y = 0;

        // Verifica se a cobrinha comeu a comida
        let newSnake;
        if (checkIfAteFood(newHead)) {
          setFood(generateFood()); // Gera uma nova posição para a comida
          newSnake = [newHead, ...prevSnake]; // Adiciona um novo segmento à cobrinha
        } else {
          newSnake = [newHead, ...prevSnake.slice(0, -1)]; // Move a cobrinha sem adicionar segmento
        }

        return newSnake;
      });
    };

    const interval = setInterval(moveSnake, 100); // Intervalo para movimentação
    return () => clearInterval(interval);
  }, [direction, isPlaying, food]);

  return (
    <div className="game-area">
      {snake.map((segment, index) => (
        <div
          key={index}
          className="snake"
          style={{
            left: segment.x + "px",
            top: segment.y + "px",
          }}
        ></div>
      ))}
      <div
        className="food"
        style={{
          left: food.x + "px",
          top: food.y + "px",
        }}
      ></div>
    </div>
  );
};

export default SnakeGame;
