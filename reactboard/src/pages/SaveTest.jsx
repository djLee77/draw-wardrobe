import React, { useState, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';
import DraggableImage from '../components/DraggableImage';
import styles from './Board.module.css';

const Board = () => {
  const [imagesOnCanvas, setImagesOnCanvas] = useState([]);

  useEffect(() => {
    const images = localStorage.getItem('imagesOnCanvas');
    if (images) {
      setImagesOnCanvas(JSON.parse(images));
    }
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <Stage width={700} height={500}>
          <Layer>
            {imagesOnCanvas.map((img, i) => (
              <DraggableImage
                key={i}
                imageSrc={img.imageSrc}
                x={img.x}
                y={img.y}
                scaleX={img.scaleX}
                scaleY={img.scaleY}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Board;
